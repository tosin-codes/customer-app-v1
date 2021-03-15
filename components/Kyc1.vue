<template>
  <div class="">
    <div class="">

      <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
        <div>
          <div>Please enter your account details</div>
          <div>
            <form class="grid lg:grid-cols-2 lg:gap-8" action="">
              <input class="my-4" type="text" placeholder="BVN">
              <input class="my-4" type="text" placeholder="Account Name">
              <input class="my-4" type="text" placeholder="Account Number">
              <input class="my-4" type="text" placeholder="Bank name">
            </form>
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
input {
  @apply py-4 outline-none rounded-full pl-6
}
input:focus {
  @apply border-2 border-gray-200
}
</style>
