<template>
<div class="grid grid-cols-12 maxWidth mx-auto">
    <GeneralNav />
    <!-- <div class="my-container">
      <div class="mt-5">
        <div class="flex flex-row items-center mb-5">
          <div>
            <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
          </div>
          <div class="font-bold text-gray-700">Profile</div>
        </div>
  <div
    class="bg-gray-50 flex flex-col"
  >
    <div class="sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl">
      <div class="form bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <client-only placeholder="Loading...">
        <form
          action=""
          @submit.prevent="updateUser"
          class="md:grid md:grid-cols-12 md:gap-x-12"
        >
          <div class="mb-5 md:col-start-1 md:col-end-7">
            <label for="" class="font-bold opacity-75">First Name</label>
            <TextInputSquare
              v-model="form.first_name"
              type="text"
              name="text"
              placeholder="Enter your first name"
            />
          </div>
          <div class="mb-5 md:col-start-7 md:col-end-13">
            <label for="" class="font-bold opacity-75">Last Name</label>
            <TextInputSquare
              v-model="form.last_name"
              type="text"
              name="text"
              placeholder="Enter your last name"
            />
          </div>
          <div class="mb-5 md:col-start-1 md:col-end-7">
            <label for="" class="font-bold opacity-75">Email Address</label>
            <input
              class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="Enter your email"
              readonly
            />
          </div>
          <div class="mb-5 md:col-start-7 md:col-end-13">
            <label for="" class="font-bold opacity-75">Phone Number</label>
            <TextInputSquare
              v-model="form.phone"
              type="tel"
              name="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <ButtonSquare class="md:col-start-1 md:col-end-13" :class="{'opacity-50 cursor-not-allowed': disable}" disabled="disable" />
        </form>
        </client-only>
      </div>
    </div>
  </div>
      </div>
  </div> -->
</div>
</template>

<script>
// import TextInputSquare from '~/components/FormComponents/Texts/TextInputSquare'
// import ButtonSquare from '~/components/FormComponents/Buttons/Primary/ButtonSquare'
import GeneralNav from '~/components/GeneralNavbarComponent'
import { mapGetters } from 'vuex'
export default {
  components: {
    // TextInputSquare,
    // ButtonSquare,
    GeneralNav,
  },
  data() {
    return {
      // form: {
      //   first_name: '',
      //   last_name: '',
      //   email: '',
      //   phone: '',
      // },
      // disable:false,
      // errorInfo: '',
      // submitted: false,
      // userData: {},
    }
  },

  mounted() {
    // this.form = this.user
  },
  computed: {
    // ...mapGetters(['user']),
  },
  methods: {
    // async updateUser() {
    //   let vm = this
    //   vm.disable = true
    //   await this.$axios
    //     .post('/users/update', {
    //       ...this.form,
    //     })
    //     .then((response) => {
    //       console.log(response)
    //       let user = response.data.data
    //       let token = response.data.token
    //       this.$auth.setUser(user)
    //       this.$auth.setUserToken(token)
    //       vm.disable = false
    //     })
    //     .catch((error) => {
    //       vm.disable = false
    //       if (error.response) {
    //         const data = error.response.data.message
    //         this.$noty.error(data)
    //       }
    //     })
    // },
  },
}
</script>

<style></style>
