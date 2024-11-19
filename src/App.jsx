import React from 'react';

// don't change the Component name "App"
export default function App() {
  let [click, setClick] = React.useState()
    function clickHandler(value){
      setClick(value)
        console.log('Clicked!');
    };
    
    return (
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onClick={() => clickHandler(true)}>Click me!</button>
        </div>
    );
}
