import Vue from 'vue'
import App from 'components/pages/app'
import router from './router'
import store from './store'
import './styles/app.styl'
import 'css-reset-and-normalize/css/reset-and-normalize.css'
import 'api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
