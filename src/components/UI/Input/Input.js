import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${props.classes.control} ${
        props.state.isValid === false ? props.classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.children}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.state.value}
        onChange={props.onChangeHandler}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
