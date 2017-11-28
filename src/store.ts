import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { getStoreBuilder } from 'vuex-typex'

import { LoginState } from './onboarding/login/LoginModule'

Vue.use(Vuex)

export interface State {
  login: LoginState
}

const store: Store<State> = getStoreBuilder<State>().vuexStore()

export default store

// const store = new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//
//   state: {
//     viewport: {
//       width: window.innerWidth,
//       height: window.innerHeight
//     },
//     drawer: {
//       visible: true,
//       mini: true
//     },
//     login: {
//
//     }
//   },
//   getters: {
//     isExtraSmall (state) {
//       return state.viewport.width <= 600
//     },
//     isSmall (state) {
//       return state.viewport.width > 600 && state.viewport.width <= 1024
//     },
//     isMedium (state) {
//       return state.viewport.width > 1024 && state.viewport.width <= 1440
//     },
//     isLarge (state) {
//       return state.viewport.width > 1440 && state.viewport.width <= 1920
//     },
//     isExtraLarge (state) {
//       return state.viewport.width > 1920
//     },
//     drawerMini (state, getters) {
//       return state.drawer.mini && !(getters.isExtraSmall || getters.isSmall)
//     }
//   },
//   mutations: {
//     updateViewport (state) {
//       state.viewport.width = window.innerWidth
//       state.viewport.height = window.innerHeight
//     },
//     toggleDrawer (state) {
//       state.drawer.visible = !state.drawer.visible
//     },
//     toggleMiniDrawer (state) {
//       state.drawer.mini = !state.drawer.mini
//     }
//   },
//   actions: {
//
//   },
//   modules: {
//
//   },
//   plugins: [
//
//   ]
// })
//
// window.onresize = function () {
//   store.commit('updateViewport')
// }
//
