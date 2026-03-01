import React, { useState } from 'react';

const Form = () => {

    const [formdata,setformdata] = useState({
        name:'',
        email:'',
        pass:'',
        phone:''
    })

    const onchangehandler = (e)=>{
        const {name,value}=e.target;
        setformdata({...formdata,[name]:value});
    }

    const submithandler = (e)=>{
        e.preventDefault();
        alert(`Form Submitted of ${formdata.name}`);
        setformdata({
            name:'',
            email:'',
            pass:'',
            phone:''            
        })

    }

    return (
        <div>
            <form action="" onSubmit={(e)=>submithandler(e)}>

                Name:
                <input 
                type="text" 
                name="name"
                value={formdata.name}
                onChange={(e)=>onchangehandler(e)}
                

                /> <br /> <br />

                Email:
                <input 
                type="email" 
                name="email"
                value={formdata.email}
                onChange={(e)=>onchangehandler(e)}

                /> <br /> <br />     

                Password:
                <input 
                type="password" 
                name="pass"
                value={formdata.pass}
                onChange={(e)=>onchangehandler(e)}

                /> <br /> <br />

                Phone:
                <input 
                type="number" 
                name="phone"
                value={formdata.phone}
                onChange={(e)=>onchangehandler(e)}

                /> <br /> <br />

                <button>Send</button>
            </form>

            <div>
                <h3>Info</h3>
                <p>{formdata.name}</p>
                <p>{formdata.email}</p>
                <p>{formdata.pass}</p>
                <p>{formdata.phone}</p>
            </div>
        </div>
    );
};

export default Form;