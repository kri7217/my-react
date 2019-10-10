import React from 'react'

const Person =(props)=>{

    return(
        <div><p>My Name is {props.name}. I'm {props.age} old</p>
        <input type="text" onChange={props.changeName} value={props.name} ></input>
        </div>
    )
}

export default Person;