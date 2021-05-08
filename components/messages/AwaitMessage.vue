<template>
  <div
    class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32 mb-6"
  >
    <div>
      <img class="w-40" src="~/assets/images/success.gif" alt="" />
    </div>
    <p class="text-center text-sm lg:text-2xl mb-5">
      Congratulations, your application has been received, <br />your loan will
      be disbursed shortly:)
    </p>
    <div>
      <button
        class="bg-blue-900 hover:bg-blue-800 border border-transparent self-center shadow-sm lg:self-start font-medium text-white mt-5 px-3 py-2 rounded-md"
      >
        <nuxt-link to="/dashboard">Procced to Next Steps</nuxt-link>
      </button>
    </div> 
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

<style scoped></style>
