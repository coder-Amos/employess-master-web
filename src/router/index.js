import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/home/index'),
            children:[
                {
                    path:'',
                    redirect:'ebaseinfo'
                },
                {
                path:'ebaseinfo',
                component:() =>
                import ('../views/components/employessBaseInfo')
            }]
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../views/loginPage/index')
        }
    ]
})

// 导航守卫，渲染动态路由
// router.beforeEach((to, from, next) => {
//     from.meta.keepAlive = true
//     if (to.path === '/home') {
//         from.meta.keepAlive = false
//     }
// })

export default router