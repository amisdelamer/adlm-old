import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    drawer: {
      visible: true,
      mini: true
    },
    login: {

    }
  },
  getters: {
    isExtraSmall (state) {
      return state.viewport.width <= 600
    },
    isSmall (state) {
      return state.viewport.width > 600 && state.viewport.width <= 1024
    },
    isMedium (state) {
      return state.viewport.width > 1024 && state.viewport.width <= 1440
    },
    isLarge (state) {
      return state.viewport.width > 1440 && state.viewport.width <= 1920
    },
    isExtraLarge (state) {
      return state.viewport.width > 1920
    },
    drawerMini (state, getters) {
      return state.drawer.mini && !(getters.isExtraSmall || getters.isSmall)
    }
  },
  mutations: {
    updateViewport (state) {
      state.viewport.width = window.innerWidth
      state.viewport.height = window.innerHeight
    },
    toggleDrawer (state) {
      state.drawer.visible = !state.drawer.visible
    },
    toggleMiniDrawer (state) {
      state.drawer.mini = !state.drawer.mini
    }
  },
  actions: {

  },
  modules: {

  },
  plugins: [

  ]
})

window.onresize = function () {
  store.commit('updateViewport')
}

export default store
