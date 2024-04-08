import React from "react";
import { ACTIONS } from "../App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
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
        disabled={!todo.edit}
        hidden={todo.edit}
        type="text"
        value={todo.name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        disabled={!todo.edit}
        hidden={todo.edit}
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
        disabled={todo.complete}
        hidden={todo.complete}
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
        disabled={!todo.complete}
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
