<template>
  <div
    class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32"
  >
    <div>
      <img class="w-64" src="~/assets/images/reject.svg" alt="" />
    </div>
    <p class="text-center text-sm md:text-xl mb-5">
      Your offer has been cancelled successfully :)
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
