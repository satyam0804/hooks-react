import { useEffect, useState } from "react";
import axios from "axios";

function HookUseEffect() {
  const [selectId, setSelectId] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setSelectId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setSelectId(4);
        }}
      >
        4
      </button>

      <Todo id={selectId} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    //getTodos();
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then((res) => {
      setTodos(res.data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}

export default HookUseEffect;
