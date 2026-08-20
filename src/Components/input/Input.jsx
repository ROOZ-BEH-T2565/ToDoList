import { useId } from "react";
import style from "./Input.module.css";

export const Input = (props) => {
  const uniqId = useId();

  return (
    <div className={style.inputContainer}>
      <label htmlFor={uniqId}>{props.label}:</label>
      <input type="text" onChange={props.func} value={props.value} id={uniqId} name={props.name} />
    </div>
  );
};
