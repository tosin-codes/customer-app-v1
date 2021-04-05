<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="font-semibold text-sm">
        Please select your preferred inspection date
      </div>
      <div>
        <client-only placeholder="Loading...">
          <form action="">
            <div class="flex flex-col md:flex-row justify-between mt-3">
              <div class="w-full mb-6">
                <date-picker
                  id="input"
                  class=""
                  placeholder="YYYY-MM-DD"
                  format="YYYY-MM-DD"
                  value-type="format"
                  v-model="inspectionDate.date"
                />
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
              <div class="w-full md:ml-3">
                <date-picker
                  id="input"
                  class=""
                  placeholder="HH:MM"
                  format="hh:mm A"
                  value-type="format"
                  type="time"
                  v-model="inspectionDate.time"
                />
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
                class="mb-5 hidden px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white border-2 border-orange-500"
              >
                Prev
              </button>

              <div class="flex items-center sm:w-full justify-end">
                <span v-if="disable" class="flex items-center mb-3">
                  <img src="../../assets/images/loading-sm.gif" alt="" />
                </span>
                <button
                  type="submit"
                  :disabled="disable"
                  :class="{ 'opacity-50 cursor-not-allowed': disable }"
                  @click.prevent="submitDate"
                  class="px-6 py-3 h-12 sm:w-full md:w-1/6 border flex items-center justify-center border-transparent focus:outline-none border-none text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import { mapMutations } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      inspectionDate: {
        date: '',
        time: '',
      },
      disable: false,
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
      let vm = this
      this.$v.inspectionDate.$touch()
      var isValid = !this.$v.inspectionDate.$invalid

      if (!isValid) {
        return false
      }
      const loan_id = this.$store.getters.activeloan.id
      vm.disable = true
      await this.$axios({
        method: 'PUT',
        url: `loans/${loan_id}/vehicles/inspection`,
        data: this.inspectionDate,
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
    },
    back() {
      this.$emit('prevSlide')
    },
  },
}
</script>

<style scoped>
.mx-datepicker {
  width: 100%;
}
.mx-input {
  border: none !important;
  background: #f7fafc !important;
}
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
