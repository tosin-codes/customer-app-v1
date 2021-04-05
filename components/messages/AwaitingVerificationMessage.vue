<template>
  <div class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-32">
    <div>
        <img
            class="w-40"
            src="~/assets/images/wait.png"
            alt=""
        />
    </div>
    <p class="text-center text-md mb-5">Please hold on, your application is being processed :) </p>
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
