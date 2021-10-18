<template>
  <div>
    <div class="grid grid-cols-12 maxWidth mx-auto">
      <client-only>
        <GeneralNav />
        <div class="my-container">
          <div class="mt-5">
            <div class="mt-4">
              <div
                class="container flex flex-col justify-center pb-3 h-screen"
                v-if="loading"
              >
                <div class="px-4 lg:px-8">
                  <div class="text-center">
                    <div class="flex flex-col">
                      <img
                        class="mx-auto my-5"
                        src="../../assets/images/loading.gif"
                        alt=""
                      />
                      <span class="text-gray-400">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container pb-3" v-if="error">
                <div class="bg-gray-100">
                  <div class="py-12 px-4 lg:px-8 lg:pt-20">
                    <div class="text-center">
                      <div>
                        <h2 class="text-3xl font-bold sm:text-3xl lg:text-3xl">
                          Sorry :(
                        </h2>
                        <p>
                          We are unable to give you a system generated offer
                          right now.
                        </p>
                        <button
                          class="bg-orange-900 hover:bg-blue-800 border border-transparent self-center shadow-sm lg:self-start font-medium text-white mt-5 px-3 py-2 rounded-md"
                        >
                          <nuxt-link to="/create-loan">Try Again</nuxt-link>
                        </button>
                        <div class="pt-4 lg:flex items-center justify-center">
                          <h2 class="text-blue-900 text-xs font-medium">
                            <i
                              >Please speak with our customer care agent on -</i
                            >
                          </h2>
                          <div class="text-xs">
                            <a href="tel:+23412299954" class="p-3">
                              <font-awesome-icon
                                :icon="['fas', 'phone']"
                                class="cursor-pointer text-sm text-blue-900"
                                @click.prevent="reset"
                              />
                              <span> +234 1 22 999 54</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container" v-if="!loading && !error">
                <div class="bg-gray-100" v-show="message2">
                  <div class="pt-3 px-2 sm:px-2 lg:px-2">
                    <div class="text-center">
                      <div>
                        <img
                          class="mx-auto w-12 my-5"
                          src="../../assets/icons/approved.png"
                          alt=""
                        />
                      </div>
                      <p
                        class="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl"
                      >
                        Provisional Offer
                      </p>
                      <p
                        class="mt-3 max-w-4xl mx-auto text-sm sm:mt-5 sm:text-xl"
                      >
                        Please find below details of your provisional loan
                        offers.
                      </p>
                    </div>
                  </div>

                  <div class="my-10 md:grid lg:grid-cols-3 px-12 md:gap-x-12">
                    <div class="my-6">
                      <div
                        class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded"
                      >
                        amount requested
                      </div>
                      <div class="border border-gray-600 p-6 rounded-lg shadow">
                        <div class="flex items-center justify-center">
                          <span
                            class="px-3 flex items-start text-6xl tracking-tight text-gray-500"
                          >
                            <span class="mr-2 text-2xl font-medium"> ₦ </span>
                            <span class="font-extrabold text-3xl">
                              <!-- currency -->
                              {{ summaryDetails.amount | currency }}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="my-6">
                      <div
                        class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded"
                      >
                        duration
                      </div>
                      <div class="border border-gray-600 p-6 rounded-lg shadow">
                        <div class="flex items-center justify-center">
                          <span
                            class="px-3 flex items-start text-6xl tracking-tight text-gray-500"
                          >
                            <span class="font-extrabold text-3xl">
                              {{ summaryDetails.duration }}
                              Months
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="my-6">
                      <div
                        class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded"
                      >
                        repayment plan
                      </div>
                      <div class="border border-gray-600 p-6 rounded-lg shadow">
                        <div class="flex items-center justify-center">
                          <span
                            class="px-3 flex items-start text-6xl tracking-tight text-gray-500"
                          >
                            <span class="font-extrabold text-3xl">
                              {{
                                checkRepayment(summaryDetails.repayment_plan)
                              }}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                      <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="flex-1">
                          <h3 class="text-xl font-semibold text-gray-900">OFFER ONE</h3>
                          <p class="text-xl mt-6 text-orange-500">Drive your car.</p>
                          <p class="mt-4 flex items-baseline text-gray-900">
                            <span class="text-5xl font-extrabold tracking-tight">₦{{ offer.standard_offer.offer }}</span>
                          </p>

                          <p class="mt-6 text-gray-800 text-lg font-semibold">Fees & Charges.</p>
                          <!-- Feature list -->
                          <ul role="list" class="mt-6 space-y-6">
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Car Value: ₦{{ offer.standard_offer.car_value }}</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Comprehensive Insurance: ₦{{ offer.standard_offer.expenses }}</span>
                            </li>
                            
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Change of Ownership: ₦{{ offer.standard_offer.change_of_ownership }}</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Car Tracker: ₦{{ offer.standard_offer.car_tracker }}</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Disbursement Amount: ₦{{ offer.standard_offer.disbursed_amount }}</span>
                            </li>

                            <li class="flex"> 
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Monthly repayment: ₦{{ offer.standard_offer.final_repayment }}</span>
                            </li> 

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Total Amount Payable: ₦{{ offer.standard_offer.total_amount_payable }}</span>
                            </li> 

                          </ul>
                        </div>

                        <button 
                        @click="accept(offer.standard_offer.token)"
                        class="transition-opacity duration-1000 ease-in opacity-50 hover:opacity-100 bg-orage-50 text-orage-700 hover:bg-orange-600 hover:text-white mt-8 block w-full py-3 px-6 border border-orange-500 rounded-md text-center font-medium">
                          Accept
                        </button>
                      </div>

                      <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="flex-1">
                          <h3 class="text-xl font-semibold text-gray-900">OFFER TWO</h3>
                          <p class="text-xl mt-6 text-orange-500">Drop your car.</p>
                          <p class="mt-4 flex items-baseline text-gray-900">
                            <span class="text-5xl font-extrabold tracking-tight">₦ {{ offer.premium_offer.offer }}</span>
                          </p>

                          <p class="mt-6 text-gray-800 text-lg font-semibold">Fees & Charges.</p>
                          <!-- Feature list -->
                          <ul role="list" class="mt-6 space-y-6">
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Car Value: ₦{{ offer.premium_offer.car_value }}</span>
                            </li>
                            
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Comprehensive Insurance: ₦{{ offer.premium_offer.expenses }}</span>
                            </li>
                            
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Change of Ownership: ₦{{ offer.premium_offer.change_of_ownership }}</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Car Tracker: ₦{{ offer.premium_offer.car_tracker }}</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Disbursement Amount: ₦{{ offer.premium_offer.disbursed_amount }}</span>
                            </li>

                            <li class="flex"> 
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Monthly repayment: ₦{{ offer.premium_offer.final_repayment }}</span>
                            </li> 

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Total Amount Payable: ₦{{ offer.premium_offer.total_amount_payable }}</span>
                            </li> 

                          </ul>
                        </div>

                        <button 
                        @click="accept(offer.premium_offer.token)"
                        class="transition-opacity duration-1000 ease-in opacity-50 hover:opacity-100 bg-orage-50 text-orage-700 hover:bg-orange-600 hover:text-white mt-8 block w-full py-3 px-6 border border-orange-500 rounded-md text-center font-medium">
                          Accept
                        </button>
                      </div>

                      <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="flex-1">
                          <h3 class="text-xl font-semibold text-gray-900 uppercase">offer three</h3>
                          <p class="text-xl mt-6 text-orange-500">Sell your car.</p>
                          <p class="mt-4 flex items-baseline text-gray-900">
                            <span class="text-5xl font-extrabold tracking-tight">₦ {{ offer.forsale.offer }}</span>
                          </p>

                          <p class="mt-6 text-gray-800 text-lg font-semibold">Fees & Charges.</p>
                          <!-- Feature list -->
                          <ul role="list" class="mt-6 space-y-6">
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Car Inspection: Free</span>
                            </li>
                            
                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Reseller Commision: 5% - 30% of sale value (₦{{ offer.forsale.offer }})</span>
                            </li>

                            <li class="flex">
                              
                              <svg class="flex-shrink-0 w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span class="ml-3 text-gray-500">Reseller Fee: ₦{{ offer.forsale.commission.initial }} - ₦{{ offer.forsale.commission.final }}</span>
                            </li>
                          </ul>
                        </div>

                        <button 
                          @click="accept(offer.forsale.token)"
                          class="transition-opacity duration-1000 ease-in opacity-50 hover:opacity-100 bg-orage-50 text-orage-700 hover:bg-orange-600 hover:text-white mt-8 block w-full py-3 px-6 border border-orange-500 rounded-md text-center font-medium">
                            Accept
                        </button>
                      </div>
                    </div>

                    <div class="flex justify-center my-16 mb-16" v-if="!loading && !error">
                      <div class="w-64">
                        <button
                          class="block w-full px-6 py-3 border rounded-md shadow-sm text-base font-medium text-orange-600 hover:bg-gray-100"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="message">
                <AwaitMessage />
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import Spinner from '~/components/Spinner'
import AwaitMessage from '~/components/messages/AwaitMessage'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Offer',
    }
  },
  transition: {
    name: 'fade',
  },
  components: {
    GeneralNav,
    Spinner,
    AwaitMessage,
  },
  data() {
    return {
      loading: true,
      offer: '',
      error: '',
      message: false,
      message2: true,
    }
  },
  computed: {
    ...mapState('information', { summaryDetails: (state) => state }),
  },
  methods: {
    async getEstimation() {
      let vm = this
      await this.$axios
        .post('/estimate', {
          desired_amount: this.$store.state.information.amount,
          desired_tenor: this.$store.state.information.duration,
          desired_repayment_plan: this.$store.state.information.repayment_plan,
          insurance: this.$store.state.information.car_insurance,
          make: this.$store.state.information.make,
          model: this.$store.state.information.model,
          phone: this.$store.state.information.phone,
          plate_number: this.$store.state.information.plate_number,
          registered_owner: this.$store.state.information.registered_owner,
          state: this.$store.state.information.vehicle_registration,
          trim: this.$store.state.information.size,
          year: this.$store.state.information.year,
          first_name: this.$store.getters.user.first_name,
          email: this.$store.getters.user.email,
          last_name: this.$store.getters.user.last_name,
          phone: this.$store.getters.user.phone,
        })

        .then(function (response) {
          let data = response.data

          vm.desired_amount = data.desired_amount
          vm.desired_tenor = data.desired_tenor
          vm.desired_repayment_plan = vm.checkRepayment(
            data.desired_repayment_plan
          )

          vm.offer = data.data
          vm.loading = false
          vm.$noty.success('success')
        })
        .catch(function (error) {
          if (error.response) {
            switch (error.response.status) {
              case 422:
                const data = error.response.data.errors
                for (var key in data) {
                  vm.$noty.error(data[key])
                  vm.loading = false
                  vm.error = data[key]
                }
                break
              case 500:
                vm.$noty.error(error.response.data.message)
                vm.loading = false
                vm.error = 'SOMETHING WENT WRONG'
                break
              default:
                vm.loading = false
                vm.$noty.error('SOMETHING WENT WRONG')
                vm.error = 'SOMETHING WENT WRONG'
                break
            }
          }
          vm.loading = false
          vm.error = 'It seems there is an issue!!!'
        })
    },
    async accept(token) {
      let vm = this
      window.scrollTo({ top: 0, behavior: 'smooth' })
      vm.message2 = false
      vm.loading = true
      this.$axios
        .post(`/estimate/${token}/create-loan`)
        .then((response) => {
          vm.loading = false
          vm.message = true
          vm.message2 = false
          let loan = response.data.data.loan
          this.$store.commit('setActiveLoanLevel', loan)
          //this.$router.push('/dashboard')
        })
        .catch(function (error) {
          vm.loading = false
          if (error.response) {
            switch (error.response.status) {
              case 422:
                const data = error.response.data.errors
                for (var key in data) {
                  vm.$noty.error(data[key])
                  vm.loading = false
                  vm.error = data[key]
                }
                break
              case 500:
                vm.$noty.error(error.response.data.message)
                vm.loading = false
                vm.error = 'SOMETHING WENT WRONG'
                break
              default:
                vm.$noty.error('SOMETHING WENT WRONG')
                vm.loading = false
                vm.error = 'SOMETHING WENT WRONG'
                break
            }
          }
        })
    },
    checkRepayment(value) {
      switch (value) {
        case 2:
          return 'Bi-Monthly'
          break
        case 4:
          return 'Quarterly'
          break
        default:
          return 'Monthly'
          break
      }
    },
  },
  filters: {
    currency(amount) {
      const amt = Number(amount)
      return (
        (amt && amt.toLocaleString(undefined, { maximumFractionDigits: 2 })) ||
        '0'
      )
    },
  },
  mounted() {
    let vm = this
    vm.getEstimation()
  },
}
</script>

<style></style>
