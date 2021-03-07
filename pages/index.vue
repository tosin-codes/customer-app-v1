<template>
  <div class="my-container">
    <div class="">
      <div class="flex flex-row items-center mb-10">
        <div><img class="w-8 mr-4" src="../assets/svg/dashboard.svg" alt=""></div>
        <div class="font-bold text-gray-700">Dashboard</div>
      </div>
      <DashboardCards />
      <ActiveLoanSchedule />
    </div>
  </div>
</template>

<script>
import DashboardCards from '../components/DashboardCards'
import ActiveLoanSchedule from '../components/ActiveLoanSchedule'
export default {
  components: {
    DashboardCards,
    ActiveLoanSchedule
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
