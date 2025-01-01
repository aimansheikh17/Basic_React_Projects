import React, {useState} from "react";
import Login1 from "./Login1";

export default function Index1() {
    const user ={
        username : 'AK',
        balance: 25000
    }
    const [click, setClick] = useState(false);
    if(click) {
        return (
          <Login1 user = {user} />
        )
    }
    return (
        <div>
            <h1>Index Component</h1>
            <button onClick={()=>{setClick(true)}}>Login</button>
        </div>
    )
}