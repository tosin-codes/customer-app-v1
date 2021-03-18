export const state = () => ({
  user: null,
})

export const mutations = {
  setStates(state, data) {
    Object.keys(data).forEach((key) => (state[key] = data[key]))
  },
}

export const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
  authenticated(state) {
    return state.auth.loggedIn
  },
  user(state) {
    return state.auth.user
  },
}
