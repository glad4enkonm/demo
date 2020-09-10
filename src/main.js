import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import { var1, var2 } from './data'
import { show } from './func'

show(var1)
show(var2)