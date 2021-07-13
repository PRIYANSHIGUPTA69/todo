
import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
     
      key={item.id}
    >
      <div
        ref={inputRef}
        disabled={inputRef}
       
        >{item.item}</div>
       
        <button
          onClick={() => removeTodo(item.id)}
        >
        
         remove
        </button>
      
    </li>
  );
};

export default TodoItem;