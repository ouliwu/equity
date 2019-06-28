import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.use(MintUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
