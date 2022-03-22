import { postUpdateTodo, changeTodo, eliminarTodo } from "./todosApi";
import { useRef, useState } from "react";
import "../App.css";

export function TodoItem({ todo, onTodoDone, onTodoEdit, onTodoDelete }) {
  const tituloMod = useRef();
  //console.log(todo);

  const [isEdditing, setEdditing] = useState(false);

  return (
    <div>
      <div className="llista">
        {" "}
        <li
          className={todo.completed ? "completed" : "pending"}
          onClick={() => {
            setEdditing((x) => !x);
          }}
        >
          {todo.title}
        </li>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onClick={() => {
            postUpdateTodo(todo).then((json) => onTodoDone(json));
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            eliminarTodo(todo).then((json) => onTodoDelete(json));
          }}
        >
          X
        </button>
      </div>
      {isEdditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const titulo = tituloMod.current.value;
            todo.title = titulo;
            changeTodo(todo).then((json) => onTodoEdit(json));
            tituloMod.current.value = "";

            setEdditing(false);
          }}
        >
          <input ref={tituloMod} defaultValue={todo.title}></input>
        </form>
      )}
    </div>
  );
}
