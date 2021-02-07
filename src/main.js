import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Table from './components/Table'
import Image from './components/Image'

Vue.use(VueRouter);
const routes =[
  {path: '/', component: Home},
  {path: '/table', component: Table},
  {path: '/image', component: Image},

];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
