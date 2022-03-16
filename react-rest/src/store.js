import { createStore, combineReducers, applyMiddleware } from "redux";
import { reduceTodos } from "./todos/reducers";

import { todosMiddleware } from "./todos/middleware";

const reducer = combineReducers({ reducerTodos: reduceTodos });

export const store = createStore(reducer, applyMiddleware(todosMiddleware));
