/* Vue Imports */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Component Imports */
import ChildComponent from '../components/child.vue';

Vue.use(VueRouter);

const router: VueRouter = new VueRouter({

    routes: [
        {
            //Generic Index Route
            path: '/index',
            component: ChildComponent
        }
    ]
});

export default router;