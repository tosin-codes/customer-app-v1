<template>
  <div>
    <div class="w-full md:w-3/6 shadow">
      <h3 class="modal__title px-4 py-5 text-orange-600 font-bold">
        Is this your car?
      </h3>
      <div class="px-4 py-5">
        <table class="modal__table table-striped">
          <tbody>
            <tr>
              <td class="text-xs">Year</td>
              <td class="text-xs">{{ summaryDetails.year }}</td>
            </tr>
            <tr>
              <td class="text-xs">Make</td>
              <td class="text-xs">{{ summaryDetails.make }}</td>
            </tr>
            <tr>
              <td class="text-xs">Model</td>
              <td class="text-xs">{{ summaryDetails.model }}</td>
            </tr>
            <tr>
              <td class="text-xs">Body Style</td>
              <td class="text-xs">{{ summaryDetails.size }}</td>
            </tr>
            <tr>
              <td class="text-xs">Insurance</td>
              <td class="text-xs">{{ summaryDetails.car_insurance }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="mt-5 sm:mt-4 sm:flex justify-between items-center sm:flex-row-reverse"
        >
          <button
            type="button"
            @click.prevent="confirm"
            class="w-full inline-flex justify-center border border-transparent px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Yes, Submit
          </button>
          <button
            type="button"
            @click.prevent="reject"
            class="mt-3 w-full inline-flex justify-center px-8 py-2 border border-solid border-orange-500 bg-gray text-base font-medium text-orange-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    confirm() {
      this.$router.push('/offer')
    },
    reject() {
      this.$emit('closeCard')
    },
  },
  computed: {
    ...mapState('information', { summaryDetails: (state) => state }),
  },
}
</script>

<style scoped>
.modal__content {
  background-color: #fff;
  border-radius: 5px;
}

.modal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal__table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border: 1px solid #dee2e6;
}

.modal__table td {
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #dee2e6;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
