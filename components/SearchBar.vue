<template>
  <v-text-field
    v-model="search"
    prepend-icon="mdi-magnify"
    label="Search products"
    single-line
    hide-details
    solo
  />
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>
