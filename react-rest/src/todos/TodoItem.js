import { postUpdateTodo, changeTodo } from "./todosApi";
import { useRef, useState } from "react";

export function TodoItem({ todo, onTodoDone, onTodoEdit }) {
  const tituloMod = useRef();

  return (
    <>
      <li
        className={todo.completed ? "completed" : "pending"}
        onClick={() => {
          tituloMod.current.value = todo.title;
        }}
      >
        {todo.title}
      </li>
      <button
        onClick={() => {
          postUpdateTodo(todo).then((json) => onTodoDone(json));
        }}
      >
        X
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const titulo = tituloMod.current.value;
          todo.title = titulo;
          changeTodo(titulo).then((json) => onTodoEdit(json));
          tituloMod.current.value = "";

          // console.log(titulo);
        }}
      >
        <input ref={tituloMod}></input>
      </form>
    </>
  );
}
