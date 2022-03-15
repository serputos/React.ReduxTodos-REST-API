import { useState, useEffect, useReducer } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { replaceTodos, addTodo, updateTodo } from "./actions";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosApi";
import { initialState, reduceTodos } from "./reducers";

export function Todos() {
  const [todos, dispatch] = useReducer(initialState); // guardar info
  useEffect(() => {
    // getTodos().then((json) => setTodos(json));
    // getTodos().then(setTodos); //valor final
    //llegir els state /FETCH
    refreshTodo();

    const intervalID = setInterval(() => {
      // sincronitzacio continu loop
      refreshTodo();
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  const refreshTodo = () =>
    getTodos().then((allTodos) => dispatch(replaceTodos(allTodos)));
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (updatedTodo) => dispatch(updateTodo(updatedTodo));

  return (
    <div className="App">
      <h1>LLISTAT TODOS</h1>
      <AfegirTodo onTodoAdded={onTodoAdded} />{" "}
      <TodoList todos={todos} onTodoDone={onTodoUpdated} />
      {/*Donat un nou Todo= setTodos == llistat de todos + el nou Todo*/}
      {/*PER VISUALITZAR EL LLISTAT DE TODOS SENCER <pre>{JSON.stringify(todos, null, 2)}</pre>*/}
      <button onClick={refreshTodo}>Refresh</button>
    </div>
  );
}
