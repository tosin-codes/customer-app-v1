<template>
  <div class="text-red-900">
    <h1>hello world from Cashdrive</h1>
    <!-- <div class="grid grid-cols-12 maxWidth mx-auto"> -->
      <!-- <GeneralNav /> -->
      <!-- <div class="my-container">
        <div class="mt-5">
          <div class="flex flex-row items-center mb-10">
            <div>
              <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
            </div>
            <div class="font-bold text-gray-700">Dashboard</div>
          </div> -->
          <!-- <DashboardCards /> -->
          <!-- <div v-if="!this.$store.getters.active_loans">
            <ActiveLoan />
          </div>
          <div v-else>
            <ActiveLoanSchedule />
          </div> -->
        <!-- </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import GeneralNav from '~/components/GeneralNavbarComponent'
// import DashboardCards from '~/components/DashboardCards'
export default {
  components: {
    // DashboardCards,
    // GeneralNav,
  },
  data() {
    return {
      // inActiveLoan: false,
      // activeLoan: false,
    }
  },
  // middleware: ['auth', 'setLevelForNewLoan'],
  mounted() {},
}
</script>

<style></style>
