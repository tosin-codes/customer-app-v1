<template>
  <div class="grid grid-cols-12 maxWidth mx-auto">
    <client-only>
      <GeneralNav />
      <div class="my-container">
        <div class="mt-5">
          <div
            class="flex flex-row items-center mb-10 ml-3 md:ml-0 mt-10 md:mt-0"
          >
            <div>
              <img class="w-8 mr-4" src="../../assets/svg/kyc.svg" alt="" />
            </div>
            <div class="font-bold text-gray-700">KYC</div>
          </div>
          <div class="flex flex-col w-full bg-white py-4 px-4 md:px-4">
            <div>
              <div>
                <KycNumbers />
                <div
                  class="flex flex-row md:justify-end justify-center mb-12"
                  v-if="this.$store.getters.activeloan.status != 2"
                >
                  <div>
                    <button
                      @click.prevent="cancelLoan"
                      :disabled="disable"
                      :class="{ 'opacity-50 cursor-not-allowed': disable }"
                      class="flex justify-between bg-gray-200 hover:bg-orange-500 px-6 py-3 text-gray-600 hover:text-white focus:outline-none"
                    >
                      <svg
                        class="w-5 fill-current mr-3"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                      >
                        <path
                          d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z M61,256  c0-107.401,87.599-195,195-195c40.499,0,79.501,12.599,112.8,36.299L256,210.099L97.301,368.8C73.599,335.499,61,296.499,61,256z   M256,451c-40.499,0-79.501-12.601-112.8-36.301l271.5-271.5c23.701,33.3,36.3,72.3,36.3,112.801C451,363.399,363.401,451,256,451z"
                        />
                        <path
                          d="M512,256c0,140.7-115.3,256-256,256v-61c107.401,0,195-87.601,195-195  c0-40.501-12.599-79.501-36.301-112.8L256,301.899v-91.8l112.8-112.8C335.501,73.599,296.499,61,256,61V0C396.7,0,512,115.3,512,256  z"
                        />
                      </svg>
                      <div class="">Cancel this loan</div>
                    </button>
                  </div>
                </div>
              </div>
              <div v-if="activeloan.status == 2" class="slide-page">
                <RejectOffer />
              </div>
              <div
                v-if="
                  activeloan.status != 2 &&
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
                  activeloan.status != 2 &&
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
                  activeloan.status != 2 &&
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
                  activeloan.status != 2 &&
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
                <span v-if="disable" class="flex items-center mb-3">
                  <img src="../../assets/images/loading-sm.gif" alt="" />
                </span>
                <div v-if="this.$store.getters.activeloan.status == 1">
                  <VerifyOTP />
                </div>
                <div
                  v-if="this.$store.getters.activeloan.status == 4"
                  class="py-8 px-4 sm:px-10"
                >
                  <AwaitingVerificationMessage />
                </div>
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
import VerifyOTP from '~/components/messages/VerifyOTP'
import RejectOffer from '~/components/messages/RejectOffer'
import AwaitingVerificationMessage from '~/components/messages/AwaitingVerificationMessage'

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
    VerifyOTP,
    RejectOffer,
    AwaitingVerificationMessage,
  },
  data() {
    return {
      show: true,
      disable: false,
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
    async cancelLoan() {
      let vm = this
      const loan_id = this.$store.getters.activeloan.id
      vm.disable = true

      try {
        await this.$axios
          .get(`/loans/${loan_id}/decline`)

          .then((response) => {
            let loan = response.data.data

            this.$store.commit('setActiveLoanLevel', loan)
            vm.disable = false
            this.$noty.success('Successfully cancelled offer')
            return redirect('/kyc')
          })
      } catch (error) {
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
      }
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
