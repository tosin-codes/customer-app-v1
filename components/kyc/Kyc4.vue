<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please take a photo of yourself</div>
      <!-- <div>
        <label
          >File
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
        </label>
      </div> -->
      <div class="mt-1 sm:mt-0 sm:col-span-2">
        <div class="flex items-center">
          <span class="h-28 w-28 rounded-full overflow-hidden bg-gray-100">
            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        
            <input
            type="file"
            class="ml-5 w-1/3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <div v-if="errors">
              <span class="text-red-700 text-xs" v-if="errors.selfie">
                {{ errors.selfie[0] }}
              </span>
              </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8">
        <button
          @click.prevent="showPreviousSlide"
          class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none rounded-full shadow-sm text-base font-medium text-orange-500 bg-white border-2 border-orange-500"
        >
          Back
        </button>
        <button
          type="submit"
          @click.prevent="submitImage"
          class="mb-5 px-6 py-3 h-12 sm:w-full md:w-2/6 border-transparent focus:outline-none border-none rounded-full shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from './Upload.vue'
export default {
  components: {
    Upload,
  },
  data() {
    return {
      file: '',
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
    },
    async submitImage() {
      let formData = new FormData()
      formData.append('selfie', this.file)

      if (!this.file) {
        this.$noty.error('No file chosen')
      } else if (this.file.size > 1024 * 1024) {
        this.$noty.error('File too big (> 1MB)')
      } else {
        const loan_id = this.$store.getters.activeloan.id
      
        const res = await this.$axios({
          method: 'POST',
          url: `/loans/${loan_id}/selfie/upload`,
          data: formData,
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
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
        
      }
    },
    showPreviousSlide() {
      this.$emit('showPrev')
    },
  },
}

// import { WebCam } from 'vue-web-cam'
// export default {
//   components: { WebCam },
//   data() {
//     return {
//       photo: null,
//     }
//   },
//   methods: {
//     takePhoto() {
//       console.log('clicked')
//       this.photo = this.$refs.webcam.getPhoto()
//     },
//   },
// }
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>
