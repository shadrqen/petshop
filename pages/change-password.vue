<template>
  <base-password-recovery
    action-content="Change Password"
    :recovery-sub-title="recoverySubTitle"
    recovery-title="Change password"
  >
    <template #text-fields>
      <v-text-field
        id="password"
        class="mt-6"
        data-test-id="user-email-field"
        label="New password"
        outlined
      />
      <v-text-field
        id="email"
        class="mt-6"
        data-test-id="user-email-field"
        label="Re-enter your new password"
        outlined
      />
    </template>
  </base-password-recovery>
</template>

<script>
import BasePasswordRecovery from '@/components/Base/BasePasswordRecovery'
export default {
  name: 'ChangePassword',
  components: {
    BasePasswordRecovery
  },
  data () {
    return {
      recoverySubTitle: 'Your new password must be different from previous passwords'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
