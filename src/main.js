import { createApp } from 'vue'
import components from '@/common'
import App from './App.vue'
import router from '@/router'
import marked from 'marked'
import highlight from 'highlight.js'
import mixin from '@/utils/mixin'

import './style/index.less'
import 'highlight.js/styles/atom-one-light.css'

const app = createApp(App)
app.mixin(mixin)
app.use(router).use(components)

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const hljs = highlight
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
    return hljs.highlight(validLanguage, code).value
  },
  initHighlighting() { },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

app.mount('#app')
