const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";
export async function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}

export async function postNewTodo(title) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ title }),
  }).then((response) => response.json());
}

export async function postUpdateTodo(todo) {
  return fetch(ENDPOINT + "/" + todo.id, {
    method: "POST",
    body: JSON.stringify({ completed: !todo.completed }),
  }).then((response) => response.json());
}

export async function changeTodo(titulo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ title: titulo.title }),
  }).then((response) => response.json());
}
