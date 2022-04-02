<template>
  <div
    v-if="submissionOngoing"
    class="lds-ellipsis"
    data-test="lds-ellipsis"
  >
    <div />
    <div />
    <div />
    <div />
  </div>
  <span
    v-else
    class="text-button"
    v-text="btnActionName"
  />
</template>

<script>
export default {
  name: 'ButtonProgress',
  props: {
    submissionOngoing: {
      type: Boolean,
      required: true
    },
    btnActionName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/ellipsis";
</style>
