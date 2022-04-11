import BaseTextField from '~/components/Base/BaseTextField.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('@/components/Base/BaseTextField.vue', () => {
  const localVue = createLocalVue()

  it('should render component and match snapshot', () => {
    const wrapper = shallowMount(BaseTextField, {
      localVue,
      propsData: {
        textLabel: 'email'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
