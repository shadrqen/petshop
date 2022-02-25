<template>
  <a
    :class="linkClass"
    @click="$emit('linkAction')"
  >
    {{ linkBody }}
  </a>
</template>

<script>
export default {
  name: 'BaseHyperlink',
  props: {
    linkClass: {
      type: String,
      required: false,
      default: ''
    },
    linkBody: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
