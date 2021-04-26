<template>
  <div
    class="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <client-only>
      <div
        class="container flex flex-col justify-center pb-3 h-screen"
        v-if="loading"
      >
        <div class="px-4 lg:px-8">
          <div class="text-center">
            <div class="flex flex-col items-center top">
              <img
                class="mx-auto my-5"
                src="../../assets/images/loading.gif"
                alt=""
              />
              <span class="text-gray-400">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="resetForm">
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
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <div class="flex">
                    <input
                      name="password"
                      :type="[showPassword ? 'text' : 'password']"
                      autocomplete="current-password"
                      v-model="formData.password"
                      class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-xs"
                    />
                    <span>
                      <font-awesome-icon
                        :icon="['fas', showPassword ? 'eye' : 'eye-slash']"
                        class="cursor-pointer h-12 border-gray-500 focus:border-gray-900 border-b-2"
                        @click.prevent="showPassword = !showPassword"
                      />
                    </span>
                  </div>

                  <p class="errors text-red-500 text-xs">
                    <template
                      v-if="submitted && $v.formData.password.$error"
                      class="errorInfo"
                    >
                      <span v-if="!$v.formData.password.required"
                        >Please enter your password.</span
                      >
                      <small
                        class="text-red-700"
                        v-if="!$v.formData.password.minLength"
                      >
                        Password must have at least six letters.
                      </small>
                    </template>
                  </p>
                  <span class="text-red-700 text-xs" v-if="errors.password">
                    {{ errors.password[0] }}
                  </span>
                </div>
              </div>

              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75"
                  >Confirm Password</label
                >
                <div class="flex">
                  <input
                    name="password"
                    :type="[showPassword ? 'text' : 'password']"
                    autocomplete="current-password"
                    v-model="formData.password_confirmation"
                    class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-xs"
                  />

                  <!-- <input
                    id="password"
                    name="password"
                    :type="[showPassword ? 'text' : 'password']"
                    autocomplete="current-password"
                    v-model="formData.password.$model"
                    class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-xs"
                  /> -->
                  <span>
                    <font-awesome-icon
                      :icon="['fas', showPassword ? 'eye' : 'eye-slash']"
                      class="cursor-pointer h-12 border-gray-500 focus:border-gray-900 border-b-2"
                      @click.prevent="showPassword = !showPassword"
                    />
                  </span>
                </div>
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && $v.formData.password_confirmation.$error"
                    class="errorInfo"
                  >
                    <small v-if="!$v.formData.password_confirmation.required">
                      Confirm password is required
                    </small>
                    <small
                      v-else-if="
                        !$v.formData.password_confirmation.sameAsPassword
                      "
                    >
                      Passwords must match
                    </small>
                  </template>
                </p>
                <span
                  class="text-red-700 text-xs"
                  v-if="errors.password_confirmation"
                >
                  {{ errors.password_confirmation[0] }}
                </span>
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
    </client-only>
  </div>
</template>

<script>
import TextInputClassic from '~/components/FormComponents/Texts/TextInputClassic'
import { mapMutations } from 'vuex'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
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
        password: '',
        password_confirmation: '',
        email: '',
      },
      errorMessage: '',
      submitted: false,
      resetForm: false,
      loading: true,
    }
  },
  validations: {
    formData: {
      password: {
        required,
        minLength: minLength(6),
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs('password'),
      },
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
          .post('/reset-password', {
            ...this.formData,
          })
          .then((response) => {
            let user = response.data.data

            this.$auth.setUser(user)

            vm.$noty.success('Password Reset Successfully')
            this.$router.push('/login')
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
      }
    },
  },
  mounted() {
    const token = this.$route.query.token
    this.$axios
      .get(`/verify-token/${token}`)
      .then((response) => {
        this.res = response.data.data
        this.loading = false
        this.resetForm = true
      })
      .catch((error) => {
        this.$noty.error('Token expired')
        setTimeout(() => {
          this.$router.push('/reset-password')
        }, 2000)
      })
      .finally(() => {
        this.loading = false
      })
  },
  middleware: 'guest',
}
</script>

<style scoped>
.top {
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
