<template>
    <div class="number-links flex flex-row items-center justify-between mb-10">
      <nuxt-link to="/kyc" class="bg-gray-400 rounded-full w-12 h-12 text-center text-white">
        <div class="text-lg font-semibold mt-3">1</div>
      </nuxt-link>
      <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
      <nuxt-link to="/kyc/2" class="bg-gray-400 rounded-full w-12 h-12 text-center text-white">
        <div class="text-lg font-semibold mt-3">2</div>
      </nuxt-link>
      <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
      <nuxt-link to="/kyc/3" class="bg-gray-400 rounded-full w-12 h-12 text-center text-white">
        <div class="text-lg font-semibold mt-3">3</div>
      </nuxt-link>
      <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
      <nuxt-link to="/kyc/4" class="bg-gray-400 rounded-full w-12 h-12 text-center text-white">
        <div class="text-lg font-semibold mt-3">4</div>
      </nuxt-link>
    </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.number-links  .nuxt-link-exact-active {
  @apply bg-orange-500
}
</style>
