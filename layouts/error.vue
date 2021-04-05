<template>
  <div class="bg-gray-300 h-screen">
    <div class="container h-full px-4 grid place-items-center mx-auto">
      <div class="bg-white sm:w-full lg:w-3/6 md:w-3/6 -mx-4 shadow-md">
        <div class="flex flex-wrap items-center justify-center">
          <div class="text-center p-8">
            <img
              src="~/assets/images/logo.png"
              alt="logo"
              class="mt-4 w-full block object-fill"
            />

            <h1
              v-if="error.statusCode === 404"
              class="mt-4 mb-5 font-bold text-xl lg:text-2xl"
            >
              Looks like you are lost!
            </h1>
            <h1 v-else class="mt-4 mb-5 font-bold text-xl lg:text-2xl">
              An error occurred
            </h1>
            <NuxtLink
              class="border-2 border-orange-600 border-solid rounded-full text-sm lg:text-xl py-2 px-4 hover:bg-orange-600 hover:text-white"
              to="/"
              >Let's get you back</NuxtLink
            >
            <small class="block mt-4 text-gray-600 m-4"
              >CashDrive &#169; 2021</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
