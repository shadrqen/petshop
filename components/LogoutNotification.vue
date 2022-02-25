<template>
  <base-dialog
    :max-width="400"
    :dialog="logoutDialog"
    :top-close-button="false"
  >
    <template #content>
      <div class="text-h6 mb-4">
        Do you want to proceed to log out?
      </div>
      <v-divider />
    </template>
    <template #action-buttons>
      <base-button
        width="30%"
        color="white"
        btn-class="white--text"
        background-color="#50C494FF"
        btn-id="decline-logout-btn"
        @submitContent="openCloseDialogs('logout')"
      >
        <template #button-body>
          No
        </template>
      </base-button>
      <v-spacer />
      <base-button
        width="30%"
        color="#50C494FF"
        :outlined="true"
        background-color="white"
        btn-id="accept-logout-btn"
        @submitContent="logoutUser"
      >
        <template #button-body>
          Yes
        </template>
      </base-button>
    </template>
  </base-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BaseButton from '@/components/Base/BaseButton'
import BaseDialog from '@/components/Base/BaseDialog'
import DialogsMixin from '@/mixins/DialogsMixin'

export default {
  name: 'LogoutNotification',
  components: {
    BaseButton,
    BaseDialog
  },
  mixins: [DialogsMixin],
  computed: {
    ...mapState('auth', ['logoutDialog'])
  },
  methods: {
    ...mapMutations('auth', ['RESET_AUTH_STATE']),
    ...mapMutations('user', ['RESET_USER_STATE']),
    logoutUser () {
      this.RESET_AUTH_STATE()
      this.RESET_USER_STATE()
      this.openCloseDialogs('logout')
    }
  }
}
</script>

<style scoped>

</style>
