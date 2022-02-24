<template>
  <base-data-table
    :items="latestOrders"
    :items-per-page="itemsPerPage"
    :headers="headers"
    card-class="mt-10"
  >
    <template #table-sub-title>
      Latest orders
    </template>
  </base-data-table>
</template>

<script>
import BaseDataTable from '@/components/Base/BaseDataTable'
export default {
  name: 'LatestOrder',
  components: {
    BaseDataTable
  },
  data () {
    return {
      headers: [
        {
          text: 'Order UUID',
          align: 'start',
          sortable: false,
          value: 'uuid'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Download Invoice',
          align: 'center',
          value: 'invoice'
        }
      ],
      latestOrders: [
        {
          uuid: '3298432984434-2345s0-sdfsdfsfsdfs',
          status: 'Open',
          chipColor: 'primary'
        },
        {
          uuid: '209348230949-23324-3j423-sdfssdfs',
          status: 'Pending payment',
          chipColor: 'orange'
        },
        {
          uuid: '3298432984434-2345s0-sdfsdffsdfsd',
          status: 'Paid',
          chipColor: 'green lighten-1'
        },
        {
          uuid: '083239823432-43500-23hd73-sdsdfjs',
          status: 'Shipped',
          chipColor: 'green darken-3'
        },
        {
          uuid: '083453454562-34553-34s723-ssdces',
          status: 'Cancelled',
          chipColor: ''
        }
      ],
      itemsPerPage: 5
    }
  }
}
</script>

<style scoped>

</style>
