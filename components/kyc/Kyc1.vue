<template>
  <div class="bg-gray-100 p-4 md:px-8 py-8 rounded-md md:round-none">
    <div>
      <div class="mb-5">
        <div class="w-full flex justify-between">
          <h3>Please enter your account details</h3>
          <span class="text-green-600 font-semibold flex justify-between items-center">
            <span v-if="payantLoader">
                <img
                  src="~/assets/images/loading-sm.gif"
                  alt=""
                />
            </span>
            <span v-if="account_name">
              {{account_name}}
            </span>
          </span>
        </div>
      </div>
      <div>
        <form action="">
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div>
              <select
                name=""
                class="border-gray-500 focus:border-gray-900 bg-gray-100 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                v-model.trim="bankInformation.code"
                id=""
              >
                <option value="" disabled selected>Select bank name</option>
                <option
                  v-for="bank in banks"
                  :key="bank.code + '-' + bank.name"
                  :value="bank.code"
                >
                  {{ bank.name }}
                </option>
              </select>
              <span
                class="text-red-500 italics text-xs"
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
              <input
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type = "number"
                maxlength = "10"
                @keyup="checkAccountDetails"
                placeholder="Account Number"
                v-model.trim="bankInformation.number"
                name="account_number"
                class="border-b-2 pl-4 border-gray-500 bg-gray-100 mt-2 h-12 w-full rounded-none text-xs"
              />
              <span
                class="text-red-500 italics text-xs"
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
              <select
                name=""
                class="border-gray-500 focus:border-gray-900 bg-gray-100 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                v-model.trim="bankInformation.type"
                placeholder="type"
              >
                <option value="" disabled selected>Select...</option>
                <option value="savings">SAVINGS</option>
                <option value="current">CURRENT</option>
              </select>
              <span
                class="text-red-500 italics text-xs"
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
            <div>
              <input
                type="number"
                placeholder="BVN"
                v-model.trim="bankInformation.bvn"
                name="bvn"
                class="border-b-2 border-gray-500 pl-4 bg-gray-100 mt-2 h-12 w-full rounded-none text-xs"
              />
              <span
                class="text-red-500 italics text-xs"
                v-if="
                  $v.bankInformation.bvn.$error &&
                  !$v.bankInformation.bvn.required
                "
                >BVN is required</span
              >
              <span
                class="text-red-500 italics text-xs"
                v-if="!$v.bankInformation.bvn.minLength"
                >Enter a valid BVN</span
              >
              <div v-if="errors">
                <span class="text-red-700 text-xs" v-if="errors.bvn">
                  {{ errors.bvn[0] }}
                </span>
              </div>
            </div>
          </div>

          <div class="flex justify-end items-center mt-3">
            <span v-if="disable">
              <img
                class="mx-auto my-5"
                src="~/assets/images/loading-sm.gif"
                alt=""
              />
            </span>

            <button
              @click.prevent="next"
              :disabled="disable"
              :class="{ 'opacity-50 cursor-not-allowed': disable }"
              class="px-6 py-3 h-12 sm:w-full md:w-1/6 flex items-center justify-center border border-transparent focus:outline-none border-none text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
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
import TextInputClassic from '~/components/FormComponents/Texts/TextInputClassic'
export default {
  components: {
    TextInputClassic,
  },
  data() {
    return {
      disable: false,
      banks: '',
      account_name:null,
      bankInformation: {
        bvn: '',
        number: '',
        code: '',
        type: '',
      },
      payantLoader:false
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
  computed:{
    
  },
  methods: {
    ...mapMutations({
      setState: 'setStates',
      setFullName:'setFullName'
    }),
    async checkAccountDetails(){
      const headers = {
        "Authorization" : "Bearer bd2a0d8767338b2f342660595cb695eefdcabf19a25828cdff94a169",
        "Content-Type": "application/json"
      }
      if(this.getCodeAndACcount()){
        let vm = this
        this.payantLoader = true;
        this.$axios.post('https://api.payant.ng/resolve-account',
          {"settlement_bank": this.bankInformation.code, "account_number": this.bankInformation.number},
          {headers: headers}
        )
        .then(response => {
          this.payantLoader = false;
          if(response.data.status === 'success'){
            vm.account_name = response.data.data.account_name
                this.$store.dispatch('submitAccountName', this.account_name)
    
          }else if(response.data.status === 'error'){
            vm.account_name = null
            vm.$noty.error(response.data.message)
          }
        })
        .catch(error => {
          this.payantLoader = false;
          if (error.response) 
            vm.$noty.error(error.response.data)
        })
      }
    },
    getCodeAndACcount(){
      if(this.bankInformation.number.length === 10 && this.bankInformation.code.length === 3){
        return true
      }
      return false
    },
    async next() {
      let vm = this
      this.$v.bankInformation.$touch()
      const isValid = !this.$v.bankInformation.$invalid

      // this.$auth.user

      if (!isValid) {
        return false
      }

      if(!this.account_name){
        this.$noty.error('Please enter a valid account number')
        return false;
      }
      const loan_id = this.$store.getters.activeloan.id

      vm.disable = true
      this.$axios
        .put(`loans/${loan_id}/banks/verify`, {
          ...this.bankInformation,
        })
        .then((response) => {
          let loan = response.data.data
          this.$store.commit('setActiveLoanLevel', loan)
          vm.disable = false
        })
        .catch((error) => {
          vm.disable = false
          if (error.response) {
            if (
              error.response.status === 401 ||
              error.response.status === 403 ||
              error.response.status === 500
            ) {
              const data = error.response.data.message
              this.$noty.error(data)
              return false
            }
            if (error.response.status === 422) {
              this.$store.commit(
                'setValidationErrors',
                error.response.data.errors
              )
              return false
            }
          }
        })
      this.$emit('on-validate')
    },
    getStates() {
      this.$axios
        .get('/banks')
        .then((response) => {
          this.banks = response.data.data
        })
        .catch((error) => console.log(error.response))
    },
  },
  mounted() {
    this.getStates()
  },
}
</script>

<style></style>
