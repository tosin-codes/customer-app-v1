<template>
  <div>
    <div class="modal__content m-6 w-full lg:w-3/6 rounded-2xl shadow">
      <h3 class="modal__title px-4 py-5 text-orange-600 font-bold">
        Is this your car?
      </h3>
      <div class="px-4 py-5">
        <table class="modal__table table-striped">
          <tbody>
            <tr>
              <td>Year</td>
              <td>{{ summaryDetails.year }}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{{ summaryDetails.make }}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{{ summaryDetails.model }}</td>
            </tr>
            <tr>
              <td>Body Style</td>
              <td>{{ summaryDetails.size }}</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>{{ summaryDetails.car_insurance }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="mt-5 sm:mt-4 sm:flex justify-between items-center sm:flex-row-reverse"
        >
          <button
            type="button"
            @click.prevent="confirm"
            class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Yes, Submit
          </button>
          <button
            type="button"
            @click.prevent="reject"
            class="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-8 py-2 border border-solid border-orange-500 bg-gray text-base font-medium text-orange-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
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
      this.$emit('close-card')
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
  margin: 3% auto;
  border-radius: 5px;
  z-index: 100;
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
