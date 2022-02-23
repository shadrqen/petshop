<template>
  <div>
    <v-toolbar
      :color="headerColor"
      class="elevation-0"
    >
      <router-link
        to="/"
        class="text-decoration-none white--text"
      >
        <v-avatar
          size="25"
        >
          <img
            :src="require('@/assets/headerIcon.PNG')"
            alt="Logo"
          >
        </v-avatar>
        petson
      </router-link>
      <v-spacer />
      <base-button
        :text="true"
        btn-class="white--text"
      >
        <template #button-body>
          Products
          <v-icon>mdi-chevron-down</v-icon>
        </template>
      </base-button>
      <base-button
        :text="true"
        btn-class="white--text"
      >
        <template #button-body>
          Promotions
        </template>
      </base-button>
      <v-spacer />
      <base-button
        :outlined="true"
        btn-class="white--text"
      >
        <template #button-body>
          Cart ({{ cartItemsCount }})
        </template>
      </base-button>
      <client-only>
        <base-button
          btn-class="white--text mx-1"
          :outlined="true"
        >
          <template #button-body>
            Logout
          </template>
        </base-button>
        <base-button
          btn-class="white--text mx-1"
          :outlined="true"
          :submit-content="openLoginDialog(true)"
        >
          <template #button-body>
            Login
          </template>
        </base-button>
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
    <login-dialog v-model="loginDialog" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BaseButton from '@/components/Base/BaseButton'
import LoginDialog from '@/components/LoginDialog'
import { AuthMutations } from '@/store/user/mutations'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton,
    LoginDialog
  },
  data () {
    return {
      cartItemsCount: 0,
      headerColor: '#50c494',
      loginDialog: false
    }
  },
  methods: {
    ...mapMutations({ openLoginDialog: AuthMutations.SET_USER_IS_LOGGED_IN })
  }
}
</script>

<style lang="scss" scoped>
</style>
