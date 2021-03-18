<template>
  <div class="my-container">
    <div class="md:p-6">
      <div class="md:max-w-xl mx-auto">
        <div
          class="font-bold text-3xl text-center md:text-left mb-5 text-orange-500"
        >
          Sign In
        </div>
        <div
          class="bg-white shadow-lg p-6 md:p-12 rounded-xl border-gray-200 border-2"
        >
          <div class="">
            <div class="form">
              <form action="" @submit.prevent="logInUser">
                <div class="mb-5">
                  <label for="" class="font-bold opacity-50">Email</label>
                  <div>
                    <input
                      class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                      placeholder="Enter your email address"
                      type="email"
                      v-model="$v.email.$model"
                    />
                    <p class="errors text-red-500 text-xs italic">
                      <template v-if="errorMessage">
                        <span v-if="!$v.email.required"
                          >Please enter your email.</span
                        >
                        <span v-if="!$v.email.email"
                          >Please enter a valid email.</span
                        >
                      </template>
                    </p>
                  </div>
                </div>
                <div class="my-5">
                  <label for="" class="font-bold opacity-50">Password</label>
                  <div>
                    <input
                      class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                      placeholder="Enter your password"
                      type="password"
                      v-model="$v.password.$model"
                    />
                    <p class="errors text-red-500 text-xs italic">
                      <template v-if="errorMessage">
                        <span v-if="!$v.password.required"
                          >Please enter your password.</span
                        >
                        <small
                          class="italics text-red-700"
                          v-if="!$v.password.minLength"
                        >
                          Password must have at least six letters.
                        </small>
                      </template>
                    </p>
                  </div>
                </div>
                <button
                  class="mb-5 px-6 py-3 h-12 w-full border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="text-center">
              Don't have an account?
              <nuxt-link class="text-orange-700" to="signup">Sign Up</nuxt-link>
            </div>
            <div class="text-center">
              Forgot Password?
              <nuxt-link class="text-orange-700" to="signup">Reset</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },

    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    ...mapMutations({
      setState: 'setStates',
    }),
    async logInUser() {
      this.errorMessage = this.$v.$invalid

      if (!this.$v.$invalid) {
        const login = {
          email: this.email,
          password: this.password,
        }

        try {
          let response = await this.$auth.loginWith('local', {
            data: login,
          })
          // console.log(response.data)
          this.$auth.setUser(response.data)
          localStorage.setItem('loans', response.data.all_loans.toString())
          localStorage.setItem('isLoggedIn', true)
          this.$noty.success('Logged In')
        } catch (err) {
          console.log(err)
          this.$noty.error(err)
        }
        this.authenticated
      }
    },
    authenticated() {
      const logged = this.$store.state.auth.loggedIn
      if (logged) {
        console.log(this.$store.state.auth.user.roles[0].code)
      }
    },
  },
}
</script>

<style></style>
