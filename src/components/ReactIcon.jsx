import React from 'react'

import ico from './../assets/react.svg'
import Button from './Button.jsx'

export default function ReactIcon({isSelected, onClick}){
    const styleClass = 'fast'

    return(
        <>
            <div className='icontainer'>
                <img className={`img ${isSelected ? styleClass : undefined}`} src={ico} alt="React"/>
            </div>
            <div className='icontainer'>
                <Button onClick={onClick} isSelected={isSelected} />
            </div>
        </>
    )
}