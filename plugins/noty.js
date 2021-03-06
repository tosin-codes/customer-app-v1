import Vue from 'vue'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'

export default function () {
  Vue.use(VueNoty, {
    timeout: 3000,
    progressBar: true,
    layout: 'topRight',
  })
}
