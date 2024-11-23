import React from 'react'

import ico from './../assets/react.svg'

export default function ReactIcon(){
    const [isClicked, setIsClicked] = React.useState(false)

    const styleClass = 'fast'

    function handleClick(){
        {isClicked ? setIsClicked(false) : setIsClicked(true)}
    }

    return(
        <img className={`img ${isClicked ? styleClass : undefined}`} src={ico} alt="React" onClick={handleClick}/>
    )
}