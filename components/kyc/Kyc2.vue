<template class="mt-5">
  <div class="bg-gray-100 p-4 py-8 w-full rounded-md">
    <form class="mx-4" @submit.prevent="validateSubmit">
      <h4
        class="text-sm md:font-semibold sm:font-semibold sm:text-sm text-gray-800 pb-5"
      >
        Upload the following documents for your vehicle
      </h4>
      <client-only placeholder="Loading...">
        <div class="flex justify-between flex-wrap">
          <div
            class="w-full lg:w-1/2 md:w-1/2"
            v-for="(value, key, i) in document"
            :key="i"
          >
            <div class="">
              <div>
                <Upload :no="i" @uploaded="getUpload(key, $event)" />
              </div>
              <div class="mb-12 mt-2">
                <label
                  class="md:font-medium md:text-xs capitalize text-gray-600 md:pt-5 sm:pb-10 sm:pt-2 sm:font-bold"
                  for
                  >{{ key.replace(/_/g, ' ') }}</label
                >
              </div>
            </div>
          </div>
        </div>
      </client-only>

      <div class="flex justify-between items-center">
        <button
          @click.prevent="back"
          class="mb-5 hidden px-6 py-3 h-12 sm:w-full md:w-1/6 border border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white hover:bg-orange-600 hover:text-white"
        >
          Back
        </button>
        <div class="flex items-center sm:w-full justify-end">
          <span v-if="disable" class="flex items-center mb-3">
            <img src="../../assets/images/loading-sm.gif" alt="" />
          </span>
          <button
            @click.prevent="validateSubmit"
            :disabled="disable"
            :class="{ 'opacity-50 cursor-not-allowed': disable }"
            class="px-6 py-3 h-12 sm:w-full md:w-1/6 border border-transparent focus:outline-none border-none text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Upload from './Upload.vue'
export default {
  components: {
    Upload,
  },
  data: () => ({
    document: {
      proof_of_ownership: null,
      road_worthiness: null,
      license: null,
      means_of_identification: null,
    },
    errorMessage: '',
    loading: false,
    error: false,
    disable: false,
  }),
  mounted() {
    this.document = {
      ...this.document,
    }
  },
  methods: {
    getUpload(key, value) {
      this.document[key] = value
      this.$forceUpdate()
    },
    validateSubmit() {
      let error = []
      for (let i in this.document) {
        // this.toastr('',)
        if (!this.document[i]) error.push(i.replace(/_/g, ' '))
      }
      const errorMessage = `${error.join(', ')} ${
        error.length > 1 ? 'are' : 'is'
      } empty!`
      if (error.length) return this.$noty.error('Upload all documents')
      const vehicle_documents = [
        {
          ...this.document,
          vehicle_id: 1,
        },
      ]
      this.disable = true
      this.uploadDocuments(vehicle_documents)
      this.$emit('next')
    },
    async uploadDocuments(data) {
      const loan_id = this.$store.getters.activeloan.id
      let vm = this
      const formData = new FormData()
      for (let i = 0; i < data.length; i++) {
        for (let key of Object.keys(data[i]))
          formData.append(`vehicles[${i}][${key}]`, data[i][key])
      }

      await this.$axios({
        method: 'POST',
        url: `/loans/${loan_id}/vehicles/documents`,
        data: formData,
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
