<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <GeneralNav />
    <div class="my-container">
      <div class="">
        <div class="flex flex-row items-center mb-10">
          <div>
            <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
          </div>
          <div class="font-bold text-gray-700">Dashboard</div>
        </div>
        <DashboardCards />
        </div>
    </div>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import DashboardCards from '~/components/DashboardCards'
export default {
  components: {
    DashboardCards,
    GeneralNav
  },
  data() {
    return {

    }
  },
  middleware: 'auth'
}
</script>

<style>
</style>
