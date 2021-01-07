import Test from '@/views/test'
import NotFound from '@/views/NotFound'

export default [
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]
