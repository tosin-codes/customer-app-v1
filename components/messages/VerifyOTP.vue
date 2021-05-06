<template>
  <div>
    <div
      class="container flex flex-col justify-center pb-3 mx-auto"
      v-if="loading"
    >
      <div class="px-4 lg:px-8">
        <div class="text-center">
          <div class="flex flex-col items-center top">
            <img
              class="mx-auto my-5"
              src="~/assets/images/loading.gif"
              alt=""
            />
            <span class="text-gray-400">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-10 px-6"
      v-if="displayForm"
    >
      <div class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl">
        <form action="" @submit.prevent="signContract" autocomplete="">
          <div class="lg:flex lg:flex-row justify-between">
            <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
              <label class="font-semibold text-base text-gray-800" for="number"
                >Please enter the OTP sent to your mail</label
              >
              <input
                id="number"
                name="name"
                type="number"
                v-model="$v.formData.otp.$model"
                class="border-gray-500 mb-2 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-sm"
              />

              <span
                class="error text-red-500 text-sm"
                v-if="!$v.formData.otp.required"
                >Field is required</span
              >
              <span
                class="error text-red-500 text-sm"
                v-if="!$v.formData.otp.minLength"
                >OTP must have at least
                {{ $v.formData.otp.$params.minLength.min }}
                characters.</span
              >
              <span
                class="error text-red-500 text-sm"
                v-if="!$v.formData.otp.maxLength"
                >OTP must have at least
                {{ $v.formData.otp.$params.maxLength.max }}
                characters.</span
              >
              <span
                :data="$v.formData.otp"
                :options="{
                  rootObjectKey: '$v.formData.otp',
                  maxDepth: 2,
                }"
              ></span>
            </div>
            <div class="flex flex-col lg:w-3/6 mb-5">
              <label for="name" class="font-semibold text-base text-gray-800">
                Full Name
              </label>
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="text"
                  v-model="$v.formData.full_name.$model"
                  class="border-gray-500 mb-2 focus:border-gray-900 border-b-2 mt-5 h-10 w-full outline-none text-sm"
                />
                <span
                  class="error text-red-500 text-sm"
                  v-if="!$v.formData.full_name.required"
                  >Field is required</span
                >
                <span
                  class="error text-red-500 text-sm"
                  v-if="!$v.formData.full_name.minLength"
                  >Name must have at least
                  {{ $v.formData.full_name.$params.minLength.min }}
                  letters.</span
                >

                <span
                  :data="$v.formData.full_name"
                  :options="{
                    rootObjectKey: '$v.formData.full_name',
                    maxDepth: 2,
                  }"
                ></span>
              </div>
            </div>
          </div>

          <div>
            <span class="text-sm text-center mb-5">
              By clicking on the button you have agreed to our
              <button
                class="text-orange-500 focus:outline-none border-0 focus:ring-2 focus:ring-offset-2"
                @click.prevent="showTerms"
              >
                credit &#38; security agreement,
              </button>
              You'll get an email from us shortly
            </span>
            <button
              type="submit"
              :class="{ 'opacity-50 cursor-not-allowed': disable }"
              :disabled="disable"
              class="w-full h-12 flex justify-center py-2 px-4 text-lg font-medium mt-3 text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              PROCEED
            </button>
          </div>
        </form>
        <div class="text-center">
          <button
            class="mt-5 btn text-orange-700 focus:outline-none border-0 focus:ring-2 focus:ring-offset-2 text-sm md:text-base"
            @click.prevent="resendOTP"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
    <div class="py-8 px-4 sm:px-10" v-if="terms">
      <DeedOfContract @otpForm="showForm" />
    </div>

    <div class="py-8 px-4 sm:px-10" v-if="success">
      <AwaitingVerificationMessage />
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import AwaitingVerificationMessage from '../../components/messages/AwaitingVerificationMessage'
import DeedOfContract from '~/components/DeedsOfContract'
export default {
  components: {
    DeedOfContract,
    AwaitingVerificationMessage,
  },
  data() {
    return {
      disable: false,
      formData: {
        otp: '',
        full_name: '',
      },

      loading: false,
      success: false,
      displayForm: true,
      terms: false,
    }
  },
  validations: {
    formData: {
      full_name: {
        required,
        minLength: minLength(4),
      },
      otp: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(4),
      },
    },
  },
  methods: {
    async signContract() {
      if (!this.$v.$invalid) {
        this.disabled = true
        this.loading = true
        this.displayForm = false
        await this.$axios
          .post('contracts/sign', this.formData)
          .then((response) => {
            let user = response.data.data

            this.$noty.success('Successful')
            this.loading = false
            this.success = true
            this.displayForm = false
          })
          .catch((error) => {
            this.loading = false
            this.displayForm = true

            if (error.response) {
              this.loading = false
              this.disabled = true
              // const data = error.response.data.message
              this.$noty.error('Not Found')
            }
          })
      } else {
        this.$noty.error('Fill in all fields')
      }
    },

    async resendOTP() {
      this.disable = true
      const loan_id = this.$store.getters.activeloan.id

      await this.$axios
        .get(`admin/loans/${loan_id}/contract/resend`)
        .then((response) => {
          let user = response.data.data
          // console.log(user)

          this.success = false
          this.displayForm = true
          this.disable = false
        })
        .catch((error) => {
          if (error.response) {
            this.$noty.error('Not Found')
          }
          this.disable = false
        })
    },
    async showTerms() {
      this.displayForm = false
      this.terms = true
      this.disable = false
    },
    showForm() {
      this.terms = false
      this.displayForm = true
    },
  },
}
</script>

<style scoped>
/* input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
} */
</style>
