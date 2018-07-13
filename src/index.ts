/* Vue */
import Vue from 'vue';
import router from './router';
import store from './store';

/* Root App Component */
import App from "./components/app.vue"; 

new Vue({
    el: '#app',
    router, store: store,
    
    render: h => h(App)
});
