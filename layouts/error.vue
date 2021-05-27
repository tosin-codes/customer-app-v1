<template>
  <div>
    <client-only>
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

                <div v-if="error.statusCode === 404">
                  <h1 class="mt-4 mb-5 font-bold text-xl lg:text-2xl">
                    Looks like you are lost!
                  </h1>
                </div>
                <div v-else>
                  <h1 class="mt-4 mb-4 text-sm lg:text-xl">
                    Sorry we are unable to give you a system generated offer
                    right now. Please speak with our customer care agent on
                    01-2299954 or +234-802-857-2566
                  </h1>
                </div>
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
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
