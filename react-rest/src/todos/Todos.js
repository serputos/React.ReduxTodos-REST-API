import { useEffect } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { FiltrarTodo } from "./filtrarTodo";
import {
  addTodo,
  updateTodo,
  requestTodos,
  editTodo,
  searchTodo,
  deleteTodo,
} from "./actions";
import { TodoList } from "./TodoList";

import { useDispatch, useSelector } from "react-redux";

function selectTodos(state) {
  return state.reducerTodos;
}

export function Todos() {
  const { dispatch, todos } = useEffectFunction();

  const refreshTodo = () => dispatch(requestTodos());
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (updatedTodo) => dispatch(updateTodo(updatedTodo));
  const onTodoEdited = (editedTodo) => dispatch(editTodo(editedTodo));
  const onTodoSearch = (todo) => dispatch(searchTodo(todo));
  const onTodoDeleted = (todo) => dispatch(deleteTodo(todo));

  return (
    <div className="App">
      <header>
        <h1>LISTADO TAREAS</h1>
      </header>
      <div className="displayApp">
        <AfegirTodo onTodoAdded={onTodoAdded} />{" "}
        <FiltrarTodo onTodoSearch={onTodoSearch} />
        <span className="descripcionText">
          ("Click" encima de cualquier tarea para editarla)
        </span>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={refreshTodo}
        >
          Refresh
        </button>
        <TodoList
          todos={todos}
          onTodoDone={onTodoUpdated}
          onTodoEdit={onTodoEdited}
          onTodoDelete={onTodoDeleted}
        />
        {/* <EditarTodo todos={todos} onEditTodo={onEditTodo} />
      {/*Donat un nou Todo= setTodos == llistat de todos + el nou Todo*/}
        {/*PER VISUALITZAR EL LLISTAT DE TODOS SENCER <pre>{JSON.stringify(todos, null, 2)}</pre>*/}
      </div>
      <footer>
        <h3>Sergi Pruna</h3>

        <h3>prunasergi@gmail.com</h3>
      </footer>
    </div>
  );

  function useEffectFunction() {
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
    return { dispatch, todos };
  }
}
