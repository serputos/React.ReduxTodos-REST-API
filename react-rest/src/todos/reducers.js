import { useState } from "react";
import {
  REPLACE_TODO,
  ADD_TODO,
  UPDATE_TODO,
  EDIT_TODO,
  SEARCH_TODO,
  DELETE_TODO,
} from "./actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODO:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return [
        ...state.map((currentTodo) =>
          currentTodo.id === action.todo.id ? action.todo : currentTodo
        ),
      ];

    case EDIT_TODO:
      return [
        ...state.map((currentTitle) =>
          currentTitle.todo === action.todo ? action.todo : currentTitle
        ),
      ];
    case SEARCH_TODO:
      return [
        ...state.filter((item) => item.title === action.todo),
      ]; /* state.filter((item) =>
        item.title.toLowerCase().includes(action.title.toLowerCase())
      );  */
    case DELETE_TODO:
      return [...state.filter((item) => item.id !== action.id)];

    default:
      return state;
  }
}
