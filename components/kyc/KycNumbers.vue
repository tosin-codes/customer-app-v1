<template>
  <div>
    <div class="flex items-center justify-between mb-10">
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
    </div>
    <div class="my-10 lg:grid lg:grid-cols-3 px-12 md:gap-x-12">
      <div class="my-6">
        <div
          class="absolute -mt-3 ml-3 uppercase inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded"
        >
          amount requested
        </div>
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <span
              class="px-3 flex items-start text-6xl tracking-tight text-gray-500"
            >
              <span class="mt-2 mr-2 text-2xl font-medium"> ₦ </span>
              <span class="font-extrabold text-2xl">
                <!-- currency -->
                {{ store.state.information.offer.offered_amount | currency }}
                <!-- {{ summaryDetails.amount | currency }} -->
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
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <span
              class="px-3 flex items-start text-2xl tracking-tight text-gray-500"
            >
              <span class="font-extrabold text-2xl">
                {{ summaryDetails.repayment_plan }}
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
        <div class="border border-gray-600 p-4 rounded-lg shadow">
          <div class="flex items-center justify-center">
            <span
              class="px-3 flex items-start text-2xl tracking-tight text-gray-500"
            >
              <span class="font-extrabold text-2xl">
                {{ checkRepayment(summaryDetails.duration) }}
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
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeloan']),
    ...mapState('information', { summaryDetails: (state) => state }),
  },
  methods: {
    checkRepayment(value) {
      switch (value) {
        case '2':
          return 'Bi-Monthly'
          break
        case '4':
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
}
</script>

<style>
.number-links .nuxt-link-exact-active {
  @apply bg-orange-500;
}
</style>
