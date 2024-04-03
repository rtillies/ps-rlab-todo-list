import React from "react";
import { ACTIONS } from "../App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <input type="checkbox" 
        defaultChecked={todo.complete} 
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      ></input>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      {/* <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button> */}
      <button
        disabled={!todo.complete}
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete</button>
    </div>
  );
}