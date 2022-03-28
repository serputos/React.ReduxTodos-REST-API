import { useRef, useState } from "react";
import { postNewTodo } from "./todosApi";

export function AfegirTodo({onAddTodo, }) {
  const titleRef = useRef();
  // const [search, setSearch] = useState();
  //  const titleRef2 = useRef();

  return (
    <>
      {/*  <form //EVITAR EL RELOAD DE LA PAGINA ONSUBMIT
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
      </form> */}

      <nav className="navbar navbar-light bg-light">
        <form
          className="form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            const title = titleRef.current.value; // coger value del titulo del input

            titleRef.current.value = ""; // borrar value despues de coger le primero

            //postNewTodo(title).then((json) => onTodoAdded(json)); //valor final; // OnSubmit --> Post  un nou TODO amb titol del input
            onAddTodo({title});
          }}
        >
          <div>
            <input
              ref={titleRef}
              className="btn btn-outline-secondary mr-sm-2"
              type="search"
              placeholder="Add Task"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </nav>
    </>
  );
}
