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
import BaseHeader from '../components/App/AppHeader'
import BaseFooter from '@/components/App/AppFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
