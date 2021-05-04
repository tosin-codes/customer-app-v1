<template>
  <div>
    <client-only>
      <div
        class="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        v-if="displayForm"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md pl-5 lg:pl-0">
          <h2 class="mt-6 text-3xl font-medium text-gray-900">
            Forgot Password
          </h2>
        </div>

        <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:px-10">
            <form class="space-y-6" @submit.prevent="reset">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    v-model="formData.email"
                    class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-xs"
                  />

                  <p class="errors text-red-500 text-xs">
                    <template
                      v-if="submitted && $v.formData.email.$error"
                      class="errorInfo"
                    >
                      <span v-if="!$v.formData.email.required"
                        >Please enter your email.</span
                      >
                      <span v-if="!$v.formData.email.email"
                        >Please enter a valid email.</span
                      >
                    </template>
                  </p>
                  <span class="text-red-700 text-xs" v-if="errors.email">
                    {{ errors.email[0] }}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  :class="{ 'opacity-50 cursor-not-allowed': disable }"
                  :disabled="disable"
                  class="w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-left"
        v-if="success"
      >
        <div
          class="mx-auto bg-green-100 border-t-4 border-green-500 p-5 w-full max-w-md md:max-w-3xl pl-5 lg:pl-0"
        >
          <div class="flex justify-between">
            <div class="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="flex-none fill-current text-green-500 h-6 w-6 mt-3 md:m-5"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
                />
              </svg>
              <div>
                <h2
                  class="leading-normal text-lg lg:text-2xl font-bold mb-2 m-3"
                >
                  Forgot Password
                </h2>
                <p
                  class="flex-1 m-3 leading-tight text-base lg:text-lg text-gray-600 font-medium"
                >
                  You should soon receive an email allowing you to reset your
                  password. Please make sure to check your spam and trash if you
                  can't find the email.
                </p>
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
import { mapMutations } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
export default {
  head() {
    return {
      title: 'Forgot-Password',
    }
  },
  components: {
    TextInputClassic,
  },
  transition: {
    name: 'fade',
  },
  data() {
    return {
      showPassword: false,
      disable: false,
      formData: {
        email: '',
      },
      success: false,
      errorMessage: '',
      submitted: false,
      displayForm: true,
    }
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    ...mapMutations({
      setState: 'setStates',
    }),
    async reset() {
      this.submitted = true
      if (this.errorInfo) {
        const reveal = document.querySelector('.errors')
        reveal.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        })
      }
      this.$v.$touch()
      if (!this.$v.$invalid) {
        let vm = this
        this.disable = !this.disable

        await this.$axios
          .post('/get-reset-link', {
            ...this.formData,
            url: 'forgot-password',
          })
          .then((response) => {
            let user = response.data.data

            this.$auth.setUser(user)
            vm.$noty.success('Password Reset Successfully')
            this.success = true
            this.displayForm = false
          })
          .catch((error) => {
            if (error.response) {
              const data = error.response.data.message
              vm.$noty.error(data)
            }
            this.disable = !this.disable
          })
      } else {
        this.disable = false
        this.success = false
        this.displayForm = true
      }
    },
    // authenticated() {
    //   const logged = this.$store.state.auth.loggedIn
    //   if (logged) {
    //     console.log(this.$store.state.auth.user.roles[0].code)
    //   }
    // },
  },
  middleware: 'guest',
}
</script>

<style scoped>
.wrapper {
  margin: 24px auto;
  max-width: 100%;
}
</style>
