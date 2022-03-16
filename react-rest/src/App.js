import "./App.css";
import { Todos } from "./todos/Todos";
import { store } from "./store";
import { Provider } from "react-redux";

import { requestTodos } from "./todos/actions";

store.dispatch(requestTodos());

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
