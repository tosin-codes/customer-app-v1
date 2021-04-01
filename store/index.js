export const strict = false
export const getters = {
  authenticated(state) {
    return state.auth.loggedIn
  },
  user(state) {
    return state.auth.user
  },
  totalloans(state) {
    if (state.auth.user.loans.length === 0) {
      return 0
    }
    return state.auth.user.loans
      .reduce((acc, loan) => {
        return acc + loan.offer_amount
      }, 0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  closedloans(state) {
    if (state.auth.user.loans.length === 0) {
      return 0
    }
    return state.auth.user.loans
      .filter((loan) => loan.status === 6)
      .reduce((acc, loan) => {
        return acc + loan.offer_amount
      }, 0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  activeloan(state) {
    if (!state.auth.user.active_loan) {
      return 0
    }
    return state.auth.user.active_loan
  },
}

export const mutations = {
  setActiveLoanLevel(state, loan) {
    state.auth.user.active_loan = loan
  },
  setValidationErrors(state, errors) {
    state.validation.errors = errors
  },
}
