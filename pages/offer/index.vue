<template>
  <div>
    <div class="grid grid-cols-12 maxWidth mx-auto">
      <GeneralNav />
      <div class="my-container">
        <div class="">
          <div class="flex flex-row items-center mb-10">
            <div>
              <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
            </div>
            <div class="font-bold text-gray-700">Dashboard</div>
          </div>
          <DashboardCards />
          <div class="mt-24">
            <div>
              <!-- <div class="bg-gray-100">
                <div class="px-4 sm:px-6 lg:px-8">
                  <div class="text-center">
                    <div>
                      <img
                        class="mx-auto my-5"
                        src="../../assets/images/loading.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="container p-3" v-if="error">
              <div class="bg-gray-100">
                <div class="py-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
                  <div class="text-center">
                    <div>
                      <h2 class="text-3xl font-bold sm:text-3xl lg:text-3xl">
                        Ooops :(
                      </h2>
                      <p>{{ error }}!!!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container p-3">
              <div class="bg-gray-100">
                <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
                  <div class="text-center">
                    <div>
                      <img
                        class="mx-auto w-12 my-5"
                        src="../../assets/icons/approved.png"
                        alt=""
                      />
                    </div>
                    <p class="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
                      Provisional Offer
                    </p>
                    <p
                      class="mt-3 max-w-4xl mx-auto text-sm sm:mt-5 sm:text-xl"
                    >
                      Please find below details of your provisional loan offers.
                    </p>
                  </div>
                </div>

                <div class="my-10 md:grid md:grid-cols-3 px-12 md:gap-x-12">
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
                          <span class="mt-2 mr-2 text-2xl font-medium">
                            ₦
                          </span>
                          <span class="font-extrabold text-3xl">
                            {{ desired_amount | currency }}
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
                            {{ desired_tenor }} Months
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
                            {{ desired_repayment_plan }}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-16 bg-white pb-12 lg:mt-20">
                  <div class="relative z-0">
                    <div
                      class="absolute inset-0 h-5/6 bg-gray-100 lg:h-2/3"
                    ></div>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="relative lg:grid lg:grid-cols-7">
                        <div
                          class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
                        >
                          <div
                            class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
                          >
                            <div class="flex-1 flex flex-col">
                              <div class="bg-white px-6 py-10">
                                <div>
                                  <h3
                                    class="text-center text-2xl font-medium text-gray-900"
                                    id="tier-hobby"
                                  >
                                    Standard Offer
                                  </h3>
                                  <div
                                    class="mt-4 flex items-center justify-center"
                                  >
                                    <span
                                      class="px-3 flex items-start lg:text-4xl xl:text-6xl text-6xl tracking-tight text-gray-900"
                                    >
                                      <span
                                        class="mt-2 mr-2 text-4xl font-medium"
                                      >
                                        ₦
                                      </span>
                                      <span class="font-extrabold text-5xl">
                                        {{ offer.standard_offer.offer }}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                              >
                                <div class="flex flex-col">
                                  <!-- put values here -->
                                  <div class="text-center">
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Comprehensive Insurance & Car Tracker
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{ offer.standard_offer.expenses }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Disbursement amount
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.standard_offer.disbursed_amount
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Monthly repayment amount
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.standard_offer.final_repayment
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Car Value
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{ offer.standard_offer.car_value }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Duration
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        {{
                                          offer.standard_offer.data.offer_tenor
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Total amount payable
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.standard_offer
                                            .total_amount_payable
                                        }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-8">
                                  <div class="rounded-lg shadow-md">
                                    <a
                                      href="#"
                                      class="block w-full text-center rounded-lg border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white hover:bg-orange-700"
                                      aria-describedby="tier-hobby"
                                    >
                                      Accept
                                    </a>
                                  </div>
                                  <small
                                    class="text-orange-600 text-center block"
                                    >(Keep Your Car)</small
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4"
                        >
                          <div class="relative z-10 rounded-lg shadow-xl">
                            <div
                              class="pointer-events-none absolute inset-0 rounded-lg border-2 border-orange-300"
                              aria-hidden="true"
                            ></div>
                            <div
                              class="absolute inset-x-0 top-0 transform translate-y-px"
                            >
                              <div
                                class="flex justify-center transform -translate-y-1/2"
                              >
                                <span
                                  class="inline-flex rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
                                >
                                  Exclusive
                                </span>
                              </div>
                            </div>
                            <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                              <div>
                                <h3
                                  class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                                  id="tier-growth"
                                >
                                  Best Offer
                                </h3>
                                <div
                                  class="mt-4 flex items-center justify-center"
                                >
                                  <span
                                    class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl"
                                  >
                                    <span
                                      class="mt-2 mr-2 text-4xl font-medium"
                                    >
                                      ₦
                                    </span>
                                    <span class="font-extrabold text-5xl">
                                      {{ offer.best_offer.offer }}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10"
                            >
                              <div class="flex flex-col">
                                <!-- put values here -->
                                <div class="text-center">
                                  <div class="my-5">
                                    <div class="text-orange-600">
                                      Comprehensive Insurance & Car Tracker
                                    </div>
                                    <div class="font-semibold text-2xl">
                                      ₦{{ offer.best_offer.expenses }}
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="my-5">
                                    <div class="text-orange-600">
                                      Disbursement amount
                                    </div>
                                    <div class="font-semibold text-2xl">
                                      ₦{{ offer.best_offer.disbursed_amount }}
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="my-5">
                                    <div class="text-orange-600">
                                      Monthly repayment amount
                                    </div>
                                    <div class="font-semibold text-2xl">
                                      ₦{{ offer.best_offer.final_repayment }}
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="my-5">
                                    <div class="text-orange-600">Car Value</div>
                                    <div class="font-semibold text-2xl">
                                      ₦{{ offer.best_offer.car_value }}
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="my-5">
                                    <div class="text-orange-600">Duration</div>
                                    <div class="font-semibold text-2xl">
                                      {{ offer.best_offer.data.offer_tenor }}
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="my-5">
                                    <div class="text-orange-600">
                                      Total amount payable
                                    </div>
                                    <div class="font-semibold text-2xl">
                                      ₦{{
                                        offer.best_offer.total_amount_payable
                                      }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <!-- put values here -->
                              </div>
                              <div>
                                <!-- put values here -->
                              </div>
                              <div class="mt-8">
                                <div class="rounded-lg shadow-md">
                                  <a
                                    href="#"
                                    class="block w-full text-center rounded-lg border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white hover:bg-orange-700"
                                    aria-describedby="tier-scale"
                                  >
                                    Accept
                                  </a>
                                </div>
                                <small class="text-orange-600 text-center block"
                                  >(Drop Your Car)</small
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
                        >
                          <div
                            class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
                          >
                            <div class="flex-1 flex flex-col">
                              <div class="bg-white px-6 py-10">
                                <div>
                                  <h3
                                    class="text-center text-2xl font-medium text-gray-900"
                                    id="tier-scale"
                                  >
                                    Premium Offer
                                  </h3>
                                  <div
                                    class="mt-4 flex items-center justify-center"
                                  >
                                    <span
                                      class="px-3 flex items-start lg:text-4xl xl:text-6xl text-6xl tracking-tight text-gray-900"
                                    >
                                      <span
                                        class="mt-2 mr-2 text-4xl font-medium"
                                      >
                                        ₦
                                      </span>
                                      <span class="font-extrabold text-5xl">
                                        {{ offer.premium_offer.offer }}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                              >
                                <div class="flex flex-col">
                                  <!-- put values here -->
                                  <div class="text-center">
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Comprehensive Insurance & Car Tracker
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{ offer.premium_offer.expenses }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Disbursement amount
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.premium_offer.disbursed_amount
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Monthly repayment amount
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.premium_offer.final_repayment
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Car Value
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{ offer.premium_offer.car_value }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Duration
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        {{
                                          offer.premium_offer.data.offer_tenor
                                        }}
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="my-5">
                                      <div class="text-orange-600">
                                        Total amount payable
                                      </div>
                                      <div class="font-semibold text-2xl">
                                        ₦{{
                                          offer.premium_offer
                                            .total_amount_payable
                                        }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <!-- put values here -->
                                </div>
                                <div>
                                  <!-- put values here -->
                                </div>
                                <div class="mt-8">
                                  <div class="rounded-lg shadow-md">
                                    <a
                                      href="#"
                                      class="block w-full text-center rounded-lg border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white hover:bg-orange-700"
                                      aria-describedby="tier-scale"
                                    >
                                      Accept
                                    </a>
                                  </div>
                                  <small
                                    class="text-orange-600 text-center block"
                                    >(Drop Your Car)</small
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center mb-10" v-if="!loading && !error">
                <div class="w-64">
                  <button
                    class="block w-full px-6 py-3 border rounded-md shadow-sm text-base font-medium text-orange-600 hover:bg-gray-100"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="bg-gray-200 text-white p-6 rounded-lg">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                      class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                    >
                      <div
                        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                      >
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider"
                              >
                                Standard
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider"
                              >
                                Premium
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-orange-600 uppercase tracking-wider"
                              >
                                Best
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-100">
                            <tr>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                Interest Rate
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                8%
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                8%
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                10%
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                Comprehensive Insurance
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                3% of car value
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                3% of car value
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                3% of car value
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                Car Tracker
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                ₦50,0000
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                ₦50,000
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                              >
                                ₦50,000
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import DashboardCards from '~/components/DashboardCards'
export default {
  components: {
    DashboardCards,
    GeneralNav,
  },
  data() {
    return {}
  },
  methods: {
    getEstimation() {
      let vm = this
      if (localStorage.getItem('estimation') == null) {
        this.$router.push('/')
        return false
      }
      let data = JSON.parse(localStorage.getItem('estimation'))
      localStorage.removeItem('estimation')
      localStorage.removeItem('desired')
      this.$axios
        .post('/estimate', data)
        .then(function (response) {
          let data = response.data
          vm.desired_amount = data.desired_amount
          vm.desired_tenor = data.desired_tenor
          vm.desired_repayment_plan = vm.checkRepayment(
            data.desired_repayment_plan
          )
          vm.offer = data.offer
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
                vm.$noty.error('SOMETHING WENT WRONG')
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
    // let vm = this
    // vm.getEstimation()
  },
}
</script>

<style></style>
