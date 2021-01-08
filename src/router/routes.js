import Test from '@/views/test'
import NotFound from '@/views/NotFound'

function requireView(url) {
  return () => import(`@/views/${url}`)
}

export default [
  {
    path: '/',
    name: 'index',
    component: requireView('index')
  },
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
