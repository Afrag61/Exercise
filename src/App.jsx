import React from "react";

import Header from "./components/Header";
import ReactIcon from "./components/ReactIcon";
import Button from "./components/Button";

function App(){
  const [isClicked, setIsClicked] = React.useState(false)

  function handleClick(){
    {isClicked ? setIsClicked(false) : setIsClicked(true)}
}

  return(
    <div>
      <Header />
      <div className="icontainer">
        <ReactIcon Click={isClicked} />
        <Button onClick={handleClick} Click={isClicked} />
      </div>
    </div>
  )}

export default App;