// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from '@/util/currency'

import '@/assets/css/base'
import '@/assets/css/checkout'
import '@/assets/css/product'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueLazyLoad, {
  loading: '../static/loading-svg/loading-spinning-bubbles.svg',
  try: 3
}).use(infiniteScroll)

Vue.filter('currency', currency)

const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    updateUserInfo (state, nickName) {
      state.nickName = nickName
    },
    updateCartCount (state, cartCount) {
      state.cartCount += cartCount
    },
    initCartCount (state, cartCount) {
      state.cartCount = cartCount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
