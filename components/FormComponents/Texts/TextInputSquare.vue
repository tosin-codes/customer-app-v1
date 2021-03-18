<template>
  <div>
    <div>
      <input
        class="rounded-md border-gray-300 border-2 mt-2 h-12 w-full outline-none pl-4"
        :value="value"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        throw new Error('No form field name specified.')
      },
    },
    type: {
      type: String,
      default() {
        throw new Error('No form field type specified.')
      },
    },
    value: {
      type: [String, Boolean, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    data: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
