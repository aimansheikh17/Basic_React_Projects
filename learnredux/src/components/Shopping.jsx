import React, { useState } from 'react'
import Cart1 from './Cart1';

export default function Shopping({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (
            <Cart1 user = {user}/>
        )
    }
  return (
    <div>
      <h1>Shopping Component</h1>
      <button onClick={()=>{setClick(true)}}>Cart</button>
    </div>
  )
}
