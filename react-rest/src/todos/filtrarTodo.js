import { useRef, useState } from "react";

export function FiltrarTodo({ onTodoSearch }) {
  const titleRef2 = useRef();
  // const [search, setSearch] = useState();
  //  const titleRef2 = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title2 = titleRef2.current.value;
          titleRef2.current.value = "";

          onTodoSearch(title2);
          // console.log(title2);
        }}
      >
        <div>
          <input ref={titleRef2}></input>
          <input type="submit" value="🔍"></input>
        </div>
      </form>
    </>
  );
}
