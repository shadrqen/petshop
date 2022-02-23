<template>
  <base-dialog
    :dialog="dialog"
    :close-dialog="closeDialog"
    :max-width="420"
  >
    <template #title>
      <v-avatar>
        <img
          :src="require('@/assets/logo.PNG')"
          alt="Logo"
        >
      </v-avatar>
    </template>
    <template #content>
      <v-form
        :ref="formRef"
        @submit.prevent="submitContent"
      >
        <slot name="text-fields" />
        <v-checkbox
          :data-test-id="checkboxDataTestId"
          color="#50C494FF"
          :label="checkboxLabel"
          class="mt-n2 mb-2"
          required
        />
        <base-button
          width="100%"
          color="white"
          class="white--text"
          :background-color="btnBackgroundColor"
          :data-test-id="dataTestId"
          :btn-id="actionBtnId"
          :btn-class="actionBtnClass"
          :action-ongoing="submissionOngoing"
          :submit-content="submitContent"
        >
          <template #button-body>
            <div
              v-if="submissionOngoing"
              class="lds-ellipsis"
            >
              <div />
              <div />
              <div />
              <div />
            </div>
            <span
              v-else
              class="text-button"
              v-text="actionName"
            />
          </template>
        </base-button>
      </v-form>
    </template>
    <template #action-buttons>
      <slot name="action-buttons" />
    </template>
  </base-dialog>
</template>

<script>
import BaseDialog from '@/components/Base/BaseDialog'
import BaseButton from '@/components/Base/BaseButton'
export default {
  name: 'AuthDialog',
  components: {
    BaseDialog,
    BaseButton
  },
  props: {
    closeDialog: {
      type: Function,
      required: true
    },
    dialog: {
      type: Boolean,
      required: true
    },
    submitContent: {
      type: Function,
      required: true
    },
    dataTestId: {
      type: String,
      required: true
    },
    actionBtnId: {
      type: String,
      required: false,
      default: ''
    },
    actionBtnClass: {
      type: String,
      required: false,
      default: ''
    },
    formRef: {
      type: String,
      required: true
    },
    actionName: {
      type: String,
      required: true
    },
    submissionOngoing: {
      type: Boolean,
      required: true,
      default: false
    },
    checkboxLabel: {
      type: String,
      required: true
    },
    checkboxDataTestId: {
      type: String,
      required: true
    },
    error: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      btnBackgroundColor: '#50c494'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
