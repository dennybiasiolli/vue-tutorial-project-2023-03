import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import TodoUtility from '@/components/todo/TodoUtility.vue'

function myShallowMount() {
  return shallowMount(TodoUtility, {
    global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          todo: {
            items: [
              { id: 1, text: 'item 1', completed: false },
              { id: 2, text: 'item 2', completed: false },          
              { id: 3, text: 'item 3', completed: true },          
            ]
          },
        },
      })],
    },
  })
}

it('should render as expected', () => {
  const wrapper = myShallowMount()
  expect(wrapper.html()).toMatchSnapshot()
})
