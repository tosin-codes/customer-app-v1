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
            <div class="font-bold text-gray-700">Account</div>
          </div>
          <DashboardCards />
          <div
            class="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 md:px-1"
          >
            <div v-if="this.$store.getters.user.banks.length === 0">
              <div
                class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32"
              >
                <div>
                  <img
                    class="object-cover w-48"
                    src="~/assets/images/bank.jpg"
                    alt="bank"
                  />
                </div>
                <div class="text-center text-base md:text-xl mb-5">
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
                                BVN
                              </th>

                              <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Bank Code
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
                                Account Type
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="bg-white"
                              v-for="bank in $store.getters.user.banks"
                              :key="bank.id"
                            >
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-grey-light"
                              >
                                {{ bank.verification_number | fourly }}
                              </td>
                              <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-grey-light"
                              >
                                {{
                                  getBank(bank.code) ? getBank(bank.code) : ''
                                }}
                              </td>

                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm border-b border-grey-light"
                              >
                                <div class="py-1 px-2 text-left">
                                  {{ bank.number ? bank.number : '' }}
                                </div>
                              </td>
                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm border-b border-grey-light"
                              >
                                <div class="py-1 px-2">
                                  {{ bank.type ? bank.type : '' }}
                                </div>
                              </td>
                              <td
                                class="uppercase px-6 py-4 whitespace-nowrap text-center text-sm border-b border-grey-light"
                              >
                                <div v-if="bank.status == 0">
                                  <div
                                    style="
                                      padding-top: 0.2em;
                                      padding-bottom: 0.2rem;
                                    "
                                    class="text-sm px-3 bg-gray-200 text-gray-800 rounded-full border-b border-grey-light"
                                  >
                                    false
                                  </div>
                                </div>
                                <div v-else>
                                  <div
                                    style="
                                      padding-top: 0.2em;
                                      padding-bottom: 0.2rem;
                                    "
                                    class="text-sm px-3 bg-green-200 text-gray-800 rounded-full border-b border-grey-light"
                                  >
                                    true
                                  </div>
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
      title: 'Account',
    }
  },
  transition: {
    name: 'fade',
  },
  filters: {
    fourly(value) {
      return value.replace(/.(?=.{4})/g, 'x')
    },
  },
  components: {
    TextInputSquare,
    ButtonSquare,
    DashboardCards,
    GeneralNav,
  },
  data() {
    return {
      banks: [
        { name: 'ACCESS BANK PLC', code: '044' },
        { name: 'DIAMOND BANK PLC', code: '063' },
        { name: 'CITIBANK NIG LTD', code: '023' },
        { name: 'FIRST CITY MONUMENT BANK PLC', code: '214' },
        { name: 'FIRST BANK OF NIGERIA PLC', code: '011' },
        { name: 'ECOBANK NIGERIA PLC', code: '050' },
        { name: 'FIDELITY BANK PLC', code: '070' },
        { name: 'KEYSTONE BANK', code: '082' },
        { name: 'JAIZ BANK PLC', code: '301' },
        { name: 'GUARANTY TRUST BANK PLC', code: '058' },
        { name: 'STANDARD CHARTERED BANK NIGERIA LTD', code: '068' },
        { name: 'SUNTRUST BANK NIG LTD', code: '100' },
        { name: 'PROVIDUS BANK PLC', code: '101' },
        { name: 'SKYE BANK PLC', code: '076' },
        { name: 'WEMA BANK PLC', code: '035' },
        { name: 'HERITAGE BANK', code: '030' },
        { name: 'UNION BANK OF NIGERIA PLC', code: '032' },
        { name: 'STERLING BANK PLC', code: '232' },
        { name: 'UBA PLC', code: '033' },
        { name: 'STANBIC IBTC BANK PLC', code: '039' },
        { name: 'ZENITH BANK PLC', code: '057' },
        { name: 'UNITY BANK PLC', code: '215' },
      ],
    }
  },
  methods: {
    getBank(code) {
      const bankArray = this.banks.find((bank) => bank.code === code)
      // console.log(bankArray.name)
      if (bankArray) {
        return bankArray.name
      }
    },
  },

  middleware: ['auth'],
  created() {
    const status = this.$store.getters.user.banks
    // console.log(status)
  },
}
</script>

<style></style>
