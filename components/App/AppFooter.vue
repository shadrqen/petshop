<template>
  <v-footer
    :color="footerColor"
    class="py-16"
  >
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          <img
            height="80"
            :src="require('@/assets/footer.png')"
            alt="Logo"
          >
        </v-col>
        <v-col
          v-for="(footerRow, index) in footerItems"
          :key="index"
        >
          <div
            v-for="(footerItem, innerIndex) in footerRow"
            :key="innerIndex"
            :class="footerItem.primary ? 'subtitle-1 font-weight-bold mx-4' : 'body-2 mx-4'"
          >
            {{ footerItem.name }}
          </div>
        </v-col>
        <v-col
          class="my-3 body-2"
        >
          If you can't find answer to your question, please contact our <a
            id="customer-service-footer-span"
            class="text-decoration-none"
          >customer service</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'BaseFooter',
  data () {
    return {
      footerItems: [
        [
          {
            name: 'Petson',
            primary: true
          },
          {
            name: 'About us',
            primary: false
          },
          {
            name: 'Blog',
            primary: false
          },
          {
            name: 'Store locator',
            primary: false
          }
        ],
        [
          {
            name: 'Contact',
            primary: true
          },
          {
            name: 'contact@petson.com',
            primary: false
          },
          {
            name: '+385 000 000',
            primary: false
          },
          {
            name: '35 Shnauzer avenue, Dogville AL',
            primary: false
          }
        ],
        [
          {
            name: 'Information',
            primary: true
          },
          {
            name: 'Ordering and shipping',
            primary: false
          },
          {
            name: 'FAQ',
            primary: false
          },
          {
            name: 'GDPR statement',
            primary: false
          }
        ]
      ],
      attrs: {
        xs: 12,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      },
      footerColor: '#edf5f1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
