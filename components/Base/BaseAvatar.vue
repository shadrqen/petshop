<template>
  <v-avatar
    :class="avatarClass"
    :size="avatarSize"
    @click="$emit('clickAction')"
  >
    <img
      :src="require(`@/assets/${imageSrc}`)"
      :alt="imageAlt"
    >
  </v-avatar>
</template>

<script>
export default {
  name: 'BaseAvatar',
  props: {
    avatarSize: {
      type: Number,
      required: false,
      default: 50
    },
    avatarClass: {
      type: String,
      required: false,
      default: ''
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
