<template>
  <div>
    <div class="flex items-center justify-between mb-10">
      <client-only placeholder="Loading...">
        <nuxt-link
          to="#"
          :class="[
            activeloan.level.passed_bvn == true
              ? 'bg-orange-400 rounded-full w-12 h-12 text-center text-white'
              : 'bg-orange-400 rounded-full w-12 h-12 text-center text-white',
          ]"
        >
          <div class="text-lg font-semibold mt-3">1</div>
        </nuxt-link>
        <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
        <nuxt-link
          to="#"
          :class="[
            activeloan.level.passed_document_upload == true
              ? 'bg-orange-400 rounded-full w-12 h-12 text-center text-white'
              : 'bg-gray-400 rounded-full w-12 h-12 text-center text-white',
          ]"
        >
          <div class="text-lg font-semibold mt-3">2</div>
        </nuxt-link>
        <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
        <nuxt-link
          to="#"
          :class="[
            activeloan.level.passed_set_inspection_date == true
              ? 'bg-orange-400 rounded-full w-12 h-12 text-center text-white'
              : 'bg-gray-400 rounded-full w-12 h-12 text-center text-white',
          ]"
        >
          <div class="text-lg font-semibold mt-3">3</div>
        </nuxt-link>
        <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
        <nuxt-link
          to="#"
          :class="[
            activeloan.level.passed_picture_upload == true
              ? 'bg-orange-400 rounded-full w-12 h-12 text-center text-white'
              : 'bg-gray-400 rounded-full w-12 h-12 text-center text-white',
          ]"
        >
          <div class="text-lg font-semibold mt-3">4</div>
        </nuxt-link>
      </client-only>
    </div>
    <div class="my-5 flex justify-between flex-col lg:flex-row md:flex-col">
      <div class="my-6 w-full lg:ml-3">
        <div
          class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-white"
        >
          Offered Amount
        </div>
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <client-only placeholder="Loading...">
              <span
                class="px-3 flex items-start text-6xl tracking-tight text-gray-500"
              >
                <span class="mr-2 text-2xl font-medium"> ₦ </span>
                <span class="font-extrabold text-2xl">
                  <!-- currency -->
                  {{ activeloan.status != 2 ? activeloan.offer_amount:0 | currency }}
                  <!-- {{ summaryDetails.amount | currency }} -->
                </span>
              </span>
            </client-only>
          </div>
        </div>
      </div>

      <div class="my-6 w-full lg:ml-3">
        <div
          class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-white"
        >
          duration
        </div>
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <client-only placeholder="Loading...">
              <span
                class="px-3 flex items-start text-2xl tracking-tight text-gray-500"
              >
                <span class="font-extrabold text-2xl">
                  {{  activeloan.status != 2 ? activeloan.offer_tenor+' Months': 'None'}}
                  
                </span>
              </span>
            </client-only>
          </div>
        </div>
      </div>

      <div class="my-6 w-full lg:ml-3">
        <div
          class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-white"
        >
          repayment plan
        </div>
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <span
              class="px-3 flex items-start text-2xl tracking-tight text-gray-500"
            >
              <span class="font-extrabold text-2xl">
                {{ activeloan.status != 2 ? activeloan.offer_repayment_plan : 'None' }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      disable: false,
    }
  },
  computed: {
    ...mapGetters(['activeloan']),
  },
  methods: {
    async cancelLoan() {
      let vm = this
      const loan_id = this.$store.getters.activeloan.id
      vm.disable = true

      try {
        await this.$axios
          .get(`/loans/${loan_id}/decline`)

          .then((response) => {
            let loan = response.data.data
            //console.log(loan)
            this.$store.commit('setActiveLoanLevel', loan)
            vm.disable = false
            this.$noty.success('Successfully declined offer')
          })
      } catch (error) {
        vm.disable = false
        if (error.response) {
          if (
            error.response.status === 401 ||
            error.response.status === 403 ||
            error.response.status === 500
          ) {
            const data = error.response.data.message
            this.$noty.error(data)
            return false
          }
          if (error.response.status === 422) {
            this.$store.commit(
              'setValidationErrors',
              error.response.data.errors
            )
            return false
          }
        }
      }
    },
    // checkRepayment(value) {
    //   switch (value) {
    //     case '2':
    //       return 'Bi-Monthly'
    //       break
    //     case '4':
    //       return 'Quarterly'
    //       break
    //     default:
    //       return 'Monthly'
    //       break
    //   }
    // },
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
}
</script>

<style>
.number-links .nuxt-link-exact-active {
  @apply bg-orange-500;
}
</style>
