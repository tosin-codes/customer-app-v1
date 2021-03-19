<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please enter your account details</div>
      <div>
        <form action="">
          <div class="grid lg:grid-cols-2 lg:gap-8">
            <div>
              <input
                class="my-4"
                type="number"
                placeholder="BVN"
                v-model.trim="bankInformation.bvn"
              />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.bvn.$error &&
                  !$v.bankInformation.bvn.required
                "
                >BVN is required</span
              >
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="!$v.bankInformation.bvn.minLength"
                >Enter a valid BVN</span
              >
            </div>
            <div>
              <input
                class="my-4"
                type="text"
                placeholder="Account Name "
                v-model.trim="bankInformation.holder_name"
              />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.holder_name.$error &&
                  !$v.bankInformation.holder_name.required
                "
                >Account name is required</span
              >
            </div>
            <div>
              <input
                class="my-4"
                type="number"
                placeholder="Account Number"
                v-model.trim="bankInformation.number"
              />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.number.$error &&
                  !$v.bankInformation.number.required
                "
                >Account number is required</span
              >
            </div>
            <div>
              <input
                class="my-4"
                type="text"
                placeholder="Bank name"
                v-model.trim="bankInformation.name"
              />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.name.$error &&
                  !$v.bankInformation.name.required
                "
                >Bank name is required</span
              >
            </div>
            <div>
              <input
                class="my-4"
                type="text"
                placeholder="Account Type"
                v-model.trim="bankInformation.type"
              />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.type.$error &&
                  !$v.bankInformation.type.required
                "
                >Account type is required</span
              >
            </div>
          </div>

          <div class="flex justify-end">
            <button
              @click.prevent="next"
              class="mb-5 px-6 py-3 h-12 sm:w-full md:w-1/6 border border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      bankInformation: {
        bvn: '',
        holder_name: '',
        number: '',
        name: '',
        type: '',
      },
    }
  },
  validations: {
    bankInformation: {
      bvn: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      holder_name: {
        required,
      },
      number: {
        required,
      },
      name: {
        required,
      },
      type: {
        required,
      },
    },
  },
  methods: {
    ...mapMutations({
      setState: 'setStates',
    }),
    async next() {
      this.$v.bankInformation.$touch()
      const isValid = !this.$v.bankInformation.$invalid

      // this.$auth.user

      if (isValid) {
        console.log(this.$store.getters.user.id)
        const id = this.$store.getters.user.id

        try {
          const user = await this.$axios({
            method: 'PUT',
            url: `loans/${id}/banks/verify`,
            data: this.bankInformation,
            headers: {
              Token: `Bearer ${this.user.token}`,
            },
          })
        } catch (error) {
          console.log(error)
        }
        this.$emit('on-validate')
      }
    },
  },
}
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
