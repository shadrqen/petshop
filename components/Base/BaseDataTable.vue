<template>
  <v-card :class="cardClass">
    <v-card-title class="text-subtitle-1">
      <slot name="table-sub-title" />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
    >
      <template #[`item.status`]="{ item }">
        <v-chip
          small
          :color="item.chipColor"
          text-color="white"
        >
          {{ item.status }}
        </v-chip>
      </template>
      <template #[`item.invoice`]>
        <base-button :x-small="true">
          <template #button-body>
            <v-icon>mdi-tray-arrow-down</v-icon>
          </template>
        </base-button>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'BaseDataTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    cardClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
