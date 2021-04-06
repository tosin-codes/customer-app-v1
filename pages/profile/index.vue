<template>
<div class="grid grid-cols-12 maxWidth mx-auto">
  <client-only>
    <GeneralNav />
    <div class="my-container">
      <div class="mt-5">
        <div class="flex flex-row items-center mb-5">
          <div class="pl-3 md:pl-0">
            <!-- <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" /> -->
            <svg
                class="w-5 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 510 510"
                xml:space="preserve"
              >
                <g id="account-circle">
                  <path
                    d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5    c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6    c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z"
                  />
                </g>
              </svg>
          </div>
          <div class="font-semibold text-sm text-gray-700">Profile</div>
        </div>
        <div
          class="bg-gray-50 flex flex-col"
        >
        <div class="sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl">
          <div class="form bg-white py-8 px-4 shadow sm:px-10">
            <form
              action=""
              class="md:grid md:grid-cols-12 md:gap-x-12"
            >
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-semibold text-sm opacity-75">First Name</label>
                <TextInputClassic
                  v-model="form.first_name"
                  type="text"
                  name="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75">Last Name</label>
                <TextInputClassic
                  v-model="form.last_name"
                  type="text"
                  name="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-semibold text-sm opacity-75">Email Address</label>
                <input
                  class="border-gray-500 border-b-2 mt-2 h-12 w-full outline-none opacity-50 cursor-not-allowed"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  disabled
                />
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75">Phone Number</label>
                <TextInputClassic
                  v-model="form.phone"
                  type="tel"
                  name="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div class="w-full md:col-span-5 flex">
                <button
                  type="submit"
                  :disabled="disable"
                  :class="{ 'opacity-50 cursor-not-allowed': disable }"
                  @click.prevent="updateUser"
                  class="md:col-start-1 md:col-end-13 mb-5 px-6 py-3 h-12 focus:outline-none shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                >
                  Save
                </button>
                <span v-if="disable">
                <img
                  class="mx-auto my-5"
                  src="~/assets/images/loading-sm.gif"
                  alt=""
                />
              </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  </div>
  </client-only>
</div>
</template>

<script>
import TextInputClassic from '~/components/FormComponents/Texts/TextInputClassic'
import GeneralNav from '~/components/GeneralNavbarComponent'
import { mapGetters } from 'vuex'
export default {
  components: {
    TextInputClassic,
    GeneralNav,
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
      },
      disable:false,
      errorInfo: '',
      submitted: false,
      userData: {},
    }
  },

  mounted() {
    this.form = this.user
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    async updateUser() {
      alert('yo');
      let vm = this
      vm.disable = true
      await this.$axios
        .post('/users/update', {
          ...this.form,
        })
        .then((response) => {
          console.log(response)
          let user = response.data.data
          let token = response.data.token
          this.$auth.setUser(user)
          this.$auth.setUserToken(token)
          vm.disable = false
          this.$noty.success("Saved.")
        })
        .catch((error) => {
          vm.disable = false
          if (error.response) {
            const data = error.response.data.message
            this.$noty.error(data)
          }
        })
    },
  },
}
</script>

<style></style>
