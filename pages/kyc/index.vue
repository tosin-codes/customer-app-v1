<template>
  <div class="my-container">
    <div class="">
      <div class="flex flex-row items-center mb-10">
        <div>
          <img class="w-8 mr-4" src="../../assets/svg/kyc.svg" alt="" />
        </div>
        <div class="font-bold text-gray-700">KYC</div>
      </div>
      <div class="bg-white rounded-xl p-1 md:p-6">
        <div id="app">
          <div>
            <div class="progress-bar">
              <div class="step pt-6">
                <div class="bullet h-6 w-6">
                  <span>1</span>
                </div>
              </div>
              <div class="step pt-6">
                <div class="bullet">
                  <span>2</span>
                </div>
              </div>
              <div class="step pt-6">
                <div class="bullet">
                  <span>3</span>
                </div>
              </div>
              <div class="step pt-6">
                <div class="bullet">
                  <span>4</span>
                </div>
              </div>
            </div>
            <div v-if="show" class="slide-page">
              <Kyc1 @on-validate="slide" />
            </div>
            <div v-if="showOne" class="slide-page">
              <Kyc2 @next="nextSlide" @back="previous" />
            </div>
            <div v-if="showTwo" class="slide-page">
              <Kyc3 @lastSlide="last" @prevSlide="previousSlide" />
            </div>
            <div v-if="showThree" class="slide-page">
              <Kyc4 @showPrev="showPrevious" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KycNumbers from '../../components/KycNumbers'
import Kyc2 from '../../components/Kyc2'
import Kyc1 from '../../components/Kyc1'
import Kyc3 from '../../components/Kyc3'
import Kyc4 from '../../components/Kyc4'

export default {
  components: {
    KycNumbers,
    Kyc2,
    Kyc1,
    Kyc3,
    Kyc4,
    Kyc1,
  },
  data() {
    return {
      show: true,
      showOne: false,
      showTwo: false,
      showThree: false,
    }
  },
  methods: {
    slide() {
      this.show = false
      this.showOne = true

      if ((this.showOne = true)) {
        let currentStep = 1
        const bullets = [...document.querySelectorAll('.bullet')]

        bullets[currentStep - 1].classList.add('completed')
        currentStep += 1
      }
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
}
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6;
}
input:focus {
  @apply border-2 border-gray-200;
}
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
