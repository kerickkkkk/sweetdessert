// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'


//以上 npm套件內容，以下自訂義-------
import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import dayfilter from './filters/day'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('day', dayfilter)

axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//導航守衛，需要驗證就走驗證api，切換頁面才會啟動

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.meta.requiresAuth) {
    // console.log('這裡要驗證')
    const api = `${process.env.APIPATH}/api/user/check`
    // console.log(api)
    //沒有在vue本體內，無法使用this.$http
    axios.post(api).then((response) => {
      // console.log(response)
      if (response.data.success) {
        console.log('驗證成功')
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next() // 一開始測試要先用放行
  }

})

// meta: { requiresAuth: true }