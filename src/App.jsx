import React, { useState, useReducer } from "react";
// import Todo from "./Todo";
import Todo from "./components/Todo";
import "./App.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
  SAVE_TODO: "save-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload.name), ...todos];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      // add edit functionality
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, edit: !todo.edit };
        }
        return todo;
      });
    case ACTIONS.SAVE_TODO:
    // add save functionality
    // return todos.map(todo => {
    //   if (todo.id === action.payload.id) {
    //     return {...todo, name: action.payload.name, edit: !todo.edit}
    //   }
    //   return todo
    // })
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false, edit: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name },
    });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <h3>Create New Item</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
      <h3>Todo Items</h3>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
