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
                  {{ activeloan.offer_amount | currency }}
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
                  {{ activeloan.offer_tenor }}
                  Months
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
                {{ checkRepayment(activeloan.offer_repayment_plan) }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row md:justify-end justify-center mb-12">
      <div>
        <div class="flex justify-between bg-gray-200 hover:bg-orange-500 px-6 py-3 text-gray-600  hover:text-white">
        <svg
          class="w-5 fill-current mr-3"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <path
            
            d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z M61,256  c0-107.401,87.599-195,195-195c40.499,0,79.501,12.599,112.8,36.299L256,210.099L97.301,368.8C73.599,335.499,61,296.499,61,256z   M256,451c-40.499,0-79.501-12.601-112.8-36.301l271.5-271.5c23.701,33.3,36.3,72.3,36.3,112.801C451,363.399,363.401,451,256,451z"
          />
          <path
            
            d="M512,256c0,140.7-115.3,256-256,256v-61c107.401,0,195-87.601,195-195  c0-40.501-12.599-79.501-36.301-112.8L256,301.899v-91.8l112.8-112.8C335.501,73.599,296.499,61,256,61V0C396.7,0,512,115.3,512,256  z"
          />
        </svg>
        <div
          class=""
        >
          Cancel this loan
        </div>        
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeloan']),
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
