import React, { useState, useReducer } from 'react';
import './App.css';
import App1 from './component/App1';
import App2 from './component/App2';
import App3 from './component/App3';
import 'antd/dist/antd.css'

export const Store = React.createContext()

const initialState = 0

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state+1
      case "decrement":
        return state-1
      case "reset":
        return 0
      default :
        return state

    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <App1/>
    // <div>
    //   Count: {state}
    //   <button onClick={() => dispatch({ type: "increment" })}>+</button>
    //   <button onClick={() => dispatch({ type: "decrement" })} disabled={state == 0}>-</button>
    //   <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    // </div>

  );
}

export default App;
