import Router from 'vue-router'
export default new Router({
    mode: "history",
    routes: [
        {
            name: '',
            path: '/',
            component: () => import('../views/List'),
        },
    ]
})