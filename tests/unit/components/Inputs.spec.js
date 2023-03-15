import { shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Inputs from '@/components/Inputs.vue'

it('renders as expected', () => {
  const wrapper = shallowMount(Inputs)
  expect(wrapper.html()).toMatchSnapshot()
})
