import { useRef } from "react";
import { postNewTodo } from "./todosApi";

export function AfegirTodo({ onTodoAdded }) {
  const titleRef = useRef();
  return (
    <form //EVITAR EL RELOAD DE LA PAGINA ONSUBMIT
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value; // coger value del titulo del input

        titleRef.current.value = ""; // borrar value despues de coger le primero

        postNewTodo(title).then((json) => onTodoAdded(json)); //valor final; // OnSubmit --> Post  un nou TODO amb titol del input
      }}
    >
      <div>
        <input ref={titleRef}></input>
        <input type="submit" value="Afegir"></input>
      </div>
    </form>
  );
}
