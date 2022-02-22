<template>
  <v-app>
    <header>
      Header
    </header>
    <v-main>
      <router-view />
    </v-main>
    <footer>
      <BaseFooter />
    </footer>
  </v-app>
</template>

<script>
import BaseFooter from '~/components/Base/BaseFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseFooter
  }
}
</script>
