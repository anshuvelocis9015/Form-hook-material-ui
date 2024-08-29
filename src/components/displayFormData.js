import React from "react";
import { useSelector } from "react-redux";

const DisplayFormData = () => {
    const formDataInput = useSelector((state) =>{
        return state.formData;
    })
    console.log("formDataInput",formDataInput)
    return (
        <div>
            <h1>Form Data</h1>
            <p>First Name: {formDataInput?.firstName}</p>
            <p>Last Name: {formDataInput?.lastName}</p>
            <p>Email: {formDataInput?.email}</p>
            {formDataInput?.password && <p>{formDataInput?.panNumber}</p>}
        </div>
    )
}

export default DisplayFormData;