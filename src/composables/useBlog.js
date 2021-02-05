import { ref, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

import * as Api from "@/api/blog"

export default function () {
  const route = useRoute()
  const list = ref([])
  const total = ref(0)
  const { page = 1, keyword: key = "" } = route.query
  const keyword = ref(key)
  const per_page = 12
  const payload = reactive({
    page,
    per_page,
    keyword
  })

  const fetchData = async (fixedData = {}) => {
    const { list: resList, total: resTotal } = await Api.list({ ...payload.value, ...fixedData })
    list.value = list.value.concat(resList)
    total.value = resTotal
  }

  onMounted(fetchData)

  return {
    list,
    payload,
    total,
    fetchData
  }

}