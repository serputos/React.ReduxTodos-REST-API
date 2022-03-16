import { useRef } from "react";

import { ItemEditTodo } from "./itemEditTodo";

export function EditarTodo({ todos, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ItemEditTodo key={todo.id} todo={todo} onEditTodo={onEditTodo} />
      ))}
    </ul>
  );
}
