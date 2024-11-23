import React from 'react'

import ico from './../assets/react.svg'

export default function ReactIcon({Click}){
    const styleClass = 'fast'

    return(
        <img className={`img ${Click ? styleClass : undefined}`} src={ico} alt="React"/>
    )
}