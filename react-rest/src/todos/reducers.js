import { REPLACE_TODO, ADD_TODO, UPDATE_TODO, EDIT_TODO } from "./actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODO:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    case EDIT_TODO:
      return action.todo;
    default:
      return state;
  }
}
