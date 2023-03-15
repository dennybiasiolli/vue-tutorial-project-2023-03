import axios from 'axios'
import { expect, it, beforeEach, vi } from 'vitest'
import {
  getTodos,
  addTodo,
} from '@/services/todo'

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}))

beforeEach(() => {
  axios.get.mockReset()
  axios.post.mockReset()
  axios.patch.mockReset()
  axios.delete.mockReset()
})

it('getTodos', () => {
  axios.get.mockReturnValue('abc123')
  const retVal = getTodos()
  expect(axios.get).toHaveBeenCalledWith('/todos')
  expect(retVal).toBe('abc123')
})

it('addTodo', () => {
  axios.post.mockReturnValue('abc123')
  const retVal = addTodo('foo')
  expect(axios.post).toHaveBeenCalledWith('/todos', 'foo')
  expect(retVal).toBe('abc123')
})
