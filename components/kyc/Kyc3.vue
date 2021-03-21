<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please select your preferred inspection date</div>
      <div>
        <form action="">
          <div class="grid lg:grid-cols-2 lg:gap-8">
            <div>
              <input class="my-4" type="date" v-model="inspectionDate.date" />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.inspectionDate.date.$error &&
                  !$v.inspectionDate.date.required
                "
                >Date is required</span
              >
              <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.date">
                {{ errors.date[0] }}
              </span>
              </div>
            </div>
            <div>
              <input class="my-4" type="time" v-model="inspectionDate.time" />
              <span
                class="text-red-500 italics text-sm pl-4"
                v-if="
                  $v.inspectionDate.time.$error &&
                  !$v.inspectionDate.time.required
                "
                >Time is required</span
              >
              <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.time">
                {{ errors.time[0] }}
              </span>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-8">
            <button
              @click.prevent="back"
              class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white border-2 border-orange-500"
            >
              Prev
            </button>
            <button
              type="submit"
              @click.prevent="submitDate"
              class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
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
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      inspectionDate: {
        date: '',
        time: '',
      },
    }
  },
  validations: {
    inspectionDate: {
      date: { required },
      time: { required },
    },
  },
  methods: {
    ...mapMutations({
      setState: 'setStates',
    }),

    async submitDate() {
      this.$v.inspectionDate.$touch()
      var isValid = !this.$v.inspectionDate.$invalid

      if (!isValid) {
        return false;
      }
        const loan_id = this.$store.getters.activeloan.id
        
        await this.$axios({
          method: 'PUT',
          url: `loans/${loan_id}/vehicles/inspection`,
          data: this.inspectionDate
        }).then(response =>{
        let loan = response.data.data
        this.$store.commit('setActiveLoanLevel', loan)
      })
      .catch(error =>{
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
      })
        
    },
    back() {
      this.$emit('prevSlide')
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
