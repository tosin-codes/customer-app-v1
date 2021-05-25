<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div
            class="flex flex-row items-center mb-10 ml-3 md:ml-0 mt-10 md:mt-0"
          >
            <div>
              <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
            </div>
            <div class="font-bold text-gray-700">Loan History</div>
          </div>
          <DashboardCards />
          <div
            class="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 md:px-1"
          >
            <div v-if="!this.$store.getters.user.loans">
              <div
                class="flex flex-col bg-white border-dashed border-2 py-32 mx-3 md:mx-0"
              >
                <div class="text-center text-xl mb-5">
                  You do not have any listed loans
                </div>
              </div>
            </div>

            <div v-else>
              <div class="flex flex-col justify-center pb-3" v-if="loading">
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
                        <p>{{ error }}!!!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="p-6 bg-white rounded-lg shadow-lg"
                v-if="!loading && !error"
              >
                <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                      class="py-2 align-middle inline-block w-screen md:w-full min-w-full sm:px-3 lg:px-4"
                    >
                      <div
                        class="overflow-x-auto border-b border-gray-200 sm:rounded-lg"
                      >
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Desired Amount
                              </th>

                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Offered Amount
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Repayment Plan
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Offer Tenor
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="bg-white"
                              v-for="loan in loans"
                              :key="loan.id"
                            >
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border-b border-grey-light"
                              >
                                <span class="mr-1">₦</span
                                >{{ loan.desired_amount | currency }}
                              </td>

                              <td
                                class="px-6 py-4 whitespace-nowrap text-center text-sm font-light border-b border-grey-light"
                              >
                                <div class="py-1 px-2">
                                  <span class="mr-1">₦</span
                                  >{{ loan.offer_amount | currency }}
                                </div>
                              </td>

                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light border-b border-grey-light"
                              >
                                <div class="py-1 px-2">
                                  {{ loan.offer_repayment_plan }}
                                </div>
                              </td>

                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light border-b border-grey-light"
                              >
                                <div class="py-1 px-2">
                                  {{ loan.offer_tenor }} months
                                </div>
                              </td>
                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light border-b border-grey-light"
                              >
                                <div
                                  style="
                                    padding-top: 0.2em;
                                    padding-bottom: 0.2rem;
                                  "
                                  class="text-sm px-3 bg-gray-200 text-gray-800 rounded-full border-b border-grey-light"
                                  v-if="loan.status == 2 || 5 || 6"
                                >
                                  false
                                </div>
                                <div
                                  style="
                                    padding-top: 0.2em;
                                    padding-bottom: 0.2rem;
                                  "
                                  class="text-sm px-3 bg-green-200 text-gray-800 rounded-full border-b border-green-light"
                                  v-else
                                >
                                  true
                                </div>
                              </td>
                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light border-b border-grey-light"
                              >
                                <div class="py-1 px-2">
                                  {{
                                    new Date(
                                      loan.created_at
                                    ).toLocaleDateString()
                                  }}
                                </div>
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
    </client-only>
  </div>
</template>

<script>
import TextInputSquare from '~/components/FormComponents/Texts/TextInputSquare'
import ButtonSquare from '~/components/FormComponents/Buttons/Primary/ButtonSquare'
import GeneralNav from '~/components/GeneralNavbarComponent'
import DashboardCards from '~/components/DashboardCards'

export default {
  head() {
    return {
      title: 'History',
    }
  },
  transition: {
    name: 'fade',
  },
  components: {
    TextInputSquare,
    ButtonSquare,
    DashboardCards,
    GeneralNav,
  },
  data() {
    return {
      loans: [],
      loading: true,
      error: '',
    }
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
    try {
      vm.$axios
        .get(`/users/loans`)

        .then((response) => {
          let loans = response.data.data
          this.loans = loans

          vm.loading = false
        })
    } catch (error) {
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
            break
        }
      }
    }
  },
  middleware: ['auth'],
}
</script>

<style></style>
