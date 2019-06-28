import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.scss'

Vue.config.productionTip = false

Vue.use(MintUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
