<template>
  <div class="flex flex-col">
    <!-- <h6>click to upload.</h6> -->
    <div class="wrapper">
      <div class="uploaded-image" v-if="avatar">
        <img :src="avatar" />
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="cursor-pointer icon"
          @click.prevent="reset"
        />
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
    reset() {
      // reset form to initial state
      console.log('clicked')
      this.file = null
      this.avatar = ''
    },
  },
}
</script>

<style>
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
.file-upload-wrapper {
  background-color: white;
  width: 270px;
  height: 100px;

  text-align: center;
  border-radius: 10px;
}
.img-loading {
  height: 20px;
  margin-top: 1%;
  margin-left: 2%;
}
.uploaded-image {
  position: absolute;
  margin-bottom: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.uploaded-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 1px solid #0356ad; */
  z-index: 100;
  padding: 5px;
  border-radius: 10px;

  /* height: 115px; */
}
.uploaded-image .icon {
  position: absolute;
  top: 0;
  z-index: 300;
  right: 10px;
  margin-top: 5px;
  font-size: 20px;
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
