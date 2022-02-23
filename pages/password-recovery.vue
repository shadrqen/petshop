<template>
  <v-row>
    <v-col v-bind="attrs">
      <v-card
        flat
      >
        <v-card-title class="justify-center mt-5">
          Recover password
        </v-card-title>
        <v-card-text>
          Enter email associated with your account and we'll send an email with instructions
          to reset your password.
          <v-text-field
            id="email"
            class="mt-6"
            data-test-id="user-email-field"
            label="Email Address *"
            outlined
          />
          <base-button>
            <template #button-body>
              Get Recovery Link
            </template>
          </base-button>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton'
export default {
  name: 'PasswordRecovery',
  components: {
    BaseButton
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
