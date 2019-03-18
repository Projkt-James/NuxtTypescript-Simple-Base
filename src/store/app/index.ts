import { GetterTree, MutationTree, ActionTree } from 'vuex';

//Interface model of state
export interface State {
    
    pageTitle: string;
    title: string;
    subTitle: string;
}

//Set default state
const state: State = {

    pageTitle: "Welcome :)",
    title: "Hi!",
    subTitle: "Welcome To <span class=\"vue-color-green\">Nuxt</span><span class=\"vue-color-blue\">Typescript</span> Simple Base!"
}

//States getters
const getters: GetterTree<State, any> = {

    getPageTitle: state => state.pageTitle,
    getTitle: state => state.title,
    getSubTitle: state => state.subTitle
}

//States mutations
const mutations: MutationTree<State> = {

}

//States actions 
const actions: ActionTree<State,any> = {

}

export default {
    state: () => (state),
    getters: getters,
    mutations,
    actions
}

