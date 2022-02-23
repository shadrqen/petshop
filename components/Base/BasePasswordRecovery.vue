<template>
  <v-row>
    <v-col v-bind="attrs">
      <v-card
        flat
      >
        <v-card-title
          class="justify-center mt-5"
          v-text="recoveryTitle"
        />
        <v-card-text>
          {{ recoverySubTitle }}
          <slot name="text-fields" />
          <base-button>
            <template #button-body>
              {{ actionContent }}
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
  props: {
    recoveryTitle: {
      type: String,
      required: true
    },
    recoverySubTitle: {
      type: String,
      required: true
    },
    actionContent: {
      type: String,
      required: true
    }
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
