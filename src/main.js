import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import { sync } from 'vuex-router-sync'
import customDialog from './views/Dialog.vue'

Vue.component('CustomDialog', customDialog)
Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')