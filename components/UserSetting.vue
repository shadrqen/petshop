<template>
  <base-dialog
    :max-width="1000"
    :dialog="settingsDialog"
    @closeDialog="openCloseDialogs('settings')"
  >
    <template #title>
      <div class="headline mt-n5">
        User settings
      </div>
    </template>
    <template #content>
      <user-detail />
      <latest-order />
    </template>
  </base-dialog>
</template>

<script>
import { mapState } from 'vuex'
import DialogsMixin from '@/mixins/DialogsMixin'
import BaseDialog from '@/components/Base/BaseDialog'
import LatestOrder from '@/components/LatestOrder'
import UserDetail from '@/components/UserDetail'
export default {
  name: 'UserSetting',
  components: {
    BaseDialog,
    LatestOrder,
    UserDetail
  },
  mixins: [DialogsMixin],
  computed: {
    ...mapState('user', ['settingsDialog'])
  }
}
</script>

<style scoped>

</style>
