import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseDialog from '~/components/Base/BaseDialog.vue'
import { BaseDialogProps, ComponentMount } from '~/test/types'

describe('@/components/Base/BaseDialog.vue', () => {
  const localVue = createLocalVue()

  const mountComponent = (options: ComponentMount = {}) => {
    return shallowMount(BaseDialog, {
      localVue,
      ...options
    })
  }

  const dialogProps = (): BaseDialogProps => ({
    dialog: true,
    maxWidth: 400
  })

  it('Renders dialog header', async () => {
    const slotContent = 'Login'
    const { element } = mountComponent({
      propsData: {
        ...dialogProps()
      },
      slots: {
        title: slotContent
      }
    })

    expect(element.innerHTML).toContain(slotContent)
  })

  it('Renders dialog content', async () => {
    const slotContent = '<div>This is my dialog content</div>'
    const { element } = mountComponent({
      propsData: {
        ...dialogProps()
      },
      slots: {
        content: slotContent
      }
    })

    expect(element.innerHTML).toContain(slotContent)
  })

  it('Renders dialog action buttons', async () => {
    const slotContent = '<button>Continue</button>'
    const { element } = mountComponent({
      propsData: {
        ...dialogProps()
      },
      slots: {
        'action-buttons': slotContent
      }
    })

    expect(element.innerHTML).toContain(slotContent)
  })
})
