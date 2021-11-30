import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loja from '../views/Loja.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/loja',
        name: 'Loja',
        component: Loja
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router