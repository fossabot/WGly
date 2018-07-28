import Vuex from 'vuex'
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";

export interface State {
    name: string
}
const state: State = {
    name: 'World'
}

export const config = {
    namespaced: true,
    state: state
}