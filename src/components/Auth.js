import React, { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import OtpInput from './otpInput';


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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showOtpInput, setShowOtpInput] = useState(false);
    const[submittedPhoneNumber,setSubmittedPhoneNumber] = useState("");
    const inputRef = useRef();
    const onSubmit = (data) => {
        inputRef.current.focus();
        setSubmittedPhoneNumber(data.phoneNumber);
        //call api
        setShowOtpInput(true);
        console.log(data);
    }
    const onOtpSubmit = (otp) => {
        console.log("Login Successfully",otp);
    }
   
    
    return (
        <div>
            {!showOtpInput ?
                (<form onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
                    <input
                        type='tel'
                        placeholder='+911234567890'
                        {...register('phoneNumber', {
                            pattern: {
                                value: /^[6-9]\d{9}$/,
                                message: "invalid phone number",
                            },
                            required: "phone number is required"
                        }

                        )}
                    />
                    {errors?.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                    <button type='submit'>Send OTP</button>
                </form>) :
                (<div>
                    <p>Enter OTP sent to {submittedPhoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
                </div>)}
        </div>
    )
}

export default Auth;