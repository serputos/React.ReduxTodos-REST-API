import { postUpdateTodo, changeTodo, eliminarTodo } from "./todosApi";
import { useRef, useState } from "react";
import "../App.css";

export function TodoItem({
  todo,
  onTodoDone,
  onTodoEdit,
  onTodoDelete,
  onTodoUpdate,
}) {
  const tituloMod = useRef();

  const [isEdditing, setEdditing] = useState(false);

  return (
    <div>
      {!todo.completed && (
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
              className="checkbox"
              type="checkbox"
              defaultChecked={todo.completed}
              onClick={() => {
                /*   postUpdateTodo({...todo, completed: !todo.completed }).then((json) => onTodoDone(json)); */
                onTodoUpdate({ ...todo, completed: !todo.completed });
              }}
            ></input>
            <label
              className="quitarTarea"
              onClick={(e) => {
                e.preventDefault();
                eliminarTodo(todo).then((json) => onTodoDelete(json));
              }}
            >
              ❎
            </label>
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
      )}
    </div>
  );
}
