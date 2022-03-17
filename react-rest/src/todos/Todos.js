import { useEffect } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { addTodo, updateTodo, requestTodos, editTodo } from "./actions";
import { TodoList } from "./TodoList";

import { useDispatch, useSelector } from "react-redux";

function selectTodos(state) {
  return state.reducerTodos;
}

export function Todos() {
  // const [todos,dispatch] = useReducer(reduceTodos, initialState); // guardar info

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    // getTodos().then((json) => setTodos(json));
    // getTodos().then(setTodos); //valor final
    //llegir els state /FETCH
    //  refreshTodo();

    const intervalID = setInterval(() => {
      // sincronitzacio continu loop
      refreshTodo();
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  // const refreshTodo = () =>
  //    getTodos().then((allTodos) => dispatch(replaceTodos(allTodos)));
  const refreshTodo = () => dispatch(requestTodos());
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (updatedTodo) => dispatch(updateTodo(updatedTodo));
  const onTodoEdited = (editedTodo) => dispatch(editTodo(editedTodo));

  return (
    <div className="App">
      <h1>LLISTAT TODOS</h1>
      <AfegirTodo onTodoAdded={onTodoAdded} />{" "}
      <TodoList
        todos={todos}
        onTodoDone={onTodoUpdated}
        onTodoEdit={onTodoEdited}
      />
      {/* <EditarTodo todos={todos} onEditTodo={onEditTodo} />
      {/*Donat un nou Todo= setTodos == llistat de todos + el nou Todo*/}
      {/*PER VISUALITZAR EL LLISTAT DE TODOS SENCER <pre>{JSON.stringify(todos, null, 2)}</pre>*/}
      <button onClick={refreshTodo}>Refresh</button>
    </div>
  );
}
