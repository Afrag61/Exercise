import React from "react";

import Header from "./components/Header";
import ReactIcon from "./components/ReactIcon";

function App(){
  const [isClicked, setIsClicked] = React.useState(false)

  function handleClick(){
    {isClicked ? setIsClicked(false) : setIsClicked(true)}
}

  return(
    <>
      <Header />
      <ReactIcon Click={isClicked} onClick={handleClick} />
    </>
  )}

export default App;