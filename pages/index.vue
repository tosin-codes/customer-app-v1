<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 p-3 text-3xl font-medium text-gray-900 text-justify">
        Sign up
      </h2>
    </div>
    <div class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl p-3">
      <div class="form bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          action=""
          @submit.prevent="registerUser"
          class="md:grid md:grid-cols-12 md:gap-x-12"
        >
          <div class="mb-5 md:col-start-1 md:col-end-7">
            <label for="" class="font-bold opacity-75">First Name</label>
            <TextInputSquare
              v-model="formData.first_name"
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
            <span class="text-red-700 text-xs" v-if="errors.first_name">
              {{ errors.first_name[0] }}
            </span>
          </div>
          <div class="mb-5 md:col-start-7 md:col-end-13">
            <label for="" class="font-bold opacity-75">Last Name</label>
            <TextInputSquare
              v-model="formData.last_name"
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
                  Please ensure your names matches the ones on your BVN.
                </small></template
              >
            </p>
            <span class="text-red-700 text-xs" v-if="errors.last_name">
              {{ errors.last_name[0] }}
            </span>
          </div>
          <div class="mb-5 md:col-start-1 md:col-end-7">
            <label for="" class="font-bold opacity-75">Email Address</label>
            <TextInputSquare
              v-model="formData.email"
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
                <small v-if="!$v.formData.email.email">Email is invalid</small>
              </template>
            </p>
            <span class="text-red-700 text-xs" v-if="errors.email">
              {{ errors.email[0] }}
            </span>
          </div>
          <div class="mb-5 md:col-start-7 md:col-end-13">
            <label for="" class="font-bold opacity-75">Phone Number</label>
            <TextInputSquare
              v-model="formData.phone"
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
                    ($v.formData.phone.$dirty && !$v.formData.phone.numeric) ||
                    ($v.formData.phone.$dirty &&
                      !$v.formData.phone.minLength) ||
                    ($v.formData.phone.$dirty && !$v.formData.phone.maxLength)
                  "
                >
                  Please enter a valid phone number.
                </small>
              </template>
            </p>
            <span class="text-red-700 text-xs" v-if="errors.phone">
              {{ errors.phone[0] }}
            </span>
          </div>
          <div class="mb-5 md:col-start-1 md:col-end-13">
            <label for="" class="font-bold opacity-75">Date of birth</label>
            <date-picker
              id="input"
              class="w-full"
              placeholder="YYYY-MM-DD"
              format="YYYY-MM-DD"
              value-type="format"
              v-model="formData.date_of_birth"
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
            <span class="text-red-700 text-xs" v-if="errors.date_of_birth">
              {{ errors.date_of_birth[0] }}
            </span>
          </div>

          <div class="mb-5 md:col-start-1 md:col-end-7">
            <label for="" class="font-bold opacity-75">Password</label>
            <div class="flex">
              <input
                v-model="formData.password"
                :type="[showPassword ? 'text' : 'password']"
                name="password"
                placeholder="Enter your password"
                class="rounded-md border-gray-300 border-2 mt-2 rounded-r-none h-12 w-full outline-none pl-4"
              />

              <span>
                <font-awesome-icon
                  :icon="['fas', showPassword ? 'eye' : 'eye-slash']"
                  class="cursor-pointer bg-gray-500 h-12 mt-2 rounded-r-md shadow-sm"
                  @click.prevent="showPassword = !showPassword"
                />
              </span>
            </div>
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
            <span class="text-red-700 text-xs" v-if="errors.password">
              {{ errors.password[0] }}
            </span>
          </div>
          <div class="mb-5 md:col-start-7 md:col-end-13">
            <label for="" class="font-bold opacity-75">Confirm Password</label>
            <div class="flex">
              <input
                v-model="formData.password_confirmation"
                :type="[showConfirmPassword ? 'text' : 'password']"
                name="password"
                placeholder="Enter your password"
                class="rounded-md border-gray-300 rounded-r-none border-2 mt-2 h-12 w-full outline-none pl-4"
              />
              <span>
                <font-awesome-icon
                  :icon="['fas', showConfirmPassword ? 'eye' : 'eye-slash']"
                  class="cursor-pointer bg-gray-500 h-12 mt-2 rounded-r-md shadow-sm"
                  @click.prevent="showConfirmPassword = !showConfirmPassword"
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
                  v-else-if="!$v.formData.password_confirmation.sameAsPassword"
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

          <button
            :class="{ 'opacity-50 cursor-not-allowed': disable }"
            :disabled="disable"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md md:col-start-1 md:col-end-13 shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div class="text-center">
        Have an account?
        <nuxt-link class="text-orange-700" to="/login">Sign In</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import TextInputSquare from '~/components/FormComponents/Texts/TextInputSquare'
import ButtonSquare from '~/components/FormComponents/Buttons/Primary/ButtonSquare'
import {
  required,
  minLength,
  maxLength,
  numeric,
  sameAs,
  email,
} from 'vuelidate/lib/validators'

export default {
  components: {
    TextInputSquare,
    ButtonSquare,
    DatePicker,
  },
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      disable: false,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        date_of_birth: '',
        ref_code: '',
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
        let vm = this
        await this.$axios
          .post('/signup', {
            ...this.formData,
          })
          .then((response) => {
            localStorage.removeItem('ref_code')
            let user = response.data.data
            let token = response.data.token
            this.$auth.setUser(user)
            this.$auth.setUserToken(token)
            this.disable = !this.disable
          })
          .catch((error) => {
            if (error.response) {
              const data = error.response.data.message
              vm.$noty.error(data)
            }
            this.disable = false
          })
      } else {
        this.disable = false
      }
    },
    async checkAndSetTokenIfExist() {
      if (this.$route.query.token) {
        localStorage.setItem('ref_code', this.$route.query.token)
        let code = localStorage.getItem('ref_code')
        await this.$axios.get(`/estimate/${code}`).then((response) => {
          let data = response.data.data
          this.formData.first_name = data.first_name
          this.formData.last_name = data.last_name
          this.formData.email = data.email
          this.formData.phone = data.phone
          this.formData.ref_code = code
        })
      }
    },
  },
  mounted() {
    this.checkAndSetTokenIfExist()
  },
  middleware: ['guest'],
}
</script>

<style>
.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.mx-datepicker {
  width: 100% !important;
}
#input .mx-input {
  width: 100%;
  padding-left: 1rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 3rem;
  border-width: 2px;
  border-radius: 0.375rem;
  border-color: #e2e8f0;
}
.pass {
  left: 29rem;
  bottom: 16rem;
}
.confirm {
  right: 14.5rem;
  bottom: 16rem;
}

@media screen and (max-width: 768px) {
}
</style>
