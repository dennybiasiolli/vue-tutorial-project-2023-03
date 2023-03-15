import { shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import TodoItem from '@/components/todo/TodoItem.vue'

it('should render as expected', () => {
  const wrapper = shallowMount(TodoItem, {
    props: {
      text: 'farina',
      completed: false,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.setProps({
    completed: true,
  })
  wrapper.vm.$nextTick()
  expect(wrapper.html()).toMatchSnapshot()
})

it('should emit an event', () => {
  const wrapper = shallowMount(TodoItem, {
    props: {
      text: 'farina',
      completed: false,
    },
  })
  wrapper.find('input').trigger('change')
  expect(wrapper.emitted('todoChange'))
})
