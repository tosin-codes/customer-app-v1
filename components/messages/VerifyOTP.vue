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
      class="flex flex-col items-center justify-center bg-white border-dashed border-2 py-10"
      v-if="displayForm"
    >
      <p class="text-lg text-center mb-5">
        You should soon receive an email with an OTP. Please make sure to check
        your spam and trash if you can't find the email, kindly enter the number
        in the input field below.
      </p>
      <div class="sm:mx-auto sm:w-full lg:max-w-2xl sm:max-w-md md:max-w-2xl">
        <div class="sm:w-full sm:max-w-md mt-6">
          <i  v-if="resendSuccess" style="color:green">OTP resent successfully</i>
          <p class="text-sm font-medium text-gray-700 lg:text-xl mb-5">
            Enter the OTP sent
            <span class="font-bold">to your email</span>
          </p>
        </div>
        <form action="" @submit.prevent="signContract" autocomplete="">
          <div class="mb-6">
            <input
              id="number"
              name="name"
              type="number"
              v-model="$v.formData.otp.$model"
              class="border-gray-500 mb-2 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-sm lg:text-xl"
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

          <div class="mb-6">
            <label
              for="name"
              class="block text-sm lg:text-xl font-medium text-gray-700"
            >
              Full Name
            </label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="text"
                v-model="$v.formData.full_name.$model"
                class="border-gray-500 mb-2 focus:border-gray-900 border-b-2 mt-2 h-10 w-full outline-none text-sm lg:text-xl"
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

          <div>
            <button
              type="submit"
              :class="{ 'opacity-50 cursor-not-allowed': disable }"
              :disabled="disable"
              class="w-full h-12 flex justify-center py-2 px-4 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              VERIFY &#38; PROCEED
            </button>
          </div>
        </form>
        <div
          class="text-center focus:outline-none border-0 focus:ring-2 focus:ring-offset-2"
        >
          <button class="mt-5 btn text-orange-700" @click.prevent="resendOTP">
            Resend OTP
          </button>
        </div>
      </div>
    </div>

    <div class="py-8 px-4 sm:px-10" v-if="success">
      <AwaitingVerificationMessage />
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import AwaitingVerificationMessage from '../../components/messages/AwaitingVerificationMessage'
export default {
  components: {
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
      resendSuccess: false,
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
      this.disabled = true
      this.loading = true
      this.displayForm = false
      if (!this.$v.$invalid) {
        await this.$axios
          .post('contracts/sign', {
            ...this.formData,
          })
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
          //let user = response.data.data
          //   console.log(user)

          this.success = true
          this.resendSuccess = true
          this.$noty.success('Token has been resent, please check your email')
          this.disable = false
        })
        .catch((error) => {
          if (error.response) {
            // const data = error.response.data.message
            this.$noty.error('Not Found')
          }
          this.disable = false
        })
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
