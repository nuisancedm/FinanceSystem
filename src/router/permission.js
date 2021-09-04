import router from './index'
import { getToken } from '../utils/tokens'
//导航守卫

router.beforeEach((to, from, next) => {
    if (getToken()) {//本地存储有token
        if (to.path === "/login") {
            next("/")
        } else {
            next()
        }
    } else {//本地存储无token
        if (to.path === "/login") {
            next()
        } else {
            next("/login")
        }
    }
})