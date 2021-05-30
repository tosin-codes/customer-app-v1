<template>
  <div class="bg-gray-200">
    <client-only>
      <div
        class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      >
        <div>
          <div
            v-if="welcomeNote"
            class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl p-3"
          >
            <div class="bg-orange-100 p-5 w-full border-l-4 border-orange-500">
              <div class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="flex-none fill-current text-orange-500 h-4 w-4 mt-1"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
                  />
                </svg>
                <div
                  class="flex-1 leading-tight text-sm md:text-lg font-medium text-orange-700"
                >
                  Congratulations!!! Your funds are ready, please Sign Up
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl p-3"
          >
            <h2
              class="mt-6 p-3 col-start-2 text-3xl font-medium text-gray-900 text-justify"
            >
              Sign up
            </h2>
          </div>
        </div>

        <div
          class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl p-3"
        >
          <div class="form bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div
              class="flex items-center bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 text-sm font-bold px-4 py-1 my-2"
              role="alert"
            >
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-orange-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                  />
                </svg>
              </div>

              <p>Please, your BVN details must be used below</p>
            </div>
            <form
              action=""
              @submit.prevent="registerUser"
              class="md:grid md:grid-cols-12 md:gap-x-12 mt-3"
            >
              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-semibold text-sm opacity-75"
                  >First Name</label
                >
                <TextInputClassic
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
                <label for="" class="font-semibold text-sm opacity-75"
                  >Last Name</label
                >
                <TextInputClassic
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
                <label for="" class="font-semibold text-sm opacity-75"
                  >Email Address</label
                >
                <TextInputClassic
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
                    <small v-if="!$v.formData.email.email"
                      >Email is invalid</small
                    >
                  </template>
                </p>
                <span class="text-red-700 text-xs" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75"
                  >Phone Number</label
                >
                <TextInputClassic
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
                <span class="text-red-700 text-xs" v-if="errors.phone">
                  {{ errors.phone[0] }}
                </span>
              </div>

              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Home Address</label
                >
                <input
                  type="text"
                  name="address"
                  id="input"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  v-model="formData.address"
                  :reduce="(name) => name.name"
                  placeholder="Please enter home address..."
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && !$v.formData.address.required"
                    class="errorInfo"
                  >
                    <small> Please enter you home address </small></template
                  >
                </p>
                <span class="text-red-700 text-xs" v-if="errors.address">
                  {{ errors.address[0] }}
                </span>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >State of residence</label
                >
                <v-select
                  id="select"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  :options="stateOptions"
                  v-model="formData.state"
                  label="name"
                  placeholder="Select..."
                ></v-select>
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && !$v.formData.state.required"
                    class="errorInfo"
                  >
                    <small>
                      Please select your state of residence
                    </small></template
                  >
                </p>
                <span class="text-red-700 text-xs" v-if="errors.state">
                  {{ errors.state[0] }}
                </span>
              </div>

              <!-- <div class="mb-5 md:col-start-1 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75"
                  >Date of birth</label
                >
                <input
                  type="date"
                  name=""
                  class="appearance-none block rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
                  v-model="formData.date_of_birth"
                  placeholder="yyyy-mm-dd"
                  id=""
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
              </div> -->

              <div class="mb-5 md:col-start-1 md:col-end-7">
                <label for="" class="font-semibold text-sm opacity-75"
                  >Password</label
                >
                <TextInputClassic
                  v-model="formData.password"
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
                <span class="text-red-700 text-xs" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
              </div>
              <div class="mb-5 md:col-start-7 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75"
                  >Confirm Password</label
                >
                <TextInputClassic
                  v-model="formData.password_confirmation"
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
                <span
                  class="text-red-700 text-xs"
                  v-if="errors.password_confirmation"
                >
                  {{ errors.password_confirmation[0] }}
                </span>
              </div>

              <div class="mb-5 md:col-start-1 md:col-end-13">
                <label for="" class="font-semibold text-sm opacity-75"
                  >BVN Number</label
                >
                <TextInputClassic
                  v-model="formData.bvn"
                  type="number"
                  name="number"
                  placeholder="Enter your BVN details"
                />
                <p class="errors italics text-red-500 text-sm">
                  <template
                    v-if="submitted && !$v.formData.bvn.required"
                    class="errorInfo"
                  >
                    <small>
                      Your BVN details must be entered correctly.
                    </small></template
                  >
                </p>
                <span class="text-red-700 text-xs" v-if="errors.bvn">
                  {{ errors.bvn[0] }}
                </span>
              </div>
              <div class="w-full md:col-span-5 flex">
                <button
                  :class="{ 'opacity-50 cursor-not-allowed': disable }"
                  :disabled="disable"
                  class="md:col-start-1 md:col-end-13 mb-5 px-6 py-3 h-12 shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign Up
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
          <div class="text-center mt-5">
            Have an account?
            <nuxt-link class="text-orange-700" to="/login">Sign In</nuxt-link>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import TextInputClassic from '~/components/FormComponents/Texts/TextInputClassic'
import {
  required,
  minLength,
  maxLength,
  numeric,
  sameAs,
  email,
} from 'vuelidate/lib/validators'

export default {
  head() {
    return {
      title: 'Sign-Up',
    }
  },
  components: {
    TextInputClassic,
    vSelect,
  },
  data() {
    return {
      disable: false,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        // date_of_birth: '',
        ref_code: '',
        state: '',
        address: '',
        bvn: '',
      },
      errorInfo: '',
      submitted: false,
      welcomeNote: false,
      stateOptions: [
        'Lagos',
        'Abuja',
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',

        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',

        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
      ],
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
      state: {
        required,
      },
      address: {
        required,
      },
      bvn: {
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
        this.disable = !this.disable
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
            this.$router.push('/dashboard')
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
    async checkAndSetTokenIfExist() {
      if (this.$route.query.token) {
        //CD0097433
        // console.log(this.$route.query.token)
        localStorage.setItem('ref_code', this.$route.query.token)
        let code = localStorage.getItem('ref_code')

        //console.log(code)
        await this.$axios.get(`/estimate/${code}`).then((response) => {
          let data = response.data.data
          this.formData.first_name = data.data.first_name
          this.formData.last_name = data.data.last_name
          this.formData.email = data.data.email
          this.formData.phone = data.data.phone
          this.formData.ref_code = code
        })
      }
    },
  },
  // created() {

  // },
  mounted() {
    this.checkAndSetTokenIfExist()
    if (document.referrer == 'https://www.cashdrive.co/') {
      this.welcomeNote = true
    }
  },

  middleware: 'guest',
}
</script>

<style>
.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
#select .vs__dropdown-toggle:focus-within {
  border-color: #444444;
  outline: none;
}
#select .vs__dropdown-toggle {
  border: none;
  height: 50px !important;
  width: 100%;
  padding: 0 0;
}

#select .vs__dropdown-toggle input::placeholder {
  color: rgb(128, 128, 128);
  font-size: 0.9rem;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 400;
}
#select .vs__open-indicator,
#select .vs__clear {
  cursor: pointer;
}
</style>
