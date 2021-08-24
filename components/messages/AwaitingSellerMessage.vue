<template>
  <div
    class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-12 md:py-20"
  >
    <div>
      <img
        class="sm:w-48 md:w-64"
        src="~/assets/images/congratulations.gif"
        alt=""
      />
    </div>
    <p class="text-center leading-loose tracking-normal md:text-xl text-sm p-4">
      You will be contacted soon after your inspection on<br />
      <template v-if="activeloan.inspection">
        <b>{{
          new Date(activeloan.inspection.date).toLocaleDateString('en-GB')
        }}</b
        >. </template
      ><br />
      If you need any further enquiries, please call WhatApp +234 802 857 2566 or mail us at info@cashdrive.co
    </p>
  </div>
</template>

<script>
// import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['activeloan']),
  },
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
