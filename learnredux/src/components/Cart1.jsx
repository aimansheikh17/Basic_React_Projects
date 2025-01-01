import React, { useState } from 'react';
import Payment1 from './Payment1';

export default function Cart1({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (
            <Payment1  user = {user}/>
        )
    }
  return (
    <div>
      <h1>Cart Component</h1>
      <button onClick={()=>{setClick(true)}}>Payment</button>
    </div>
  )
}
