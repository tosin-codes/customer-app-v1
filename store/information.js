export const state = () => ({
  year: '',
  make: '',
  model: '',
  size: '',
  plate_number: '',
  car_insurance: '',
  registered_owner: '',
  vehicle_registration: '',
  amount: null,
  duration: '',
  repayment_plan: '',
  offer: {},
})
export const mutations = {
  setStates(state, data) {
    Object.keys(data).forEach((key) => (state[key] = data[key]))
  },
}
