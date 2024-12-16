import {useState} from "react";
import { useRef } from "react";

import Header from "./components/Header";
import ReactIcon from "./components/ReactIcon";



function App(){
  const [selectedIndex, setSelectedIndex] = useState([])
  const [number, setNumber] = useState(0)
  const [isTrue, setIsTrue] = useState(false)
  const indexArray = Array.apply(null, Array(number)).map(() => {});
  const changeNumber = useRef()
  const warn = 'warn' ;

  function handleChange(){
    if(+changeNumber.current.value < 5 && +changeNumber.current.value >= 0){
      setIsTrue(false)
      setNumber(+changeNumber.current.value)
    }else{
      setIsTrue(true)
      setNumber(0)
    }
  }

  function handleSelect(index){
    if(selectedIndex.includes(index)){
      setSelectedIndex(prev => prev.filter(item => item !== index))
    }else{
      setSelectedIndex(prev => [...prev, index])
    }
}

  return(
    <>
      <Header />
      <div className="inputcontainer">
        <p>
          Enter Number of Icons <p className={`limit ${isTrue ? warn : undefined}`}>(Max 4):</p>
        </p>
        <input className={isTrue ? warn : undefined} ref={changeNumber} onChange={handleChange} type="number" />
      </div>
      <div className="container">
        {indexArray.map((item, index) => {
          return <ReactIcon isSelected={selectedIndex.includes(index)} onClick={() => handleSelect(index)} />
        })}
      </div>
    </>
  )}

export default App;