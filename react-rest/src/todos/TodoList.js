import { TodoItem } from "./TodoItem";
import { TodoItemDone } from "./TodoItemDone";

export function TodoList({ todos, onTodoDone, onTodoEdit, onTodoDelete, onTodoUpdate }) {
  return (
    <div className="listas">
      <ul id="llista">
        <h2>TAREAS POR COMPLETAR:</h2>{" "}
        {/* >Donat un llistat de todos, retorna un li amb el titol del todo, segons la seva id */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            //reemplazar aquell que te la ID igual al current
           // onTodoDone={onTodoDone}
           onTodoUpdate={onTodoUpdate}
            onTodoEdit={onTodoEdit}
            onTodoDelete={onTodoDelete}
          />
        ))}
      </ul>
      <ul id="llistaComplete">
        <h2>TAREAS COMPLETADAS:</h2>{" "}
        {/* >Donat un llistat de todos, retorna un li amb el titol del todo, segons la seva id */}
        {todos.map((todo) => (
          <TodoItemDone
            key={todo.id}
            todo={todo}
            onTodoUpdate={onTodoUpdate}
            onTodoEdit={onTodoEdit}
            onTodoDelete={onTodoDelete}
          />
        ))}
      </ul>
    </div>
  );
}
