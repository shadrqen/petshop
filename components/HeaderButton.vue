<template>
  <base-button
    :text="true"
    btn-class="white--text mx-1"
  >
    <slot name="button-body" />
  </base-button>
</template>
<script>
import BaseButton from '@/components/Base/BaseButton'
export default {
  name: 'HeaderButton',
  components: {
    BaseButton
  }
}
</script>

<style scoped></style>
