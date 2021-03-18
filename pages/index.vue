<template>
  <div class="my-container">
    <div class="">
      <div class="flex flex-row items-center mb-10">
        <div>
          <img class="w-8 mr-4" src="../assets/svg/dashboard.svg" alt="" />
        </div>
        <div class="font-bold text-gray-700">Dashboard</div>
      </div>
      <DashboardCards />
      <div v-show="loggedInStatus">
        <div v-if="all_loans === 0">
          <ActiveLoan />
        </div>
        <div v-else>
          <ActiveLoanSchedule />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCards from '../components/DashboardCards'
import ActiveLoanSchedule from '../components/ActiveLoanSchedule'
import ActiveLoan from '../components/ActiveLoan'
export default {
  components: {
    DashboardCards,
    ActiveLoanSchedule,
    ActiveLoan,
  },
  data() {
    return {
      all_loans: null,
      loggedInStatus: false,
    }
  },
  // middleware: ['guest'],

  mounted() {
    this.loggedInStatus = localStorage.getItem('isLoggedIn')
    // console.log(localStorage.getItem('isLoggedIn'))
    this.all_loans = parseInt(localStorage.getItem('loans'))
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
