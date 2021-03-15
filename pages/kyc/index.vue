<template>
  <div class="my-container">
    <div class="">
      <div class="flex flex-row items-center mb-10">
        <div><img class="w-8 mr-4" src="../../assets/svg/kyc.svg" alt=""></div>
        <div class="font-bold text-gray-700">KYC</div>
      </div>
      <div class="bg-white rounded-xl p-1 md:p-6">
        <div>
          <vue-good-wizard 
            :steps="steps"
            :onNext="nextClicked" 
            :onBack="backClicked">
            <div slot="page1">
              <Kyc1 />
            </div>
            <div slot="page2">
              <Kyc2 />
            </div>
            <div slot="page3">
              <Kyc3 />
            </div>
            <div slot="page4">
              <Kyc4 />
            </div>
          </vue-good-wizard>
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
    Kyc4
  },
  data(){
    return {
      steps: [
        {
          label: 'Account Details',
          slot: 'page1',
        },
        {
          label: 'Vehicle Documents',
          slot: 'page2',
        },
        {
          label: 'Inspection Date',
          slot: 'page3',
        },
        {
          label: 'Take Selfie',
          slot: 'page4',
        }
      ],
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  },
}
</script>

<style>
input {
  @apply py-4 outline-none rounded-full pl-6
}
input:focus {
  @apply border-2 border-gray-200
}
</style>
