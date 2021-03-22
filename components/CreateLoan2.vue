<template>
  <div>
    <div class="flex flex-col">
      <div class="mb-5">
        <div class="">
          <div class="lg:flex lg:flex-row justify-between">
            <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">What year is your car</label>
              <v-select
                id="select"
                :options="years"
                placeholder="Select..."
              ></v-select>
            </div>
            <div class="flex flex-col lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">What make is your car</label>
              <v-select
                id="select"
                :options="makes"
                label="name"
                :reduce="(name) => name.name"
                placeholder="Select..."
              ></v-select>
            </div>
          </div>
        </div>
        <div class="">
          <div class="lg:flex lg:flex-row justify-between">
            <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">Select your car model</label>
              <v-select
                id="select"
                :options="models"
                label="name"
                :reduce="(name) => name.name"
                placeholder="Select..."
              ></v-select>
            </div>
            <div class="flex flex-col lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">Select's your car's body size</label>
              <v-select
                id="select"
                :options="trims"
                label="name"
                placeholder="Select..."
                :reduce="(name) => name.name"
              ></v-select>
            </div>
          </div>
        </div>
        <div class="">
          <div class="lg:flex lg:flex-row justify-between">
            <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">Please type your plate number</label>
              <input
                type="text"
                name="duration"
                id="input"
                class="px-3 h-12 bg-gray-100 border border-gray-400 rounded-full"
                :reduce="(name) => name.name"
                placeholder="Enter Plate Number..."
              />
            </div>
            <div class="flex flex-col lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">Select your car insurance type</label>
              <v-select
                id="select"
                :options="insuranceOptions"
                placeholder="Select..."
              ></v-select>
            </div>
          </div>
        </div>
        <div class="">
          <div class="lg:flex lg:flex-row justify-between">
            <div class="flex flex-col lg:mr-10 lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">Are you the registered owner</label>
              <v-select
                :options="registeredOptions"
                id="select"
                :reduce="(value) => value.id"
                label="value"
                placeholder="Select..."
              >
              </v-select>
            </div>
            <div class="flex flex-col lg:w-3/6 mb-5">
              <label class="mb-2 font-semibold text-gray-700" for="">State of vehicle registration</label>
              <v-select
                id="select"
                :options="stateOptions"
                label="name"
                placeholder="Select..."
              ></v-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vehicles from '~/static/vehicles.json'
import vSelect from 'vue-select'
export default {
  components: {
    vSelect
  },
  data () {
    return {
      body: {},
      vehicleInformation: {
        year: '',
        make: '',
        model: '',
        trim: '',
        plate_number: '',
        insurance: '',
        registered_owner: '',
        how_you_found_us: '',
        state: '',
        phone_number: '',
      },
      amount: '',

      insuranceOptions: ['Third Party', 'Full', 'None'],
      registeredOptions: [
        { id: true, value: 'Yes' },
        { id: false, value: 'No' },
      ],
      stateOptions: ['Abuja', 'Lagos', 'Port Harcourt'],
      surveys: [
        { id: 1, value: 'Cash4DriveCampaign' },
        { id: 2, value: 'Instagram' },
        { id: 3, value: 'Facebook' },
        { id: 4, value: 'Linkedin' },
        { id: 5, value: 'Google' },
        { id: 6, value: 'Referral' },
      ],
      vehicles: vehicles,
    }
  },
  computed: {
    years() {
      return this.vehicles[0].selections.years.map((el) => el.id).reverse()
    },
    makes() {
      const yearObject = this.vehicles[0].selections.years.find(
        (year) => year.id === this.vehicleInformation.year
      )
      if (yearObject) {
        return yearObject.makes
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
#select .vs__dropdown-toggle:focus-within {
  border-color: #2684ff;
  outline: none;
  box-shadow: 0 0 0 1px #2684ff;
}
#select .vs__dropdown-toggle {
  border-radius: 50px;
  border: 2px solid #ccc;
  height: 50px !important;
  width: 100%;
  padding: 0 10px;
}

#select .vs__dropdown-toggle input::placeholder {
  color: rgb(128, 128, 128);
  font-size: 0.9rem;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 400;
}
</style>