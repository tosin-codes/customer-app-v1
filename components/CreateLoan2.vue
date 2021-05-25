<template>
  <div>
    <div class="flex flex-col">
      <div class="mb-5">
        <form action="" autocomplete="off">
          <div class="mb-10">
            <h2 class="font-semibold mb-2 text-sm">
              Please Enter the details correctly
            </h2>
            <div
              class="flex items-center bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 text-sm font-bold px-4 py-3"
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

              <p>Only cars registered for a minimum of 3 months can apply..</p>
            </div>
          </div>
          <div class="">
            <div class="lg:flex lg:flex-row justify-between">
              <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >What year is your car</label
                >
                <v-select
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  id="select"
                  :options="years"
                  placeholder="Select year..."
                  v-model.trim="$v.vehicleInformation.year.$model"
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.year.required"
                      >Please select your car year.</span
                    >
                  </template>
                </p>
              </div>
              <div class="flex flex-col lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >What make is your car</label
                >
                <v-select
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  id="select"
                  :options="makes"
                  label="name"
                  :reduce="(name) => name.name"
                  v-model.trim="$v.vehicleInformation.make.$model"
                  placeholder="Select make..."
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.make.required"
                      >Please select the make of your car.</span
                    >
                  </template>
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="lg:flex lg:flex-row justify-between">
              <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Select your car model</label
                >
                <v-select
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  id="select"
                  :options="models"
                  label="name"
                  :reduce="(name) => name.name"
                  v-model.trim="$v.vehicleInformation.model.$model"
                  placeholder="Select..."
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.model.required"
                      >Please select the model of your car.</span
                    >
                  </template>
                </p>
              </div>
              <div class="flex flex-col lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Select's your car's body size</label
                >
                <v-select
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  id="select"
                  :options="trims"
                  label="name"
                  placeholder="Select..."
                  v-model.trim="$v.vehicleInformation.trim.$model"
                  :reduce="(name) => name.name"
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.trim.required"
                      >Please select your car body type.</span
                    >
                  </template>
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="lg:flex lg:flex-row justify-between">
              <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Please type your plate number</label
                >
                <input
                  type="text"
                  name="duration"
                  id="input"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  v-model.trim="$v.vehicleInformation.plate_number.$model"
                  :reduce="(name) => name.name"
                  placeholder="Enter Plate Number..."
                />
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.plate_number.required"
                      >Please enter a valid plate number.</span
                    >
                  </template>
                </p>
              </div>
              <div class="flex flex-col lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Select your car insurance type</label
                >
                <v-select
                  id="select"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  :options="insuranceOptions"
                  v-model.trim="$v.vehicleInformation.insurance.$model"
                  placeholder="Select..."
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.insurance.required"
                      >Please select your the type of insurance on your
                      car.</span
                    >
                  </template>
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="lg:flex lg:flex-row justify-between">
              <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >Are you the registered owner</label
                >
                <v-select
                  :options="registeredOptions"
                  id="select"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  :reduce="(value) => value.id"
                  v-model.trim="$v.vehicleInformation.registered_owner.$model"
                  label="value"
                  placeholder="Select..."
                >
                </v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span
                      v-if="!$v.vehicleInformation.registered_owner.required"
                      >Please select the answer to the question: Are you the
                      registered owner?.</span
                    >
                  </template>
                </p>
              </div>
              <div class="flex flex-col lg:w-3/6 mb-5">
                <label class="font-semibold text-sm text-gray-800" for=""
                  >State of vehicle registration</label
                >
                <v-select
                  id="select"
                  class="border-gray-500 focus:border-gray-900 border-b-2 mt-2 h-12 w-full outline-none text-xs"
                  :options="stateOptions"
                  v-model.trim="$v.vehicleInformation.state.$model"
                  label="name"
                  placeholder="Select..."
                ></v-select>
                <p class="errors text-red-500 text-xs italic">
                  <template v-if="errorMessage">
                    <span v-if="!$v.vehicleInformation.state.required"
                      >Please select the state your vehicle was
                      registered.</span
                    >
                  </template>
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <button
              @click.prevent="previous"
              class="bg-white bg-opacity-0 hover:bg-opacity-100 border border-orange-500 text-orange-500 py-2 px-10 self-end"
            >
              Prev.
            </button>
            <button
              @click.prevent="submitDetails"
              type="submit"
              class="bg-orange-500 hover:bg-orange-600 py-2 px-10 text-white self-end"
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
import vehicles from '~/static/vehicles.json'
import vSelect from 'vue-select'
import { required, sameAs } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
export default {
  components: {
    vSelect,
  },

  data() {
    return {
      errorMessage: '',
      body: {},
      vehicleInformation: {
        year: '',
        make: '',
        model: '',
        trim: '',
        plate_number: '',
        insurance: '',
        registered_owner: '',
        state: '',
      },
      amount: '',

      insuranceOptions: ['Third Party', 'Comprehensive', 'None'],
      registeredOptions: [
        { id: true, value: 'Yes' },
        { id: false, value: 'No' },
      ],
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
      surveys: [
        //{ id: 1, value: 'Cash4DriveCampaign' },
        { id: 1, value: 'Mr Macaroni Campaign' },
        { id: 2, value: 'Instagram' },
        { id: 3, value: 'Facebook' },
        { id: 4, value: 'Linkedin' },
        { id: 5, value: 'Google' },
        { id: 6, value: 'Referral' },
      ],
      vehicles: vehicles,
    }
  },
  validations: {
    vehicleInformation: {
      year: { required },
      make: { required },
      model: { required },
      trim: { required },
      plate_number: { required },
      insurance: { required },
      registered_owner: { required },
      state: { required },
    },
    checked: { sameAs: sameAs(() => true) },
  },
  methods: {
    ...mapMutations('information', {
      setStates: 'setStates',
    }),
    submitDetails() {
      this.$v.vehicleInformation.$touch()
      this.empty = !this.$v.vehicleInformation.$anyDirty
      this.errorMessage = this.$v.vehicleInformation.$invalid

      if (!this.$v.vehicleInformation.$invalid) {
        this.$emit('nextForm')
        window.scrollTo(0, 0)
        this.setStates({
          year: this.vehicleInformation.year,
          make: this.vehicleInformation.make,
          model: this.vehicleInformation.model,
          size: this.vehicleInformation.trim,
          plate_number: this.vehicleInformation.plate_number,
          car_insurance: this.vehicleInformation.insurance,
          registered_owner: this.vehicleInformation.registered_owner,
          vehicle_registration: this.vehicleInformation.state,
        })
      }
    },
    previous() {
      this.$emit('previousForm')
    },
  },

  computed: {
    years() {
      return this.vehicles[0].selections.years
        .filter((el) => el.id >= 2000)
        .map((el) => el.id)
        .reverse()
    },
    makes() {
      const yearObject = this.vehicles[0].selections.years.find(
        (year) => year.id === this.vehicleInformation.year
      )
      if (yearObject) {
        const myArr = yearObject.makes
        const modifyMakesArray = (arr, arrOfNames) => {
          const makeTopRated = arr.map((item) => {
            if (arrOfNames.includes(item.name))
              return { ...item, topRated: true }
            else return { ...item, topRated: false }
          })
          return makeTopRated
            .filter(({ topRated }) => topRated == true)
            .concat(makeTopRated.filter(({ topRated }) => topRated == false))
        }
        return modifyMakesArray(myArr, ['Toyota', 'Honda'])
      }
      return []
    },
    models() {
      const yearObject = this.vehicles[0].selections.years.find(
        (year) => year.id === this.vehicleInformation.year
      )
      if (yearObject) {
        const makeObject = yearObject.makes.find(
          (make) => make.name === this.vehicleInformation.make
        )
        if (makeObject) {
          return makeObject.models
        }
      }
      return []
    },
    trims() {
      const yearObject = this.vehicles[0].selections.years.find(
        (year) => year.id === this.vehicleInformation.year
      )
      if (yearObject) {
        const makeObject = yearObject.makes.find(
          (make) => make.name === this.vehicleInformation.make
        )
        if (makeObject) {
          const trimObject = makeObject.models.find(
            (model) => model.name === this.vehicleInformation.model
          )
          if (trimObject) {
            return trimObject.trims
          }
        }
      }
      return []
    },
  },
}
</script>

<style>
#input:focus {
  border-color: #444444;
  outline: none;
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
