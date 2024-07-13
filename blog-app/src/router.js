import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: () => import('./pages/ArticleList.vue') },
    { path: '/create', name: 'create', component: () => import('./pages/AddArticle.vue') },
    { path: '/details/:id', name: 'details', component: () => import('./pages/ArticleDetail.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router