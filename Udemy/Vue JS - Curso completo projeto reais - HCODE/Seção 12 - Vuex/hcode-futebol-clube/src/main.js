import Vue from 'vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Vue2Filters from "vue2-filters"
import store from "./store/store"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vue2Filters)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
