<template>
  <button
    :type="type"
    class="mb-5 px-6 py-3 h-12 w-full md:col-start-1 md:col-end-13 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    label: {
      type: String,
      default: 'Submit',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style></style>
