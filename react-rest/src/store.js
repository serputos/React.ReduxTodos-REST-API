import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceTodos } from "./todos/reducers";

import { todosMiddleware } from "./todos/middleware";

const reducer = combineReducers({ reducerTodos: reduceTodos });

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(todosMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
