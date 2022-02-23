<template>
  <base-text-field
    v-model="search"
    text-label="Search products"
    prepend-icon="mdi-magnify"
    :solo="true"
    :single-line="true"
    :hide-details="true"
  />
</template>

<script>
import BaseTextField from '@/components/Base/BaseTextField'
export default {
  name: 'SearchBar',
  components: {
    BaseTextField
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
</style>
