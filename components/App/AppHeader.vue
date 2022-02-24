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
        <template v-if="userLoggedIn">
          <base-button
            btn-class="white--text mx-1"
            :outlined="true"
            @submitContent="openCloseLoginDialog(false)"
          >
            <template #button-body>
              Logout
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
        </template>
        <template v-else>
          <base-button
            btn-class="white--text mx-1"
            :outlined="true"
            @submitContent="openCloseDialogs('login', 'open')"
          >
            <template #button-body>
              Login
            </template>
          </base-button>
        </template>
      </client-only>
    </v-toolbar>
    <login-dialog />
    <registration-dialog />
    <user-setting />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from '@/components/Base/BaseButton'
import LoginDialog from '@/components/LoginDialog'
import RegistrationDialog from '@/components/RegistrationDialog'
import UserSetting from '@/components/UserSetting'
import AuthenticationMixin from '@/mixins/AuthenticationMixin'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton,
    LoginDialog,
    RegistrationDialog,
    UserSetting
  },
  mixins: [AuthenticationMixin],
  data () {
    return {
      cartItemsCount: 0,
      headerColor: '#50c494'
    }
  },
  computed: {
    ...mapState('auth', ['userLoggedIn'])
  }
}
</script>

<style lang="scss" scoped>
</style>
