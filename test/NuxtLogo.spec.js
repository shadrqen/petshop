import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

// eslint-disable-next-line no-undef
describe('NuxtLogo', () => {
  // eslint-disable-next-line no-undef
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    // eslint-disable-next-line no-undef
    expect(wrapper.vm).toBeTruthy()
  })
})
