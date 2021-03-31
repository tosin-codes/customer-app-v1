<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <GeneralNav />
    <!-- <div class="my-container">
      <div class="mt-5">
        <div class="flex flex-row items-center mb-10">
          <div>
            <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
          </div>
          <div class="font-bold text-gray-700">Dashboard</div>
        </div>
        <DashboardCards />
        <div
          class="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8"
        >
          <div v-if="!this.$store.getters.user.bank">
            <div class="flex flex-col bg-white border-dashed border-2 py-32">
              <div class="text-center text-xl mb-5">
                You do not have any bank listed.
              </div>
            </div>
          </div>

          <div v-else>
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <div class="mb-3">Bank Details</div>
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
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Bank Name
                            </th>

                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Account Type
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Account Number
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Bank Code
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900"
                            ></td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            ></td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              <!-- {{ this.$store.getters.user.number }} -->
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              ₦1,200,000
                            </td>

                            <td
                              class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light"
                            >
                              <div class="bg-green-200 py-1 px-2">
                                <!-- {{ this.$store.getters.user.status }} -->
                              </div>
                            </td>
                          </tr>

                          <tr class="bg-gray-100">
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900"
                            >
                              ₦1,200,000
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              ₦1,200,000
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              ₦1,200,000
                            </td>
                            <td
                              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              ₦1,200,000
                            </td>

                            <td
                              class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm font-light"
                            >
                              <div class="bg-green-200 py-1 px-2">success</div>
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
    </div> -->
  </div>
</template>

<script>
// import TextInputSquare from '~/components/FormComponents/Texts/TextInputSquare'
// import ButtonSquare from '~/components/FormComponents/Buttons/Primary/ButtonSquare'
import GeneralNav from '~/components/GeneralNavbarComponent'
// import DashboardCards from '~/components/DashboardCards'

export default {
  components: {
    // TextInputSquare,
    // ButtonSquare,
    // DashboardCards,
    GeneralNav,
  },
  data() {
    return {
      // banks: [
      //   { name: 'ACCESS BANK PLC', code: '044' },
      //   { name: 'DIAMOND BANK PLC', code: '063' },
      //   { name: 'CITIBANK NIG LTD', code: '023' },
      //   { name: 'FIRST CITY MONUMENT BANK PLC', code: '214' },
      //   { name: 'FIRST BANK OF NIGERIA PLC', code: '011' },
      //   { name: 'ECOBANK NIGERIA PLC', code: '050' },
      //   { name: 'FIDELITY BANK PLC', code: '070' },
      //   { name: 'KEYSTONE BANK', code: '082' },
      //   { name: 'JAIZ BANK PLC', code: '301' },
      //   { name: 'GUARANTY TRUST BANK PLC', code: '058' },
      //   { name: 'STANDARD CHARTERED BANK NIGERIA LTD', code: '068' },
      //   { name: 'SUNTRUST BANK NIG LTD', code: '100' },
      //   { name: 'PROVIDUS BANK PLC', code: '101' },
      //   { name: 'SKYE BANK PLC', code: '076' },
      //   { name: 'WEMA BANK PLC', code: '035' },
      //   { name: 'HERITAGE BANK', code: '030' },
      //   { name: 'UNION BANK OF NIGERIA PLC', code: '032' },
      //   { name: 'STERLING BANK PLC', code: '232' },
      //   { name: 'UBA PLC', code: '033' },
      //   { name: 'STANBIC IBTC BANK PLC', code: '039' },
      //   { name: 'ZENITH BANK PLC', code: '057' },
      //   { name: 'UNITY BANK PLC', code: '215' },
      // ],
    }
  },
  middleware: ['auth'],
}
</script>

<style></style>
