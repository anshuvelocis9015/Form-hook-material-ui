import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])
    // console.log('otp',otp);
    // console.log("current object", inputRefs)
    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        //allow only one input we take here new array because i have to enroll only one length of input where we add validation and modify it later
        newOtp[index] = value.substring(value.length - 1); //it takes only last input value
        // console.log('otp',otp,"newOtp",newOtp);
        setOtp(newOtp);
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }
        //move to next input field if the previous input field is filled 
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
        console.log('otp', otp, "newOtp", newOtp);

    }
    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1);

    }
    console.log("otp is sabkuch",otp)
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
        // if(e.key==="blank space" && index>0 && !otp[index] && inputRefs.current[index-1]){
        //     inputRefs.current[index].focus();
        // }
        if(index > 0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
    }
    return (
        <div className='otp'>
            {otp.map((value, index) => {
                return (
                    <input
                        key={index}
                        type='text'
                        ref={(input) => (inputRefs.current[index] = input)}
                        value={value}
                        onChange={(e) => { handleChange(index, e) }}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className='otp-input'
                    />
                )
            })}
        </div>
    )
}

export default OtpInput