<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please take a photo of yourself</div>
      <!-- <div>
        <client-only>
          <vue-web-cam ref="webcam"></vue-web-cam>
        </client-only>

        <hr />
        <img :src="photo" alt="" style="width: 400px; height: 300px" />
        <hr />
        <button type="button" @click="takePhoto">Take Photo</button>
      </div> -->
      <div>
        <label
          >File
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
        </label>
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
      formData.append('file', this.file)

      if (!this.file) {
        this.$noty.error('No file chosen')
      } else if (this.file.size > 1024 * 1024) {
        this.$noty.error('File too big (> 1MB)')
      } else {
        const id = this.$store.getters.user.id
        try {
          const res = await this.$axios({
            method: 'POST',
            url: `/loans/${id}/selfie/upload`,
            data: formData,
            headers: {
              Authorization: `Bearer ${this.user.token}`,
            },
          })
        } catch (err) {
          console.log(err)
        }
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
