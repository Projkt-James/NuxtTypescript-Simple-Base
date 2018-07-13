/* Vuex */
import Vuex from 'vuex';

import { GetterTree, MutationTree, ActionTree } from 'vuex';

//Interface model of state
export interface State {
    
    title: string;
    subTitle: string;
}

//Set default state
const state: State = {

    title: "Hi!",
    subTitle: "Welcome To <span class=\"vue-color-green\">Vue</span><span class=\"vue-color-blue\">Typescript</span> Simple Base!"

}

//States getters
const getters: GetterTree<State, any> = {

    getTitle: state => state.title,

    getSubTitle: state => state.subTitle
    
}

//States mutations
const mutations: MutationTree<State> = {

}

//States actions 
const actions: ActionTree<State,any> = {

}

export const app = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}

