<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div class="flex flex-row items-center mb-10 ml-3 md:ml-0">
            <div>
              <img class="w-8 mr-4" src="../../assets/svg/kyc.svg" alt="" />
            </div>
            <div class="font-bold text-gray-700">KYC</div>
          </div>
          <div class="flex flex-col w-full bg-white py-4 px-4 md:px-4">
            <div>
              <KycNumbers />
              <div
                v-if="
                  activeloan.level.passed_bvn == false &&
                  activeloan.level.passed_document_upload == false &&
                  activeloan.level.passed_set_inspection_date == false &&
                  activeloan.level.passed_picture_upload == false
                "
                class="slide-page"
              >
                <Kyc1 @on-validate="slide" />
              </div>
              <div
                v-if="
                  activeloan.level.passed_bvn == true &&
                  activeloan.level.passed_document_upload == false &&
                  activeloan.level.passed_set_inspection_date == false &&
                  activeloan.level.passed_picture_upload == false
                "
                class="slide-page"
              >
                <Kyc2 @next="nextSlide" @back="previous" />
              </div>
              <div
                v-if="
                  activeloan.level.passed_bvn == true &&
                  activeloan.level.passed_document_upload == true &&
                  activeloan.level.passed_set_inspection_date == false &&
                  activeloan.level.passed_picture_upload == false
                "
                class="slide-page"
              >
                <Kyc3 @lastSlide="last" @prevSlide="previousSlide" />
              </div>
              <div
                v-if="
                  activeloan.level.passed_bvn == true &&
                  activeloan.level.passed_document_upload == true &&
                  activeloan.level.passed_set_inspection_date == true &&
                  activeloan.level.passed_picture_upload == false
                "
                class="slide-page"
              >
                <Kyc4 @showPrev="showPrevious" />
              </div>
              <div
                v-if="
                  activeloan.level.passed_bvn == true &&
                  activeloan.level.passed_document_upload == true &&
                  activeloan.level.passed_set_inspection_date == true &&
                  activeloan.level.passed_picture_upload == true
                "
                class="slide-page"
              >
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import GeneralNav from '~/components/GeneralNavbarComponent'
import { mapGetters } from 'vuex'
import KycNumbers from '../../components/kyc/KycNumbers'
import Kyc2 from '../../components/kyc/Kyc2'
import Kyc1 from '../../components/kyc/Kyc1'
import Kyc3 from '../../components/kyc/Kyc3'
import Kyc4 from '../../components/kyc/Kyc4'
import Message from '../../components/messages/AwaitingVerificationMessage'

export default {
  head() {
    return {
      title: 'KYC',
    }
  },
  transition: {
    name: 'fade',
  },
  components: {
    KycNumbers,
    Kyc1,
    Kyc2,
    Kyc3,
    Kyc4,
    GeneralNav,
    Message,
  },
  data() {
    return {
      show: true,
      showOne: false,
      showTwo: false,
      showThree: false,
    }
  },
  computed: {
    ...mapGetters(['activeloan']),
  },
  methods: {
    slide() {
      this.show = false
      this.showOne = true
    },
    previous() {
      this.show = true
      this.showOne = false
    },
    nextSlide() {
      console.log('next')
      this.showOne = false
      this.showTwo = true
    },
    last() {
      this.showTwo = false
      this.showThree = true
    },
    previousSlide() {
      this.showTwo = false
      this.showOne = true
    },
    showPrevious() {
      this.showTwo = true
      this.showThree = false
    },
  },
  validate({ store, redirect }) {
    if (!store.getters.user.active_loan.level) {
      return redirect('/create-loan')
    }
    return true
  },
  middleware: ['auth'],
}
</script>
<style scoped>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
</style>

<style>
.progress-bar {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
  width: 450px;
  margin-bottom: 40px;
  user-select: none;
}
.progress-bar .step {
  text-align: center;
}

.progress-bar .step .bullet {
  height: 35px;
  width: 35px;
  border: 2px solid orange;
  display: inline-block;
  border-radius: 50%;
  color: orange;
  position: relative;
  transition: background-color 500ms;
  line-height: 28px;
  z-index: 2;
}
.bullet .completed {
  color: #fff;
  background-color: orange;
}
.bullet::after {
  content: '';
  position: absolute;
  right: -100px;
  bottom: 10px;
  height: 3px;
  width: 94px;
  background-color: orange;
  z-index: 1;
}

.progress-bar .step:last-child .bullet:before,
.progress-bar .step:last-child .bullet:after {
  display: none;
}

input {
  width: 100%;
}
@media screen and (max-width: 520px) {
  .progress-bar {
    width: 300px;
  }
  .bullet::after {
    content: '';
    position: absolute;
    right: -62px;
    bottom: 10px;
    height: 3px;
    width: 57px;
    background-color: orange;
  }
}
</style>
