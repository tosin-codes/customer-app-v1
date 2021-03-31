<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <!-- <GeneralNav /> -->
    <div class="my-container">
      <div class="mt-5">
        <div class="flex flex-row items-center mb-10">
          <div>
            <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
          </div>
          <div class="font-bold text-gray-700">Dashboard</div>
        </div>
        <!-- <DashboardCards /> -->
        <!-- <div v-if="!this.$store.getters.active_loans">
          <ActiveLoan />
        </div> -->
        <!-- <div v-else>
          <ActiveLoanSchedule />
        </div> -->
      </div>
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
.my-container {
  @apply mt-16 col-start-1 col-end-13 px-3 py-6 mx-auto bg-gray-200 bg-opacity-50 min-h-screen rounded-md z-10
}

@screen md {
  .my-container {
    @apply col-start-4 col-end-13 p-12 w-full
  }
}

.maxWidth {
  max-width: 1500px;
}
</style>
