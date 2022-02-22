<template>
  <v-app>
    <header>
      <BaseHeader />
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
import BaseHeader from '../components/Base/BaseHeader'
import BaseFooter from '~/components/Base/BaseFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
