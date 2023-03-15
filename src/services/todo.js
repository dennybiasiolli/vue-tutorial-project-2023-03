import axios from 'axios'

const rootUrl = '/todos'

export function getTodos() {
  return axios.get(rootUrl)
}

export function addTodo(payload) {
  return axios.post(rootUrl, payload)
}

export function switchTodo(id, payload) {
  return axios.patch(`${rootUrl}/${id}`, payload)
}

export function updateTodo(id, payload) {
  return axios.patch(`${rootUrl}/${id}`, payload)
}

export function deleteTodo(id) {
  return axios.delete(`${rootUrl}/${id}`)
}
