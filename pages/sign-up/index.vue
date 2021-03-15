<template>
  <div class="my-container">
    <div class="md:p-6">
      <div class="">
        <div class="font-bold text-3xl text-orange-500 mb-5 text-center md:text-left">Sign Up</div>
        <div class="bg-white p-3 md:p-12 rounded-xl border-gray-200 border-2 max-w-6xl mx-auto">          
          <div class="form">
            <form action="" class="md:grid md:grid-cols-12 md:gap-x-12">
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">First Name</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your last name" type="text" /></div>
                <div class="text-red-700">Please ensure your first name matches the one on your BVN</div>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75">Last Name</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your last name" type="text" /></div>
                <div class="text-red-700">Please ensure your last name matches the one on your BVN</div>
              </div>
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">Email address</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your email address" type="email" /></div>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75">Phone Number</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your last name" type="tel" /></div>
              </div>
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">Password</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Enter your password" type="password" /></div>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75">Confirm Password</label>
                <div><input class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4" placeholder="Confirm your password" type="password" /></div>
              </div>
              <button @click.prevent="" class="mb-5 px-6 py-3 h-12 w-full md:col-start-1 md:col-end-13 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600">Sign In</button>
            </form>
          </div>
          <div class="text-center">Have an account? <nuxt-link class="text-orange-700" to="signin">Sign In</nuxt-link></div>
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
