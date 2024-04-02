import React, { useState, useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  return {count: state.count + 1}
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(0)

  function increment() {
    // setCount(prevCount => prevCount + 1)
    dispatch()
  }
  function decrement() {
    // setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <div className='App'>
        <button onClick={decrement}>-</button>
        <span className='count'> {state.count} </span>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

// export default App
