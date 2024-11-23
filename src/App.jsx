import React, {useState} from "react";

import Header from "./components/Header";
import ReactIcon from "./components/ReactIcon";

const tempArr = Array.apply(null, Array(1)).map(() => {});

function App(){
  const [selectedIconIndex, setSelectedIconIndex] = useState([])

  function handleClick(index){
    if(selectedIconIndex.includes(index)) {
      setSelectedIconIndex(prev => prev.filter(item => item !== index));
      // setSelectedIconIndex(selectedIconIndex.filter(item => item !== index));
    } else {
      setSelectedIconIndex([...selectedIconIndex, index])
      // setSelectedIconIndex(prev => [...prev, index])
    }
  }


  return(
    <>
      <Header />
      <div>
      {tempArr.map((_, index) => {
        return <ReactIcon isSelected={selectedIconIndex.includes(index)} onClick={() => handleClick(index)} />
      })}
      </div>
    </>
  )
}

export default App;