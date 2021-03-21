<template>
  <div class="flex flex-col">
    <!-- <h6>click to upload.</h6> -->
    <div class="w-32 h-16" v-if="avatar">
      <img :src="avatar" />
    </div>

    <div class="file-upload-wrapper">
      <input
        type="file"
        required="required"
        @change="handleChange"
        :id="no ? 'upload' + no : 'input-file-now'"
        ref="file"
        class="file-upload"
        style="display: none"
      />

      <label
        :class="`btn btn-sm ${file ? 'btn-success' : 'btn-primary'}`"
        :for="no ? 'upload' + no : 'input-file-now'"
        ><div class="icon text-gray-500 text-5xl text-center">
          <font-awesome-icon
            :icon="['fas', 'cloud-upload-alt']"
            class="cursor-pointer"
          />
        </div>
      </label>

      <!-- <span v-if="loader">Loading...</span> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      avatar: '',
      loader: false,
    }
  },
  props: ['no'],
  methods: {
    async handleChange(event) {
      const file = event.target.files[0]
      const validType = this.beforeUpload(file)
      if (!validType) return
      this.loader = true
      getBase64(file, (avatar) => {
        this.$emit('uploaded', file)
        this.avatar = avatar
        this.loader = false
      })
      function getBase64(img, callback) {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)
      }
    },
    beforeUpload({ type, size }) {
      const isType =
        type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg'
      const imageSize = size / 1024 / 1000
      if (!isType) {
        this.$toastr.w(
          'You can only upload JPG, JPEG or PNG files!',
          'This file type is not allowed'
        )
        return false
      }
      if (imageSize > 2) {
        this.$toastr.w(
          'You can only upload images with maximum size of 2MB!',
          'This file type is not allowed'
        )
        return false
      }
      return true
    },
  },
}
</script>

<style>
.file-upload-wrapper {
  background-color: white;
  width: 400px;
  height: 100px;
  border: 2px dashed gray;
  text-align: center;
  border-radius: 10px;
}
@media screen and (max-width: 520px) {
  .file-upload-wrapper {
    width: 270px;
    height: 150px;
  }
}
/* .img-loading {
  height: 20px;
  margin-top: 1%;
  margin-left: 2%;
}
.uploaded-image {
  margin-bottom: 5px;
}
.uploaded-image img {
  border: 1px solid #0356ad;
  padding: 5px;
  border-radius: 10px;
  height: 115px;
}
.uploaded-image img:hover {
  transform: scale(1.8);
}
.change {
  /* position: absolute;
  right: 20px;
  top: 10px; */
/* z-index: 99;
  display: unset !important;
  position: relative;
  top: 8.2rem; */
/* } */
</style>
