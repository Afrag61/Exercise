import React from "react";

export const counterReducer = (state, action) => {
  if(action.type === 'INCREMENT'){
    return{
      count: state.count + 1
    }
  }
  if(action.type === 'DECREMENT'){
    return{
      count: state.count - 1
    }
  }
  if(action.type === 'RESET'){
    return{
      count: state.count = 0
    }
  }

  return state
}

const App = () => {
  const [counterState, dispatchCounterState] = React.useReducer(counterReducer,{
    count: 0
  })

  const handleIncrement = () => {
    dispatchCounterState({
      type: 'INCREMENT'
    })
  }

  const handleDecrement = () => {
    dispatchCounterState({
      type: 'DECREMENT'
    })
  }

  const handleReset = () => {
    dispatchCounterState({
      type: 'RESET'
    })
  }


  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
