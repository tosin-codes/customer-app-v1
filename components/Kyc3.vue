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
            </div>
          </div>
          <div class="flex justify-between items-center mt-8">
            <button
              @click.prevent="prevSlide"
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
      console.log('clicked')
      this.$v.inspectionDate.$touch()
      var isValid = !this.$v.inspectionDate.$invalid

      if (isValid) {
        try {
          const user = await this.$axios.put(
            '/loans/8/vehicles/inspection',
            this.inspectionDate
          )
          this.setState({
            user,
          })
        } catch (error) {
          console.log(error)
        }
        this.$emit('lastSlide')
      }
    },
    previous() {
      this.$emit('back')
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
