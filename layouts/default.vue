<template>
  <v-app>
    <header>
      Header
    </header>
    <v-main>
      <router-view />
    </v-main>
    <footer>
      Footer
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
