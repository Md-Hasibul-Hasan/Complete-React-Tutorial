// jodi array er bitor obj thake map use korbo

import React from 'react';

const Map_Filter = () => {
    const products = [
        {id:1, name:'Product 1', price:100},
        {id:2, name:'Product 2', price:200},
        {id:3, name:'Product 3', price:300},
    ]

    const filteredProducts = products.filter((item,idx)=>{
        return item.price > 100;
    })

    return (
        <div>
            <h1> Using map </h1>
            <ul>
                {products.map((item,idx)=>(
                  <li key={idx}>{item.name} - {item.price}</li>  
                ))}
            </ul>

            <h3> price {">"} 100 </h3>
            <ul>
                {
                    filteredProducts.map((item,idx)=>{
                        return (
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
};

export default Map_Filter;