<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 w-full rounded-md">
    <form class="mx-4" @submit.prevent="validateSubmit">
      <h4
        class="sm:ml-6 lg:ml-16 lg:text-2xl lg:font-bold sm:font-medium sm:text-xl text-gray-600 pb-5"
      >
        Upload the following documents for your vehicle
      </h4>
      <div class="grid lg:grid-cols-2 lg:gap-8 place-items-center">
        <div class="" v-for="(value, key, i) in document" :key="i">
          <div class="">
            <div>
              <Upload :no="i" @uploaded="getUpload(key, $event)" />
            </div>
            <div>
              <label
                class="lg:font-medium lg:text-xl capitalize text-gray-600 lg:pt-5 sm:pb-10 sm:pt-2 sm:font-bold"
                for
                >{{ key.replace(/_/g, ' ') }}</label
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 
        <div class="text-center">
          <button @click.prevent="validateSubmit" class="">Next</button>
        </div> -->
      <div class="flex justify-between lg:m-6 items-center mt-5">
        <button
          @click.prevent="back"
          class="mb-5 lg:ml-6 px-6 py-3 h-12 sm:w-full md:w-1/6 border border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white hover:bg-orange-600"
        >
          Back
        </button>
        <button
          @click.prevent="validateSubmit"
          class="mb-5 lg:mr-6 px-6 py-3 h-12 sm:w-full md:w-1/6 border border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
        >
          Next
        </button>
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
  }),
  mounted() {
    this.document = {
      ...this.document,
    }
  },
  methods: {
    getUpload(key, value) {
      console.log(key, value)
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
          vehicle_id: this.$store.getters.user.id,
        },
      ]
      this.uploadDocuments(vehicle_documents)
      this.$emit('next')
    },
    async uploadDocuments(data) {
      console.log(this.$store.getters.user.id)
      // this.$store.commit('set', { loading: true })
      const formData = new FormData()
      for (let i = 0; i < data.length; i++) {
        for (let key of Object.keys(data[i]))
          formData.append(`vehicles[${i}][${key}]`, data[i][key])
      }
      const id = this.$store.getters.user.id
      try {
        const res = await this.$axios({
          method: 'POST',
          url: `/loans/${id}/vehicles/documents`,
          data: formData,
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
        })
        this.$store.commit('set', {
          loan_offer: res.data.data,
        })

        // this.$store.commit('set', { loading: false })
      } catch (err) {
        console.log(err)
        // this.catchErrors(err)
      }
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
.wrapper {
  position: relative;
  height: 250px;
  width: 250px;
  border: 2px dashed #c2cdda;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.wrapper .icon {
  font-size: 100px;
  color: gray;
}
</style>
