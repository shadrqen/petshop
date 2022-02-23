<template>
  <v-text-field
    :id="textId"
    :class="textClass"
    :data-test-id="textDataTestId"
    :label="textLabel"
    :outlined="outlined"
    :rules="textRule"
    :prepend-icon="prependIcon"
    :single-line="singleLine"
    :hide-details="hideDetails"
    :solo="solo"
    @input="$emit('input', $event)"
  />
</template>
<script>
export default {
  name: 'BaseTextField',
  props: {
    textId: {
      type: String,
      required: false,
      default: ''
    },
    textClass: {
      type: String,
      required: false,
      default: ''
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    textLabel: {
      type: String,
      required: true
    },
    textDataTestId: {
      type: String,
      required: false,
      default: ''
    },
    prependIcon: {
      type: String,
      required: false,
      default: ''
    },
    singleLine: {
      type: Boolean,
      required: false,
      default: false
    },
    hideDetails: {
      type: Boolean,
      required: false,
      default: false
    },
    solo: {
      type: Boolean,
      required: false,
      default: false
    },
    textRule: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
