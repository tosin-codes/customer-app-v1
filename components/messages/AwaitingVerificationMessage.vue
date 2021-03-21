<template>
  <div class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32">
    <div>
        <img
            class="w-40"
            src="~/assets/images/wait.png"
            alt=""
        />
    </div>
    <p class="text-center text-md mb-5">Kindly endure with us in patience while our data experts are <br> verifying your information :) </p>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
