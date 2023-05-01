import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function App() {
  const count = useSelector((state) => state.ReduxActions.count)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;
