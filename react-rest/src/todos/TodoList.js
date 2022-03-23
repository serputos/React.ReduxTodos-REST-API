import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoDone, onTodoEdit, onTodoDelete }) {
  return (
    <div>
      <ul id="llista">
        {" "}
        {/* >Donat un llistat de todos, retorna un li amb el titol del todo, segons la seva id */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            //reemplazar aquell que te la ID igual al current
            onTodoDone={onTodoDone}
            onTodoEdit={onTodoEdit}
            onTodoDelete={onTodoDelete}
          />
        ))}
      </ul>
    </div>
  );
}
