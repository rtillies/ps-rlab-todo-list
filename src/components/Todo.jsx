import React, { useState } from "react";
import { ACTIONS } from "../App";
import "bootstrap/dist/css/bootstrap.css";
import "./todo.css";

export default function Todo({ todo, dispatch }) {
  const [text, setText] = useState(todo.name);
  const input = document.getElementById(todo.id);

  return (
    <div className="todo">
      <input
        type="checkbox"
        disabled={todo.edit}
        defaultChecked={todo.complete}
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      ></input>
      <span
        // id={todo.id}
        hidden={todo.edit}
        style={{
          color: todo.complete ? "#AAA" : "#000",
        }}
      >
        {todo.name}
      </span>
      <input
        id={todo.id}
        // disabled={!todo.edit}
        hidden={!todo.edit}
        type="text"
        defaultValue={todo.name}
        onChange={(e) => setText(e.value)}
        // onChange={(e) => setName(e.target.value)}
      />
      <button
        // disabled={!todo.edit}
        className="btn btn-primary"
        hidden={!todo.edit}
        onClick={() =>
          dispatch({
            type: ACTIONS.SAVE_TODO,
            payload: { id: todo.id, name: input.value },
          })
        }
      >
        Save
      </button>
      <button
        // disabled={todo.edit || todo.complete}
        className="btn btn-success"
        hidden={todo.edit || todo.complete}
        onClick={() =>
          dispatch({
            type: ACTIONS.EDIT_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        // disabled={!todo.complete}
        hidden={!todo.complete}
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
