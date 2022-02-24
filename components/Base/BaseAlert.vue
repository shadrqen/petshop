<template>
  <v-alert
    :type="alertType"
    :outlined="isOutlined"
    :dismissible="isDismissible"
  >
    {{ alertMessage }}
  </v-alert>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    alertType: {
      type: String,
      required: true
    },
    alertMessage: {
      type: String,
      required: true
    },
    isOutlined: {
      type: Boolean,
      required: true,
      default: false
    },
    isDismissible: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
