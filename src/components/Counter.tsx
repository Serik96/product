import { useState } from "react";
import style from "./Counter.module.scss";
export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={style.btn}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
