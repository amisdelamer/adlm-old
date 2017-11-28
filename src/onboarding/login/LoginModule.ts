import { ActionContext } from "vuex"
import { getStoreBuilder } from 'vuex-typex'
import { State } from 'src/store'

export interface LoginState {
  username: string;
  password: string;
  passwordVisible: boolean;
  loading: boolean;
}

const initLoginState: LoginState = {
  username: '',
  password: '',
  passwordVisible: false,
  loading: false
}

const moduleBuilder = getStoreBuilder<State>().module('login', initLoginState)

function inputUsername(state: LoginState, payload: string) {
  state.username = payload
}

function inputPassword(state: LoginState, payload: string) {
  state.password = payload
}

function togglePassword(state: LoginState) {
  state.passwordVisible = !state.passwordVisible
}

function startLoading(state: LoginState) {
  state.loading = true
}

function stopLoading(state: LoginState) {
  state.loading = false
}

async function login(context: ActionContext<LoginState, State>) {
  module.startLoading()
  return new Promise(resolve => {
    setTimeout(() => {
      module.stopLoading()
      module.inputUsername('')
      module.inputPassword('')
      resolve()
    }, 1000)
  })
}

const stateGetter = moduleBuilder.state()

const module = {
  get state() { return stateGetter() },

  // mutations
  inputUsername: moduleBuilder.commit(inputUsername),
  inputPassword: moduleBuilder.commit(inputPassword),
  togglePassword: moduleBuilder.commit(togglePassword),
  startLoading: moduleBuilder.commit(startLoading),
  stopLoading: moduleBuilder.commit(stopLoading),

  // actions
  login: moduleBuilder.dispatch(login)
}

export default module
