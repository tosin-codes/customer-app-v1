<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div
            class="flex justify-between items-center mb-10 ml-3 md:ml-0 mt-10 md:mt-0"
          >
          <div class="flex">
              <div>
                <img
                  class="w-8 mr-4"
                  src="../../assets/svg/dashboard.svg"
                  alt=""
                />
              </div>
              <div class="font-bold text-gray-700">Active Loans</div>
            </div>
            <paystack
              :amount="amount * 100"
              :email="email"
              :paystackkey="PUBLIC_KEY"
              :reference="reference"
              :callback="processPayment"
              :close="close"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Make Payment
          </paystack>
          </div>
          <DashboardCards />
          <div v-if="!this.$store.getters.activeloan.offer_amount || this.$store.getters.activeloan.status==2">
            <div
              class="flex flex-col bg-white border-dashed border-2 py-32 mx-3"
            >
              <div class="text-center text-xl mb-5">
                You do not have any active loans
              </div>
              <div class="mx-auto">
                <nuxt-link
                  to="/create-loan"
                  class="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white"
                  >Create Loan</nuxt-link
                >
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32"
            >
              <div>
                <img
                  class="object-cover w-48"
                  src="~/assets/images/approval.jpg"
                  alt="approve"
                />
              </div>
              <p class="text-center text-xl mb-5 p-3">
                Your loan schedules will be displayed here once your loan
                request has been approved :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import DashboardCards from '../../components/DashboardCards'
import ActiveLoanSchedule from '../../components/ActiveLoanSchedule'
import paystack from 'vue-paystack';
export default {
  head() {
    return {
      title: 'Active-Loans',
    }
  },
  transition: {
    name: 'fade',
  },
  data() {
    return {
      amount: this.$store.getters.activeloan.schedules[0].repayment_amount,
      full_name: `${this.$store.getters.activeloan.estimate.full_name}`,
      email:this.$store.getters.activeloan.estimate.email,
      PUBLIC_KEY: 'pk_test_43d036ce68bf0a187b513a60ffe6fa3bcf7bf57e'
    }
  },
  components: {
    GeneralNav,
    DashboardCards,
    ActiveLoanSchedule,
    paystack
  },
  computed: {
   reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    processPayment() {
      alert("Payment recieved")
    },
    close() {
     console.log("You closed checkout page")
    }
  },
  mounted() {
    console.log(this.$store.getters.activeloan)
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
