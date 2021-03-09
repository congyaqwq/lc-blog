import Test from '@/views/test'
import NotFound from '@/views/NotFound'

function requireView(url) {
  return () => import(`@/views/${url}`)
}

export default [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: requireView('index')
  },
  {
    path: '/detail',
    name: 'blogDetail',
    meta: {
      title: '详情'
    },
    component: requireView('detail')
  },
  {
    path: '/relationship',
    name: 'relationship',
    meta: {
      title: '👭链接'
    },
    component: requireView('relationship')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: '联系'
    },
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
