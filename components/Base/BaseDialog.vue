<template>
  <v-dialog
    :value="dialog"
    :fullscreen="screenIsXL"
    eager
    :max-width="maxWidth"
    persistent
  >
    <v-card>
      <v-toolbar
        flat
        short
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            @click="$emit('closeDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title class="justify-center">
        <slot name="title" />
      </v-card-title>
      <v-card-text>
        <slot name="content" />
      </v-card-text>
      <v-card-actions>
        <slot name="action-buttons" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'BaseDialog',
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    maxWidth: {
      type: Number,
      required: true
    }
  },
  computed: {
    screenIsXL () {
      return this.$vuetify.breakpoint.name === 'xs'
    }
  }
}
</script>

<style scoped>
</style>
