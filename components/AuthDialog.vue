<template>
  <base-dialog
    :dialog="dialog"
    :max-width="420"
    @closeDialog="$emit('closeDialog')"
  >
    <template #title>
      <v-row class="mt-n6">
        <v-col>
          <v-row class="justify-center">
            <base-avatar
              image-alt="Logo"
              image-src="logo.PNG"
              avatar-class="mx-2"
            />
          </v-row>
          <v-row class="justify-center mt-6 mb-3">
            {{ actionName }}
          </v-row>
        </v-col>
      </v-row>
    </template>
    <template #content>
      <v-form
        :ref="formRef"
        @submit.prevent="$emit('submitContent')"
      >
        <slot name="text-fields" />
        <v-checkbox
          :data-test-id="checkboxDataTestId"
          color="#50C494FF"
          :label="checkboxLabel"
          class="mt-n2 mb-2"
          required
        />
        <template v-if="error.status">
          <base-alert
            v-for="(errorToShow, errorIndex) in error.error"
            :key="errorIndex"
            :is-outlined="false"
            alert-type="error"
            :alert-message="errorToShow"
            :is-dismissible="true"
          />
        </template>
        <base-button
          width="100%"
          color="white"
          class="white--text"
          :background-color="btnBackgroundColor"
          :data-test-id="dataTestId"
          :btn-id="actionBtnId"
          :btn-class="actionBtnClass"
          :action-ongoing="submissionOngoing"
          @submitContent="$emit('submitContent')"
        >
          <template #button-body>
            <button-progress
              :btn-action-name="actionName"
              :submission-ongoing="submissionOngoing"
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
import BaseAlert from '@/components/Base/BaseAlert'
import BaseDialog from '@/components/Base/BaseDialog'
import BaseButton from '@/components/Base/BaseButton'
import BaseAvatar from '@/components/Base/BaseAvatar'
import ButtonProgress from '@/components/Base/ButtonProgress'
export default {
  name: 'AuthDialog',
  components: {
    BaseAlert,
    BaseAvatar,
    BaseDialog,
    BaseButton,
    ButtonProgress
  },
  props: {
    dialog: {
      type: Boolean,
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
