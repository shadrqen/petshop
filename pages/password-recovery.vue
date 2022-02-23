<template>
  <base-password-recovery
    action-content="Get Recovery Link"
    :recovery-sub-title="recoverySubTitle"
    recovery-title="Recover password"
  >
    <template #text-fields>
      <v-text-field
        id="email"
        class="mt-6"
        data-test-id="user-email-field"
        label="Email Address *"
        outlined
      />
    </template>
  </base-password-recovery>
</template>

<script>
import BasePasswordRecovery from '@/components/Base/BasePasswordRecovery'
export default {
  name: 'PasswordRecovery',
  components: {
    BasePasswordRecovery
  },
  data () {
    return {
      attrs: {
        cols: 12,
        xl: 4,
        'offset-xl': 4,
        lg: 4,
        'offset-lg': 4,
        md: 6,
        'offset-md': 3,
        sm: 8,
        'offset-sm': 2
      },
      recoverySubTitle: 'Enter email associated with your account and we\'ll send an email with instructions\n' +
        ' to reset your password.'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
