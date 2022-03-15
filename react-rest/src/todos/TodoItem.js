import { postUpdateTodo } from "./todosApi";

export function TodoItem({ todo, onTodoDone }) {
  return (
    <li
      className={todo.completed ? "completed" : "pending"}
      onClick={() => {
        postUpdateTodo(todo).then((json) => onTodoDone(json));
      }}
    >
      {todo.title}
    </li>
  );
}
