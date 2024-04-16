import { memo, useCallback, useState } from "react";

export default function HookUseCallback() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <>
      <Child onClick={onClick} />
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
