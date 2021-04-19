<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div class="flex flex-row items-center mb-10">
            <div>
              <img
                class="w-8 mr-4 ml-2"
                src="~/assets/svg/dashboard.svg"
                alt=""
              />
            </div>
            <div class="font-bold text-gray-700">Dashboard</div>
          </div>
          <DashboardCards />
          <div v-if="!this.$store.getters.active_loans">
            <ActiveLoan />
          </div>
          <div v-else>
            <ActiveLoanSchedule />
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import DashboardCards from '~/components/DashboardCards'
import ActiveLoan from '~/components/ActiveLoan'
import ActiveLoanSchedule from '~/components/ActiveLoanSchedule'
export default {
  head() {
    return {
      title: 'Dashboard',
    }
  },
  transition: {
    name: 'fade',
  },
  components: {
    DashboardCards,
    GeneralNav,
    ActiveLoan,
    ActiveLoanSchedule,
  },
  data() {
    return {
      inActiveLoan: false,
      activeLoan: false,
    }
  },
  middleware: ['auth', 'setLevelForNewLoan'],
  mounted() {},
}
</script>

<style></style>
