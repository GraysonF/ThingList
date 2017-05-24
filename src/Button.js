import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button className="add-thing" onClick = {props.addThing}>Add Thing</button>
    )
}

export default Button;