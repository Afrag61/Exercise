import React from 'react'

import ico from './../assets/react.svg'
import Button from './Button.jsx'

export default function ReactIcon({Click, onClick}){
    const styleClass = 'fast'

    return(
        <div className='icontainer'>
            <img className={`img ${Click ? styleClass : undefined}`} src={ico} alt="React"/>
            <Button onClick={onClick} Click={Click} />
        </div>
    )
}