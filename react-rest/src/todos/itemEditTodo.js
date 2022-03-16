import { changeTodo } from "./todosApi";
import { useRef } from "react";

export function ItemEditTodo({ todo, onEditTodo }) {
  const title = todo.title;
  return <input defaultValue={title}></input>;
}

/*<form //EVITAR EL RELOAD DE LA PAGINA ONSUBMIT
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleText.current.value; // coger value del titulo del input

        titleText.current.value = ""; // borrar value despues de coger le primero

        changeTodo(title).then((json) => onEditTodo(json)); //valor final; // OnSubmit --> Post  un nou TODO amb titol del input
      }}
    >
      <div>
        <input ref={titleText}></input>
        <input type="submit" value="Editar"></input>
      </div>
    </form>
    
    
    
    <input value={todo.title}></input>;*/
