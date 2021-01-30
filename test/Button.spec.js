import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo/Nuxt.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
