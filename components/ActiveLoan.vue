<template>
  <div class="flex flex-col bg-white border-dashed border-2 py-32 mx-3">
    <div class="text-center text-sm mb-5 text-gray-500">You do not have any active loans.</div>
    <div class="mx-auto">
      <nuxt-link
        to="/create-loan"
        class="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white"
        >Apply for a loan</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
