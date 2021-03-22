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
          <form action="" class="">
            <div v-show="createLoan1" class="bg-gray-100 py-6 px-48 rounded-lg mb-5 flex flex-col">
              <div class="font-light text-center mb-10 text-xl">Please Enter the details correctly</div>
              <div class="">
                <div class="mb-5">
                  <div class="mb-5 flex flex-col">
                    <label class="mb-2 font-semibold text-gray-700" for="">Amount</label>
                    <input class="px-3 h-12 bg-gray-100 border border-gray-400 rounded-full" placeholder="Please enter amount" type="text" />
                  </div>
                  <div class="flex flex-col mb-5">
                    <label class="mb-2 font-semibold text-gray-700" for="">For how long</label>
                    <v-select
                      class="mySelect rounded-full"
                      :options="tenors"
                      placeholder="Select..."
                      :reduce="(value) => value.id"
                      label="value"
                      v-model="desired.desired_tenor"
                    ></v-select>
                  </div>
                  <div class="flex flex-col">
                    <label class="mb-2 font-semibold text-gray-700" for="">Repayment Plan</label>
                    <v-select
                      class="mySelect rounded-full"
                      :options="repayments"
                      v-model="desired.desired_repayment_plan"
                      :reduce="(value) => value.id"
                      label="value"
                      placeholder="Select..."
                    ></v-select>
                  </div>
                </div>
                
              </div>
              <button @click.prevent="showForm2" class="bg-white border border-orange-500 bg-opacity-0 hover:bg-opacity-100 py-2 px-10 rounded-full text-orange-500 self-center">
                Submit
              </button>
            </div>
            <div v-show="createLoan2" class="bg-gray-100 py-12 px-6 rounded-lg mb-5 flex flex-col">
              <CreateLoan2 />
              <div class="flex justify-between">
                <button @click.prevent="showForm1" class="bg-white bg-opacity-0 hover:bg-opacity-100 border border-orange-500 text-orange-500 py-2 px-10 rounded-full self-end">
                  Prev.
                </button>
                <button @click.prevent="showModal" class="bg-orange-500 hover:bg-orange-600 py-2 px-10 rounded-full text-white self-end">
                  Next
                </button>
              </div>
            </div>
            <div v-show="modal">
              <ModalChild />
              
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
import vSelect from 'vue-select'
export default {
  components: {
    GeneralNav,
    CreateLoan2,
    ModalChild,
    vSelect
  },
  data () {
    return {
      amount: '',
      desired: {
        desired_tenor: '',
        desired_repayment_plan: '',
      },
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
    showForm2 () {
      this.createLoan1 = false;
      this.createLoan2 = true;
    },
    showForm1 () {
      this.createLoan1 = true;
      this.createLoan2 = false;
    },
    showModal () {
      this.createLoan1 = false;
      this.createLoan2 = false;
      this.modal = true;
    },
  }
}
</script>

<style>

</style>
<style>
input:focus {
  outline: none;
}

.mySelect .vs__dropdown-toggle {
  height: 50px;
  border-radius: 50px;
  border: 2px solid #ccc;
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