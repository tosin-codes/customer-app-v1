<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please take a photo of yourself</div>

      <div class="flex justify-between items-center mt-8">
        <button
          @click.prevent="prevSlide"
          class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white border-2 border-orange-500"
        >
          Prev
        </button>
        <button
          type="submit"
          @click.prevent="submitDate"
          class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
