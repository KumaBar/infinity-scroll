import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueObserveVisibility from 'vue-observe-visibility'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueObserveVisibility)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
