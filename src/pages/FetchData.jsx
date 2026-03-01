import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [apidata, setapidata] = useState([]);
    useEffect(()=>{

        const fetchdata = async ()=>{
            const api  = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const data = await api.json();
            setapidata(data);
        }
        fetchdata();
    },[])

    return (
        <div>
            <ul>
                {
                    apidata.map((item)=>(
                        <li>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FetchData;

