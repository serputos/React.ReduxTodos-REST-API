export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}
export const EDIT_TODO = "todos/REQUEST_TODOS";
export function editTodo(editedTodo) {
  return { type: EDIT_TODO, todo: editedTodo };
}

export const REPLACE_TODO = "todos/REPLACE_TODO";
export function replaceTodos(allTodos) {
  return { type: REPLACE_TODO, todos: allTodos };
}
export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}
