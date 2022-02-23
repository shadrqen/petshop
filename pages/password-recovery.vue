<template>
  <base-password-recovery
    action-content="Get Recovery Link"
    :recovery-sub-title="recoverySubTitle"
    recovery-title="Recover password"
  >
    <template #text-fields>
      <base-text-field
        text-label="Email Address *"
        text-id="email-address"
        text-data-test-id="email-address-field"
        text-class="mt-6"
        :outlined="true"
      />
    </template>
  </base-password-recovery>
</template>

<script>
import BasePasswordRecovery from '@/components/Base/BasePasswordRecovery'
import BaseTextField from '@/components/Base/BaseTextField'
export default {
  name: 'PasswordRecovery',
  components: {
    BasePasswordRecovery,
    BaseTextField
  },
  data () {
    return {
      recoverySubTitle: 'Enter email associated with your account and we\'ll send an email with instructions\n' +
        ' to reset your password.'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
