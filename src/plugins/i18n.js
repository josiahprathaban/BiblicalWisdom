import Vue from 'vue';
import VueI18n from 'vue-i18n'

import en from '@/lang/en'
import ms from '@/lang/ms'
import zh from '@/lang/zh'

Vue.use(VueI18n);

const messages = {
  en: en,
  ms: ms,
  zh: zh,
}

//BOC:[locale]
var locale = window.location.pathname.replace(/^\/([^/]+).*/i, '$1')
if (locale == '/') locale = 'en'
  //EOC

export default new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages,
})