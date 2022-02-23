<template>
  <v-text-field
    :id="textId"
    :class="textClass"
    :data-test-id="textDataTestId"
    :label="textLabel"
    :outlined="outlined"
    :rules="textRule"
    @input="$emit('input', $event.target.value)"
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
    textRule: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
