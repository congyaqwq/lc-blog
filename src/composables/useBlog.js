import { ref, onMounted, watch, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

import * as Api from "@/api/blog"

export default function () {
  const route = useRoute()
  const list = ref([])
  const total = ref(0)
  const { page = 1 } = route.query
  const keyword = computed(() => route.query.keyword)
  const hasMore = computed(() => total.value > list.value.length)
  const per_page = 12
  const payload = reactive({
    page,
    per_page,
    keyword
  })

  watch(keyword, (keyword) => {
    list.value = []
    fetchData({ keyword, page: 1 })
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
    fetchData,
    hasMore
  }

}