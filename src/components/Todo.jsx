import React, { useState } from "react";
import { ACTIONS } from "../App";

export default function Todo({ todo, dispatch }) {
  const [text, setText] = useState(todo.name)

  return (
    <div>
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
        hidden={todo.edit}
        style={{
          color: todo.complete ? "#AAA" : "#000",
        }}
      >
        {todo.name}
      </span>
      <input
        // disabled={!todo.edit}
        hidden={!todo.edit}
        type="text"
        value={todo.name}
        // onChange={(e) => setName(e.target.value)}
      />
      <button
        // disabled={!todo.edit}
        hidden={!todo.edit}
        onClick={() =>
          dispatch({
            type: ACTIONS.SAVE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Save
      </button>
      <button
        // disabled={todo.edit || todo.complete}
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
