import { useRef } from "react";

export function FiltrarTodo({ onTodoSearch }) {
  const titleRef2 = useRef();
  // const [search, setSearch] = useState();
  //  const titleRef2 = useRef();

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form
          className="form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            const title2 = titleRef2.current.value;
            titleRef2.current.value = "";

            onTodoSearch(title2);
            // console.log(title2);
          }}
        >
          <div>
            <input
              ref={titleRef2}
              className="btn btn-outline-secondary mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </nav>
      {/*   <form
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
      </form> */}
    </>
  );
}
