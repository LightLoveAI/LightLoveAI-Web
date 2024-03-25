import { createApp } from 'vue'
import { Lazyload } from 'vant'
import dayjs from 'dayjs'
import zhCN from 'dayjs/locale/zh-cn'

import { setupPinia } from './modules/pinia'
import { setupHead } from './modules/head'

import { loadFontAsync } from './modules/font'

import App from './App.vue'
import { setupRouter } from './router'

import '@unocss/reset/tailwind-compat.css'
import './styles/main.scss'
import 'uno.css'

import 'vant/es/toast/style'
import 'vant/es/image-preview/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import { loadLang } from './lang'

async function bootstrap() {
  const app = createApp(App)

  app.use(Lazyload)

  setupPinia(app)
  setupHead(app)
  setupRouter(app)

  // 全局语言包加载
  await loadLang(app)

  app.mount('#app')

  loadFontAsync('EB Garamond', '/fonts/EBGaramond08-Regular.ttf')
  loadFontAsync('花园明朝体', '/fonts/HanaMinA.ttf')

  dayjs.locale(zhCN)
}

bootstrap()
