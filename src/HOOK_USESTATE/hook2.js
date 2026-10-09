import React, { useState } from 'react'

function HOOK_USESTATE2() {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count + 1);
    }
  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
export default HOOK_USESTATE2;