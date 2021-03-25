<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <GeneralNav />
    <div class="my-container">
      <div class="">
        <div class="flex flex-row items-center mb-10">
          <div>
            <img class="w-8 mr-4" src="~/assets/svg/dashboard.svg" alt="" />
          </div>
          <div class="font-bold text-gray-700">Create Loan</div>
        </div>
        <div class="bg-white px-6 py-6 pb-24">

          <form action="" class="" @submit.prevent="checkForm">
            <div
              v-show="createLoan1"
              class="bg-gray-100 py-6 px-48 rounded-lg mb-5 flex flex-col"
            >
              <div class="font-light text-center mb-10 text-xl">
                Please Enter the details correctly
              </div>
              <div class="">
                <div class="mb-5">
                  <div class="mb-5 flex flex-col">
                    <label class="mb-2 font-semibold text-gray-700" for=""
                      >Amount</label
                    >
                    <input
                      class="px-3 h-12 bg-gray-100 border-2 border-solid border-gray-500 outline-none rounded-full"
                      placeholder="Please enter amount"
                      type="text"
                      v-model="amount"
                    />
                    <small class="error text-red-600">{{ error }}</small>
                  </div>
                  <div class="flex flex-col mb-5">
                    <label class="mb-2 font-semibold text-gray-700" for=""
                      >For how long</label
                    >
                    <v-select
                      class="mySelect rounded-full"
                      :options="tenors"
                      placeholder="Select..."
                      :reduce="(value) => value.id"
                      label="value"
                      v-model="desired.desired_tenor"
                    ></v-select>
                    <small class="error text-red-600">{{
                      error_duration
                    }}</small>
                  </div>
                  <div class="flex flex-col mb-5">
                    <label class="mb-2 font-semibold text-gray-700" for=""
                      >Repayment Plan</label
                    >
                    <v-select
                      class="mySelect rounded-full"
                      :options="repayments"
                      v-model="desired.desired_repayment_plan"
                      :reduce="(value) => value.id"
                      label="value"
                      placeholder="Select..."
                    ></v-select>
                    <small class="error text-red-600">{{ error_plan }}</small>
                  </div>
                </div>
              </div>
              <button
                class="bg-white border-2 focus:outline-none outline-none border-orange-500 bg-opacity-0 hover:bg-opacity-100 py-2 px-10 rounded-full text-orange-500 self-center"
              >
                Submit
              </button>
            </div>
            <div
              v-show="createLoan2"
              class="bg-gray-100 py-12 px-6 rounded-lg mb-5 flex flex-col"
            >
              <CreateLoan2 @previousForm="showForm1" @nextForm="showModal" />
            </div>
            <div v-show="modal">
              <ModalChild @closeCard="showForm" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralNav from '../../components/GeneralNavbarComponent'
import CreateLoan2 from '../../components/CreateLoan2'
import ModalChild from '../../components/ModalChild'
import { mapMutations } from 'vuex'
import vSelect from 'vue-select'
export default {
  components: {
    GeneralNav,
    CreateLoan2,
    ModalChild,
    vSelect,
  },
  data() {
    return {
      amount: '',
      desired: {
        desired_tenor: '',
        desired_repayment_plan: '',
      },
      error: '',
      error_duration: '',
      error_plan: '',
      createLoan1: true,
      createLoan2: false,
      modal: false,
      tenors: [
        { id: 1, value: '1 Month' },
        { id: 2, value: '2 Months' },
        { id: 3, value: '3 Months' },
        { id: 4, value: '4 Months' },
        { id: 5, value: '5 Months' },
        { id: 6, value: '6 Months' },
        { id: 7, value: '7 Months' },
        { id: 8, value: '8 Months' },
        { id: 9, value: '9 Months' },
        { id: 10, value: '10 Months' },
        { id: 11, value: '11 Months' },
        { id: 12, value: '12 Months' },
      ],
      repayments: [
        { id: 1, value: 'Monthly' },
        { id: 2, value: 'Bi-Monthly' },
        { id: 4, value: 'Quaterly' },
      ],
    }
  },
  methods: {
    ...mapMutations('information', {
      setStates: 'setStates',
    }),
    showForm2() {
      this.createLoan1 = false
      this.createLoan2 = true
    },
    showForm1() {
      this.createLoan1 = true
      this.createLoan2 = false
    },
    showModal() {
      this.createLoan1 = false
      this.createLoan2 = false
      this.modal = true
    },
    showForm() {
      this.createLoan2 = true
      this.modal = false
    },
    checkForm() {
      const amount = this.amount.replace(/\,/g, '')

      if (amount == '' || amount < 200000) {
        this.error = 'The minimum amount you can borrow is ₦200,000'
        setTimeout(() => {
          this.error = ''
        }, 5000)
      } else if (amount > 50000000) {
        this.error = 'The maximum amount you can borrow is ₦50,000,000'
      } else if (this.desired.desired_tenor == '') {
        this.error_duration = 'Please select how long you want this loan'
        setTimeout(() => {
          this.error_duration = ''
        }, 5000)
      } else if (this.desired.desired_repayment_plan == '') {
        this.error_plan = 'Please select a repayment plan'
        setTimeout(() => {
          this.error_plan = ''
        }, 5000)
      } else {
        this.error = ''
        this.error_duration = ''
        this.error_plan = ''
        this.desired.desired_amount = Number(this.amount.split(',').join(''))
        this.setStates({
          amount: this.desired.desired_amount,
          duration: this.desired.desired_tenor,
          repayment_plan: this.desired.desired_repayment_plan,
        })
        this.createLoan2 = true
        this.createLoan1 = false
      }
    },
  },
  watch: {
    amount: function (newValue) {
      const result = newValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      this.amount = result
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
  border-color: #2684ff;
  box-shadow: 0 0 0 1px #2684ff;
}
</style>
<style>
.mySelect .vs__dropdown-toggle {
  height: 50px;
  border-radius: 50px;
  border: 2px solid #a0aec0;
  padding: 0 10px;
}

.mySelect .vs__dropdown-toggle:focus-within {
  border-color: #2684ff;
  outline: none;
  box-shadow: 0 0 0 1px #2684ff;
}

.mySelect .vs__dropdown-toggle input::placeholder {
  color: rgb(128, 128, 128);
  font-size: 0.9rem;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 400;
}

.mySelect .vs__search {
  width: 100%;
}
</style>
