<template>
  <v-btn
    :id="btnId"
    :data-test-id="dataTestId"
    :disabled="actionOngoing"
    :outlined="outlined"
    :text="text"
    :class="btnClass"
    :style="btnStyles"
    @click.prevent="submitContent"
  >
    <slot name="button-body" />
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    btnId: {
      type: String,
      required: false,
      default: ''
    },
    btnClass: {
      type: String,
      required: false,
      default: ''
    },
    dataTestId: {
      type: String,
      required: false,
      default: ''
    },
    actionOngoing: {
      type: Boolean,
      required: false,
      default: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: Boolean,
      required: false,
      default: false
    },
    submitContent: {
      type: Function,
      required: false,
      default: () => {}
    },
    width: {
      type: String,
      required: false,
      default: 'auto'
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    backgroundColor: {
      type: String,
      required: false,
      default: ''
    },
    textTransform: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    btnStyles () {
      return {
        width: this.width,
        color: this.width,
        'background-color': this.backgroundColor,
        'text-transform': this.textTransform
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
