import { REQUEST_TODOS, replaceTodos } from "./actions";
import { getTodos } from "./todosApi";

export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_TODOS) {
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
  }
};
