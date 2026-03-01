import React, { useState } from 'react';

const Counter = () => {
    
    const [count,setcount]=useState(10)
    const increse = ()=>{
        setcount(count+1);
    }
    const decrease = ()=>{
        setcount(count-1);
    }
    return (
        <div>
            <h3>This is counter</h3>
            <p>Value:{count}</p>
            <button onClick={increse}>inc</button>
            <button onClick={decrease}>dec</button>
        </div>
    );
};

export default Counter;