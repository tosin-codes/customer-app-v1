<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div class="flex flex-row items-center mb-10 ml-3 md:ml-0">
            <div>
              <img
                class="w-8 mr-4"
                src="../../assets/svg/dashboard.svg"
                alt=""
              />
            </div>
            <div class="font-bold text-gray-700">Active LOans</div>
          </div>
          <DashboardCards />
          <div class="flex flex-col bg-white border-dashed border-2 py-32 mx-3">
            <div class="text-center text-xl mb-5">
              You do not have any active loans
            </div>
            <div class="mx-auto">
              <nuxt-link
                to="/kyc"
                class="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white"
                >Create Loan</nuxt-link
              >
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
export default {
  head() {
    return {
      title: 'Active-Loans',
    }
  },
  transition: {
    name: 'fade',
  },
  components: {
    GeneralNav,
    DashboardCards,
    ActiveLoanSchedule,
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
