<template>
  <div class="bg-gray-100 p-4 py-8 mb-10 rounded-md">
    <div>
      <div class="pl-4">Please take a photo of yourself</div>
      <div class="my-3 sm:mt-0 sm:col-span-2">
        <div>
          <client-only placeholder="Loading...">
            <div
              class="
                w-full
                mt-5
                md:mt-0
                bg-white
                py-2
                px-3
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                leading-4
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              <div
                class="
                  flex flex-col
                  justify-between
                  md:flex-row
                  md:justify-between
                  items-center
                "
              >
                <div
                  class="h-28 w-28 rounded-full overflow-hidden bg-gray-100"
                  v-if="!previewImage"
                >
                  <span>
                    <svg
                      class="h-56 w-56 md:h-64 md:w-64 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-else
                  class="
                    bg-center bg-cover
                    cursor-pointer
                    h-56
                    w-56
                    md:h-64
                    md:w-64
                    block
                    rounded-full
                  "
                  :style="{ 'background-image': `url(${previewImage})` }"
                  @click="selectImage"
                ></div>
                <div>
                  <input
                    ref="fileInput"
                    type="file"
                    v-on:change="handleFileUpload()"
                  />
                </div>

                <!-- <div
                class="imagePreviewWrapper"
                :style="{ 'background-image': `url(${previewImage})` }"
                @click="selectImage"
              ></div>
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              /> -->
                <div v-if="errors">
                  <span class="text-red-700 text-xs" v-if="errors.selfie">
                    {{ errors.selfie[0] }}
                  </span>
                </div>
              </div>
            </div>
          </client-only>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8">
        <button
          @click.prevent="showPreviousSlide"
          class="
            mb-5
            hidden
            px-6
            py-3
            h-12
            sm:w-full
            md:w-2/6
            border-transparent
            focus:outline-none
            rounded-full
            shadow-sm
            text-base
            font-medium
            text-orange-500
            bg-white
            border-2 border-orange-500
          "
        >
          Back
        </button>
        <div class="flex items-center sm:w-full justify-end">
          <span v-if="disable" class="flex items-center mb-3">
            <img src="../../assets/images/loading-sm.gif" alt="" />
          </span>
          <button
            type="submit"
            :disabled="disable"
            :class="{ 'opacity-50 cursor-not-allowed': disable }"
            @click.prevent="submitImage"
            class="
              px-6
              py-3
              h-12
              sm:w-full
              md:w-1/6
              flex
              items-center
              justify-center
              border border-transparent
              focus:outline-none
              border-none
              text-base
              font-medium
              text-white
              bg-orange-500
              hover:bg-orange-600
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from './Upload.vue'
import { compressAccurately } from 'image-conversion'
export default {
  components: {
    Upload,
  },
  data() {
    return {
      file: '',
      disable: true,
      previewImage: null,
    }
  },
  methods: {
    selectImage() {
      this.$refs.file.click()
    },
    async handleFileUpload() {
      setTimeout(() => {
        this.disable = false
      }, 3000)
       // this.file = this.$refs.file.files[0]
      const fileInput = this.$refs.fileInput.files[0]
      const res = await compressAccurately(fileInput, 200)
      console.log(res)
      this.file = res
      let file = this.$refs.fileInput.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
        // this.loading = false
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    async submitImage() {
      let vm = this
      let formData = new FormData()
      formData.append('selfie', this.file)
      console.log(this.file)
      const imageSize = 1024 * 1024
      const isType =
        this.file.type === 'image/jpeg' ||
        this.file.type === 'image/png' ||
        this.file.type === 'image/jpg'
      if (!this.file) {
        this.$noty.error('No file chosen')
      }
      if (!isType) {
        this.$noty.error(
          'You can only upload JPG, JPEG or PNG files!',
          'This file type is not allowed'
        )
        return false
      }
      if (this.file.size > imageSize) {
        this.$noty.error('File too big (> 1MB)')
        return false
      } else {
        const loan_id = this.$store.getters.activeloan.id
        vm.disable = true
        const res = await this.$axios({
          method: 'POST',
          url: `/loans/${loan_id}/selfie/upload`,
          data: formData,
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
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
      }
    },
    showPreviousSlide() {
      this.$emit('showPrev')
    },
  },
}
</script>

<style scoped>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
/* .imagePreviewWrapper {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
} */
</style>
