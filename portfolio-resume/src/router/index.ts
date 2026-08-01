import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [

        {
            path: '/',
            name: 'resume',
            component: () => import('@/pages/IndexPage.vue')
        },

        {
            path: '/pdf',
            name: 'resume-pdf',
            component: () => import('@/pages/IndexPdfPage.vue')
        }

    ]

})

export default router