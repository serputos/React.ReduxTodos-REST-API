export const REPLACE_TODO = "REPLACE_TODO";
export function replaceTodos(allTodos) {
  return { type: REPLACE_TODO, todos: allTodos };
}
export const ADD_TODO = "ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}
