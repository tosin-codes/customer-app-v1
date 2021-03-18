<template>
  <form class="mx-4 w-40" @submit.prevent="validateSubmit">
    <h4 class="text-center">Upload the following documents for your vehicle</h4>
    <div class="">
      <div class="" v-for="(value, key, i) in document" :key="i">
        <div class="">
          <div>
            <label class="" for>{{ key.replace(/_/g, ' ') }}</label>
          </div>
          <div class="">
            <Upload :no="i" @uploaded="getUpload(key, $event)" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button @click.prevent="validateSubmit" class="">Next</button>
      </div>
    </div>
  </form>
</template>

<script>
// import Upload from '../Upload.vue'
export default {
  components: {
    // Upload,
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
      if (error.length)
        return this.$toastr.e(errorMessage, 'Upload all documents')
      const vehicle_documents = [
        {
          ...this.document,
          vehicle_id: this.$store.state.loan_offer.id,
        },
      ]
      this.uploadDocuments(vehicle_documents)
    },
    async uploadDocuments(data) {
      this.$store.commit('set', { loading: true })
      const formData = new FormData()
      for (let i = 0; i < data.length; i++) {
        for (let key of Object.keys(data[i]))
          formData.append(`vehicles[${i}][${key}]`, data[i][key])
      }
      const { id } = this.$store.state.loan_offer
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
        // this.$emit('next');
        this.$store.commit('set', { loading: false })
      } catch (err) {
        this.catchErrors(err)
      }
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
