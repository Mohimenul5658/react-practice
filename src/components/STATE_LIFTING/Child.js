import React from 'react'

const Child = (props) => {
    const data = "I'm from child(child.js)";
    props.onData(data)
  return (
    <div>
        <h1>State Lifting</h1>
        <p>{props.Data}</p>
    </div>
  )
}

export default Child
