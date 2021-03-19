<template>
<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-3xl font-medium text-gray-900">
      Sign in
    </h2>
  </div>

  <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input id="email" 
            name="email" 
            type="email" 
            autocomplete="email"
            v-model="$v.email.$model" 
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          
            <p class="errors text-red-500 text-xs ">
                <template v-if="errorMessage">
                  <span v-if="!$v.email.required"
                    >Please enter your email.</span
                  >
                  <span v-if="!$v.email.email"
                    >Please enter a valid email.</span
                  >
                </template>
              </p>
              <span class="text-red-700 text-xs" v-if="errors.email">
                  {{errors.email[0]}}
              </span>
            </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password"
            v-model="$v.password.$model" 
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          
            <p class="errors text-red-500 text-xs ">
                <template v-if="errorMessage">
                  <span v-if="!$v.password.required"
                    >Please enter your password.</span
                  >
                  <small
                    class="text-red-700"
                    v-if="!$v.password.minLength"
                  >
                    Password must have at least six letters.
                  </small>
                </template>
              </p>
              <span class="text-red-700 text-xs" v-if="errors.password">
                  {{errors.password[0]}}
              </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-orange-500 hover:text-orange-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" :disabled="disable" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Sign in
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="text-center">
              Don't have an account?
              <nuxt-link class="text-orange-600" to="sign-up">Sign Up</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style>

</style>

<script>
import { mapMutations } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      disable:false,
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
    async submit(){
      let vm = this
      this.errorMessage = this.$v.$invalid
      if(this.$v.$invalid){
        return false;
      }
      this.disable = !this.disable
      let form = {
        email : this.email,
        password : this.password
      }
      await this.$auth.login({
          data:form
      }).catch(error => {
          if (error.response) {
            const data = error.response.data.message
            vm.$noty.error(data)
          }
          this.disable = !this.disable
      })
    },
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
        // this.authenticated
      }
    },
    authenticated() {
      const logged = this.$store.state.auth.loggedIn
      if (logged) {
        console.log(this.$store.state.auth.user.roles[0].code)
      }
    },
  },
  middleware:['guest']
}
</script>

<style></style>
