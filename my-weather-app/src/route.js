import { createWebHashHistory, createRouter } from "vue-router";
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const routes = [
    { path: "/",component:Login },
    { path: "/signup",component:Signup}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
