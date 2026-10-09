import React, { useState } from 'react'

const Toggle = () => {

  const [toggle, setToggle] = useState(true);
  // alert(toggle)

  return (
    <div style={{margin: "1rem", backgroundColor: "pink", padding: "1rem"}}>
    {toggle && (
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sit architecto consequatur quisquam enim mollitia? Ullam quo quibusdam perferendis tempore provident nisi omnis porro eos nulla, quisquam, dolorem recusandae. Quibusdam.</p>
    )}
     <div style={{textAlign: "center"}}>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide" : "Show"}</button>
        
      </div>
    </div>

  )
}

export default Toggle