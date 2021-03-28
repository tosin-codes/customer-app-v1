<template>
  <div>
    <div class="px-12 text-gray-600">
      <nuxt-link
        to="/dashboard"
        class="flex flex-row justify-center mb-6 hover:text-orange-500"
      >
        <div class="font-semibold">Dashboard</div>
      </nuxt-link>
      <nuxt-link
        to="/create-loan"
        class="flex flex-row justify-center mb-6 hover:text-orange-500"
      >
        <div class="font-semibold">My Loans</div>
      </nuxt-link>
      <nuxt-link
        to="/active-loans"
        class="flex flex-row justify-center my-6 hover:text-orange-500"
      >
        <div class="font-semibold">Active Loans</div>
      </nuxt-link>
      <nuxt-link
        to="/account"
        class="flex flex-row justify-center my-6 hover:text-orange-500"
      >
        <div class="font-semibold">Accounts</div>
      </nuxt-link>
      <nuxt-link
        to="/pofile"
        class="flex flex-row justify-center my-6 hover:text-orange-500"
      >
        <div class="font-semibold">Profile</div>
      </nuxt-link>
      <nuxt-link to="/create-loan" v-if="!activeloan">
        <div class="rounded-full bg-orange-500 hover:bg-orange-600 text-base py-3 text-white text-center">
          Apply for a Loan
        </div>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="rounded-full flex flex-row justify-center my-6 bg-blue-500 py-3 text-white"
      >
        <div class="font-semibold">Log out</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:"MobileNav",
  computed: {
    ...mapGetters([
      'activeloan'
    ])
  }
}
</script>

<style>

</style>