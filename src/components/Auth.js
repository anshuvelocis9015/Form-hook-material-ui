import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const Auth = () => {
    const {handleSubmit,setValue} = useForm();
    const[phoneNumber,setPhoneNumber] = useState("");
    const onSubmit = (data) =>{
        console.log(data);
    }
    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
        setValue(phoneNumber);
    }
    return(
        <div>
        <h1>Auth</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        type='tel' 
        placeholder='+911234567890'
        name='phoneNumber'
        value={phoneNumber}
        onChange={handleChange}
        // {...register('phoneNumber',{
        //     required:'phone number is required'
        // })}
        />
        <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default Auth;