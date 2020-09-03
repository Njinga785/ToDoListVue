import Vue from 'vue'
import App from './App.vue' 
import AddForm from './components/AddForm.vue'
import ListTodo from './components/ListTodo.vue' 
import axios from 'axios' 
Vue.prototype.$http = axios 
import Vue from 'vue'
import Vuex from 'vuex' 
import store from './components/store'
import 'es6-promise/auto'

Vue.use(Vuex)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import VueRouter from 'vue-router' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false 

const routes = [
   { path: '/new', component: AddForm },
  { path: '/list', component: ListTodo, props: {whatToDisplay: "all"}},
  { path: '/done', component: ListTodo, props: {whatToDisplay: "done"}},
  { path: '/todo', component: ListTodo, props: {whatToDisplay: "todo"}}
   ]

   const router = new VueRouter({
    routes 
  })

new Vue({ 
  store: store,
  router,
  render: h => h(App),
}).$mount('#app')
