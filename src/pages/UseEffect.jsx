import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [counter, setcounter] = useState(0);
    useEffect(()=>{
        console.log(counter);
    },[counter])

    const increase = ()=>{
        setcounter(counter+1);
    }

    const decrease = ()=>{
        setcounter(counter-1);
    }

    return (
        <div>
            <h2>Value:{counter}</h2>
            <button onClick={increase}>Inc</button>
            <button onClick={decrease}>dec</button>
        </div>
    );
};

export default UseEffect;