<template>
  <div>
    <div class="">
      <!-- <GeneralNav /> -->
        <!-- <div class="mt-5"> -->
          <div class="">
              <!-- <div>
                <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
              </div> -->
              <h1 class="">
                Dashboard
              </h1>
          </div>
          <!-- <DashboardCards /> -->
          <!-- <div v-if="!this.$store.getters.active_loans">
            <ActiveLoan />
          </div> -->
          <!-- <div v-else>
            <ActiveLoanSchedule />
          </div> -->
        <!-- </div> -->
    </div>
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

<style>

</style>
