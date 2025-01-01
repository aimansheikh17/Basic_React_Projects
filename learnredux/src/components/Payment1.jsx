import React, { useState } from 'react'

export default function Payment1({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (
            <>
            <h1>{user.username}, {user.balance}</h1>
            <button onClick={()=>{setClick(true)}}>Pay</button>
            <h3>Updated Balance is : {user.balance-5000}</h3>
            </>
        )
    }
     
  return (
    <div>
      <h1>{user.username}, {user.balance}</h1>
      <button onClick = {()=>{setClick(true)}}>Pay</button>
    </div>
  )
}
