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
              <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.bvn">
                {{ errors.bvn[0] }}
              </span>
              </div>
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
              <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.number">
                {{ errors.number[0] }}
              </span>
              </div>
            </div>
            <div>
              <select name="" class="w-full p-4 rounded-full my-4" v-model.trim="bankInformation.code" id="">
                  <option value="" disabled selected>Select bank name</option>
                 <option v-for="bank in banks" :key="bank.code+'-'+bank.name" :value="bank.code">{{bank.name}}</option>
              </select>
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.code.$error &&
                  !$v.bankInformation.code.required
                "
                >Bank name is required</span
              >
              <div v-if="errors">
                  <span class="text-red-700 text-xs" v-if="errors.code">
                  {{ errors.code[0] }}
                </span>
              </div>
              
            </div>
            <div>
              <select name="" class="w-full p-4 rounded-full my-4" v-model.trim="bankInformation.type" placeholder="type">
                <option value="" disabled selected>Select account type</option>
                 <option value="savings">SAVINGS</option>
                 <option value="current">CURRENT</option>
              </select>
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.bankInformation.type.$error &&
                  !$v.bankInformation.type.required
                "
                >Account type is required</span
              >
              <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.type">
                {{ errors.type[0] }}
              </span>
              </div>
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
      banks:'',
      bankInformation: {
        bvn: '',
        number: '',
        code: '',
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
      number: {
        required,
      },
      code: {
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

      if (!isValid) {
        return false;
      }

      const loan_id = this.$store.getters.activeloan.id

      
      this.$axios.put(`loans/${loan_id}/banks/verify`,{
        ...this.bankInformation,
      })
      .then(response => {
          let loan = response.data.data
          this.$store.commit('setActiveLoanLevel', loan)
      })
      .catch(error => {
        if (error.response) {
          if(error.response.status === 401 || error.response.status === 403 || error.response.status === 500){
            const data = error.response.data.message
            this.$noty.error(data)
            return false;
          }
          if(error.response.status === 422){
            this.$store.commit('setValidationErrors', error.response.data.errors);
            return false;
          }
        }
      });
      this.$emit('on-validate')
    },
    getStates(){
      this.$axios.get('/banks')
      .then(response =>{
        this.banks = response.data.data;
      })
      .catch(error => console.log(error.response))
    }
  },
  mounted(){
    this.getStates()
  }
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
