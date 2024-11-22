import React from "react";

import ico from "./assets/react.svg"

function App(){
  const [isClicked, setIsClicked] = React.useState(false)

  const styleClass = 'fast'

  function handleClick(){
    {isClicked ? setIsClicked(false) : setIsClicked(true)}
  }

return(
  <div>
    <header>
      <div>
        <h1>Ready to Code</h1>
      </div>
  </header>
    <div>
      <img className={`img ${isClicked ? styleClass : undefined}`} src={ico} alt="React" onClick={handleClick}/>
    </div>
  </div>
)
}

export default App;