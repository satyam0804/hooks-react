import { useMemo, useState } from "react";

export function HookUseMemo() {
  const [inputVal, setInputVal] = useState(1);
  const [counter, setCounter] = useState(0);

  /* 
    If we use it without useMemo, then everytime we update counter this expernsive operation happend 
    everytime which we don't want so we use useMemo instead
  */
  const value = useMemo(() => {
    let summation = 0;
    for (let i = 1; i <= inputVal; i++) {
      summation = summation + i;
    }
    return summation;
  }, [inputVal]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="Find the sum between 1 to n"
      ></input>
      <br />
      <br />
      Sum from 1 to {inputVal} is {value}
      <br />
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </>
  );
}
