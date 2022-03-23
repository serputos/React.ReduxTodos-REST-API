import { useRef, useState } from "react";
import { postNewTodo } from "./todosApi";

export function AfegirTodo({ onTodoAdded }) {
  const titleRef = useRef();
  // const [search, setSearch] = useState();
  //  const titleRef2 = useRef();

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
          <input type="submit" value="✚"></input>
        </div>
      </form>

      {/*  <form
        onSubmit={(e) => {
          e.preventDefault();
          // const title2 = titleRef2.current.value;
          //titleRef2.current.value = "";
        
          onTodoSearch(title2);
          console.log(title2);
        }}
      >
        <div>
          <input ref={titleRef2}></input>
          <input type="submit" value="Cerca"></input>
        </div>
      </form> */}
    </>
  );
}
