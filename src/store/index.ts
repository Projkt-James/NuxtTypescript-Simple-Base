/* Vue */
import Vue from 'vue';

/* Vuex */
import Vuex from 'vuex';

/* Store Modules */
import {app} from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app
    }
});

