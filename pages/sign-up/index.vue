<template>
  <div class="my-container">
    <div class="md:p-6">
      <div class="">
        <div
          class="font-bold text-3xl text-orange-500 mb-5 text-center md:text-left"
        >
          Sign Up
        </div>
        <div
          class="bg-white p-3 md:p-12 rounded-xl border-gray-200 border-2 max-w-6xl mx-auto"
        >
          <div class="form">
            <form
              action=""
              @submit.prevent="registerUser"
              class="md:grid md:grid-cols-12 md:gap-x-12"
            >
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">First Name</label>
                <input
                  v-model="formData.first_name"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="text"
                  name="text"
                  placeholder="Enter your first name"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && !$v.formData.first_name.required"
                    class="errorInfo"
                  >
                    <small>
                      Please ensure your first name matches the one on your BVN.
                    </small></template
                  >
                </p>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75">Last Name</label>
                <input
                  v-model="formData.last_name"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="text"
                  name="text"
                  placeholder="Enter your last name"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && !$v.formData.last_name.required"
                    class="errorInfo"
                  >
                    <small>
                      Please ensure your last name matches the one on your BVN.
                    </small></template
                  >
                </p>
              </div>
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">Email address</label>
                <input
                  v-model="formData.email"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && $v.formData.email.$error"
                    class="errorInfo"
                  >
                    <small v-if="!$v.formData.email.required"
                      >Email is required</small
                    >
                    <small v-if="!$v.formData.email.email"
                      >Email is invalid</small
                    >
                  </template>
                </p>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75">Phone Number</label>
                <input
                  v-model="formData.phone"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="tel"
                  name="tel"
                  placeholder="Enter your phone number"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && $v.formData.email.$error"
                    class="errorInfo"
                  >
                    <small v-if="!$v.formData.phone.required">
                      Please enter your phone number.
                    </small>
                    <small
                      v-else-if="
                        ($v.formData.phone.$dirty &&
                          !$v.formData.phone.numeric) ||
                        ($v.formData.phone.$dirty &&
                          !$v.formData.phone.minLength) ||
                        ($v.formData.phone.$dirty &&
                          !$v.formData.phone.maxLength)
                      "
                    >
                      Please enter a valid phone number.
                    </small>
                  </template>
                </p>
              </div>
              <div class="mb-5 md:col-start-1 md:col-end-13">
                <label for="" class="font-bold opacity-75">Date of birth</label>
                <input
                  v-model="formData.date_of_birth"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="date"
                  name="text"
                  placeholder="yyyy-mm-dd"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && $v.formData.date_of_birth.$error"
                    class="errorInfo"
                  >
                    <small v-if="!$v.formData.date_of_birth.required">
                      Please enter your date of birth.
                    </small>
                  </template>
                </p>
              </div>

              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-bold opacity-75">Password</label>
                <input
                  v-model="formData.password"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && $v.formData.password.$error"
                    class="errorInfo"
                  >
                    <small v-if="!$v.formData.password.required">
                      Please enter your password.
                    </small>
                    <small v-if="!$v.formData.password.minLength">
                      Password must be at least 6 characters.
                    </small>
                  </template>
                </p>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-bold opacity-75"
                  >Confirm Password</label
                >
                <input
                  v-model="formData.password_confirmation"
                  class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
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
              </div>

              <button
                type="submit"
                class="mb-5 px-6 py-3 h-12 w-full md:col-start-1 md:col-end-13 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div class="text-center">
            Have an account?
            <nuxt-link class="text-orange-700" to="signin">Sign In</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  sameAs,
  email,
} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        date_of_birth: '',
      },
      errorInfo: '',
      submitted: false,
    }
  },
  validations: {
    formData: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        numeric,
        maxLength: maxLength(11),
        maxLength: maxLength(12),
      },
      password: {
        required,
        minLength: minLength(6),
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs('password'),
      },
      date_of_birth: {
        required,
      },
    },
  },
  methods: {
    async registerUser() {
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
        try {
          const user = await this.$axios.post('/signup', {
            ...this.formData,
            ref_code: 'CD0061284',
          })
          this.setState({
            user,
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>

<style></style>
