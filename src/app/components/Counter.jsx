'use client'
import { useState } from "react";
export default function Counter() {
    const [count,setCount] = useState(0)
    const inc = () =>{
        console.log('inc');
        setCount(count+1)
    }
    const dec = () =>{ 
        console.log('dec');
        setCount(count-1)
    }
    return (
        <div>
            <button type="button" onClick={dec} className=" me-3">-</button>
            <button type="button" onClick={inc}>+</button>
            {count}
        </div>
    );
}