import { ref, onMounted, watch, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

import * as Api from "@/api/blog"

export default function () {
  const route = useRoute()
  const list = ref([])
  const total = ref(0)
  const { page = 1 } = route.query
  const keyword = computed(() => route.query.keyword)
  const tags = computed(() => route.query.tags)
  const hasMore = computed(() => total.value > list.value.length)
  const per_page = 12
  const payload = reactive({
    page,
    per_page,
    keyword,
    tags
  })

  const fetchData = async (fixedData = {}, init = false) => {
    if (init) {
      list.value = []
    }
    const { list: resList, total: resTotal } = await Api.list({ ...payload, ...fixedData })
    list.value = list.value.concat(resList)
    total.value = resTotal
  }

  watch([keyword, tags], ([keyword = "", tags = ""]) => {
    console.log(keyword, 1, tags)
    list.value = []
    fetchData({ keyword, page: 1, tags })
  })


  onMounted(fetchData)

  return {
    list,
    payload,
    total,
    fetchData,
    hasMore
  }

}