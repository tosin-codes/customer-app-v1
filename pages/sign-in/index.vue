<template>
  <div class="my-container">
    <div class="md:p-6">
      <div class="md:max-w-xl mx-auto">
        <div class="font-bold text-3xl text-center md:text-left mb-5 text-orange-500">Sign In</div>
        <div class="bg-white shadow-lg p-6 md:p-12 rounded-xl border-gray-200 border-2">
          <div class="">
            <div class="form">
              <form action="">
                <div class="mb-5">
                  <label for="" class="font-bold opacity-50">Email</label>
                  <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your email address" type="email" /></div>
                </div>
                <div class="my-5">
                  <label for="" class="font-bold opacity-50">Password</label>
                  <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your password" type="password" /></div>
                </div>
                <button @click.prevent="" class="mb-5 px-6 py-3 h-12 w-full border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600">Sign In</button>
              </form>
            </div>
            <div class="text-center">Don't have an account? <nuxt-link class="text-orange-700" to="signup">Sign Up</nuxt-link></div>
            <div class="text-center">Forgot Password? <nuxt-link class="text-orange-700" to="signup">Reset</nuxt-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
