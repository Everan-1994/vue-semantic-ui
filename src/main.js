import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import $ from 'jquery'

import '../semantic/dist/semantic'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
