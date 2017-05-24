import React from 'react'
import Thing from './Thing'
import './ThingList.css'

const ThingList = (props) => {
    
    return (
        <ul className = "ThingList">
            {Object
                .keys(props.things)
                .map(thingId => <Thing thing = {props.things[thingId]} key = {thingId} remove = {props.remove}/>)
            }
        </ul>
    )
}

export default ThingList;