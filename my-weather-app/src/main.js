import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Home from './components/home.vue'


const routes = [

  {path:'/', component: Login},
  {path:'/signup', component: Signup},
  {path:'/home', component: Home}

];


const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
