<template>
  <base-password-recovery
    action-content="Change Password"
    :recovery-sub-title="recoverySubTitle"
    recovery-title="Change password"
  >
    <template #text-fields>
      <base-text-field
        text-label="New password"
        text-id="password"
        text-data-test-id="change-password-field"
        text-class="mt-6"
        :text-type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :outlined="true"
        @clickAppendIcon="showPassword = !showPassword"
      />
      <base-text-field
        text-label="Re-enter your new password"
        text-id="re-enter-password"
        text-data-test-id="change-password-confirm-field"
        text-class="mt-6"
        :text-type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :outlined="true"
        @clickAppendIcon="showPassword = !showPassword"
      />
    </template>
  </base-password-recovery>
</template>

<script>
import BasePasswordRecovery from '@/components/Base/BasePasswordRecovery'
import BaseTextField from '@/components/Base/BaseTextField'
export default {
  name: 'ChangePassword',
  components: {
    BasePasswordRecovery,
    BaseTextField
  },
  data () {
    return {
      recoverySubTitle: 'Your new password must be different from previous passwords',
      showPassword: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
