<template>
  <v-row
    no-gutters
  >
    <v-col
      cols="12"
      sm="3"
    >
      <base-avatar
        image-alt="Profile"
        image-src="profile.jpg"
        :avatar-size="100"
      />
    </v-col>
    <v-col>
      <v-divider vertical />
    </v-col>
    <v-col
      cols="12"
      sm="9"
    >
      <v-row no-gutters>
        <v-col
          v-for="(detail, index) in userDetails"
          :key="index"
          cols="4"
        >
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle v-text="detail.key" />
                <v-list-item-content
                  v-text="detail.value"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BaseAvatar from '@/components/Base/BaseAvatar'
export default {
  name: 'UserDetails',
  components: {
    BaseAvatar
  },
  data () {
    return {
      userDetails: [
        {
          key: 'Name',
          value: 'John Rollingston'
        },
        {
          key: 'Phone number',
          value: '(559) 979-6096'
        },
        {
          key: 'Address',
          value: '1285 Fallen Pioneer Heights, Dallas, TX'
        },
        {
          key: 'Date joined',
          value: '14. 9. 2020.'
        },
        {
          key: 'Email',
          value: 'j.sharp@hotmail.com'
        },
        {
          key: 'Marketing preferences',
          value: 'No'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
