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
    path: '/relationship',
    name: 'relationship',
    component: requireView('relationship')
  },
  {
    path: '/contact',
    name: 'contact',
    component: requireView('contact')
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
