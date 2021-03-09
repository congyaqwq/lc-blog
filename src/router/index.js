import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router' //引入vue-router模块

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta ? to.meta.title : 'lc-template'
  next()
})

export default router
