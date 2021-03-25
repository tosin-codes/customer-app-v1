<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 p-3 text-3xl font-medium text-gray-900 text-center">
        Profile
      </h2>
    </div>
    <div class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl p-3">
      <div class="form bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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

          <ButtonSquare class="md:col-start-1 md:col-end-13" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TextInputSquare from '~/components/FormComponents/Texts/TextInputSquare'
import ButtonSquare from '~/components/FormComponents/Buttons/Primary/ButtonSquare'
import { mapGetters } from 'vuex'
export default {
  components: {
    TextInputSquare,
    ButtonSquare,
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
      },
      errorInfo: '',
      submitted: false,
      userData: {},
    }
  },

  created() {
    this.form = this.user
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    async updateUser() {
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
        })
        .catch((error) => {
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
