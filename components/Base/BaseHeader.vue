<template>
  <v-toolbar
    :color="headerColor"
    class="elevation-0"
  >
    <v-toolbar-title class="white--text">
      <v-avatar
        size="25"
      >
        <img
          :src="require('@/assets/headerIcon.PNG')"
          alt="Logo"
        >
      </v-avatar>
      petson
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      text
      class="white--text"
    >
      Products
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn
      text
      class="white--text"
    >
      Promotions
    </v-btn>
    <v-spacer />
    <v-btn
      class="white--text mx-1"
      outlined
    >
      Cart ({{ cartItemsCount }})
    </v-btn>
    <client-only>
      <v-btn
        class="white--text mx-1"
        outlined
        v-text="'Logout'"
      />
      <v-btn
        class="white--text mx-1"
        outlined
        v-text="'Login'"
      />

      <v-avatar
        class="mx-2"
        size="35"
      >
        <img
          :src="require('@/assets/profile.jpg')"
          alt="User Profile"
        >
      </v-avatar>
    </client-only>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BaseHeader',
  data () {
    return {
      cartItemsCount: 0,
      headerColor: '#50c494'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
