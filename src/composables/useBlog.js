import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import * as Api from "@/api/blog"

export default function () {
  const route = useRoute()
  const list = ref([])
  const { page = 1 } = route.query
  const per_page = 12
  const payload = ref({
    page,
    per_page
  })

  const fetchData = async () => {
    const { data } = await Api.list(payload.value)
    list.value = data
  }

  onMounted(fetchData)

  return {
    list,
    payload,
    fetchData
  }

}