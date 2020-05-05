import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { saveAsPng, saveAsJpeg } from 'save-html-as-image'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(saveAsPng, saveAsJpeg)

Vue.component('vue-draggable-resizable', VueDraggableResizable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
