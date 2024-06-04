import { createWebHistory, createRouter } from 'vue-router'

import AppHome from"./views/AppHome.vue";
import AppProjects from"./views/AppProjects.vue";
import AppAbout from"./views/AppAbout.vue";
import AppContacts from"./views/AppContacts.vue";
import AppShowProject from './views/AppShowProject.vue';
import NotFound from './components/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/project/:id', 
            name: 'show',
            component: AppShowProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }


    ]
})


export default router;