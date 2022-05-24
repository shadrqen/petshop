import { createLocalVue, shallowMount } from '@vue/test-utils'
import AuthDialog from '~/components/Auth/AuthDialog.vue'

describe('~/components/Auth/AuthDialog.vue', () => {
  const localVue = createLocalVue()

  it('should render component and match snapshot', () => {
    const { element } = shallowMount(AuthDialog, {
      localVue,
      propsData: {
        dialog: true,
        dataTestId: 'someId',
        formRef: 'someRef',
        actionName: 'someAction',
        checkboxLabel: 'someLabel',
        checkboxDataTestId: 'someDataId',
        submissionOngoing: false,
        error: {
          status: false
        }
      }
    })

    expect(element.innerHTML).toMatchSnapshot()
  })
})
