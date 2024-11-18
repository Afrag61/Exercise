import React from 'react';

// don't change the Component name "App"
export default function App() {
  let [theColor,setColor] = React.useState("white");

  function handleChange (){
    if(theColor === "white"){
      setColor("red")
    }else{
      setColor("white")
    }
  }

    return (
        <div>
            <p style={{
              color: theColor
            }}>Style me!</p>
            <button onClick={() => handleChange()}>Toggle style</button>
        </div>
    );
}
