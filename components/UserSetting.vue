<template>
  <base-dialog
    :max-width="800"
    :dialog="settingsDialog"
  >
    <template #title>
      <div class="headline mt-n5">
        User Settings
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
  computed: {
    ...mapState('user', ['settingsDialog'])
  }
}
</script>

<style scoped>

</style>
