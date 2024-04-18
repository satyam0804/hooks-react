import { useEffect, useState, useRef } from "react";

export default function HookUseRef() {
  const changeValue = useRef();

  useEffect(() => {
    setTimeout(() => {
      changeValue.current.innerHTML = "This is useRef() hook example";
    }, 2000);
  }, []);

  return (
    <>
      <div ref={changeValue}>This is useEffect() hook example</div>
    </>
  );
}
