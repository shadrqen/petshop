import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import BaseDialog from '~/components/Base/BaseDialog.vue'
import { BaseDialogProps } from '~/test/types'

Vue.use(Vuetify)

describe('@/components/Base/BaseDialog.vue', () => {
  const dialogProps = (): BaseDialogProps => ({
    dialog: true,
    maxWidth: 400
  })

  it('Renders dialog header', async () => {
    const slotContent = 'Login'
    const { element } = shallowMount(BaseDialog, {
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
    const { element } = shallowMount(BaseDialog, {
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
    const { element } = shallowMount(BaseDialog, {
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
