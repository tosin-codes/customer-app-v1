<template>
  <div
    class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32"
  >
    <div>
      <img class="w-40" src="~/assets/images/wait.png" alt="" />
    </div>
    <p class="leading-loose tracking-normal md:text-xl text-lg">
      Your funds will be disbursed immediately after your inspection, if you
      need any further enquiries, please call or WhatApp +234 802 857 2566
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
