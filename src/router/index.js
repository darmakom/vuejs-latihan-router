import { createRouter, createWebHistory} from "vue-router"
import DashboardView from "@/views/Dashboard.vue"
import AboutView from "@/views/About.vue"
import UserView from "@/views/User.vue"

const routes = [
    {path: '/', component: DashboardView},
    {path: '/about', component: AboutView},
    {path: '/user', component: UserView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
