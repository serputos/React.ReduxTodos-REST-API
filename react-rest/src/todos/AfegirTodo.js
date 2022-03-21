import { useRef } from "react";
import { postNewTodo, buscarTodo } from "./todosApi";

export function AfegirTodo({ todo, onTodoAdded, onTodoSearch }) {
  const titleRef = useRef();
  const titleRef2 = useRef();
  return (
    <>
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTodoSearch(titleRef.current.value);
          console.log(titleRef.current.value);
        }}
      >
        <div>
          <input ref={titleRef}></input>
          <input type="submit" value="Cerca"></input>
        </div>
      </form>
    </>
  );
}
