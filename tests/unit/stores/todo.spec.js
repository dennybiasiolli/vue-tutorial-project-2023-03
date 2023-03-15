import { setActivePinia, createPinia } from 'pinia'
import { expect, it, beforeEach, vi } from 'vitest'
import * as todoService from '@/services/todo'
import { useTodoStore } from '@/stores/todo'

vi.mock('@/services/todo', () => ({
  getTodos: vi.fn(),
  addTodo: vi.fn(),
  switchTodo: vi.fn(),
  updateTodo: vi.fn(),
  deleteTodo: vi.fn(),
}))

beforeEach(() => {
  todoService.getTodos.mockReset()
  todoService.addTodo.mockReset()
  todoService.switchTodo.mockReset()
  todoService.updateTodo.mockReset()
  todoService.deleteTodo.mockReset()
  setActivePinia(createPinia())
})

it('should have the default state', () => {
  const todoStore = useTodoStore()
  expect(todoStore.items).toEqual([])
})

it('getTodoItems', async () => {
  todoService.getTodos.mockResolvedValue({ data: 'qualcosa' })
  const todoStore = useTodoStore()
  expect(todoStore.items).toEqual([])
  await todoStore.getTodoItems()
  expect(todoService.getTodos).toHaveBeenCalledWith()
  expect(todoStore.items).toEqual('qualcosa')
})
it('getTodoItems with failure', async () => {
  todoService.getTodos.mockRejectedValue()
  const todoStore = useTodoStore()
  expect(todoStore.items).toEqual([])
  await todoStore.getTodoItems()
  expect(todoService.getTodos).toHaveBeenCalledWith()
  expect(todoStore.items).toEqual([])
})

it('getters', () => {
  const todoStore = useTodoStore()
  todoStore.items = [
    { a: 123, completed: true },
    { a: 345, completed: false },
    { a: 678, completed: false },
  ]
  expect(todoStore.todoItems).toHaveLength(2)
  expect(todoStore.completedItems).toHaveLength(1)
})

