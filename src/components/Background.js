import React, { useState } from "react"

const Background = () => {
    const [change, setChange] = useState('#fff')
    const [color, setColor] = useState('White')
    const [btn, setBtn] = useState('Chanage to black')

    const setBackground = () => {
        setChange(!change)
        if(!change){
            setColor('White')
            setBtn('Chanage to black')
            
        }else{
            setColor('Black')
            setBtn('Chanage to white')
        }
    }
    return (
        <div style={!change ? {backgroundColor: '#000'}:null} >
            <h1 style={!change ? {color: '#fff'}:null}>{color}</h1>
            <button onClick={setBackground}>{btn}</button>
        </div>
    )
}

export default Background