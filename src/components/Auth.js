import React, { useRef } from 'react';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';


// const Auth = () => {
//     const {handleSubmit,setValue} = useForm();
//     const[phoneNumber,setPhoneNumber] = useState("");
//     const onSubmit = (data) =>{
//         console.log(data);
//     }
//     const handleChange = (e) => {
//         setPhoneNumber(e.target.value);
//         setValue(phoneNumber);
//     }
//     return(
//         <div>
//         <h1>Auth</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <input 
//         type='tel' 
//         placeholder='+911234567890'
//         name='phoneNumber'
//         value={phoneNumber}
//         onChange={handleChange}
//         // {...register('phoneNumber',{
//         //     required:'phone number is required'
//         // })}
//         />
//         <button type='submit'>Submit</button>
//         </form>
//         </div>
//     )
// }
const Auth = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const inputRef = useRef();
    const onSubmit = (data) =>{
        inputRef.current.focus();
        console.log(data);
    }
    // const onFormError = (error) => console.log(error);
    return(
        <div>
        <h1>Auth</h1>
        <form onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
        <input 
        type='tel' 
        placeholder='+911234567890'
        {...register('phoneNumber',{
            pattern:{
            value:/[a-zA-z]{3}/,
            message:"invalid phone number",
            },
             required:"phone number is required"
        }
        
    )}
        />
        {errors?.phoneNumber&&<span>{errors.phoneNumber.message}</span>}
        <button type='submit'>Send OTP</button>
        </form>
        </div>
    )
}

export default Auth;