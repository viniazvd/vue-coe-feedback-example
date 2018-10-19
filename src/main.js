import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import VueCoeFeedback from './lib/support/plugin'
import { VueCoeFeedback } from 'vue-coe-feedback'

Vue.use(VueCoeFeedback, store, { delay: 8000 })

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
