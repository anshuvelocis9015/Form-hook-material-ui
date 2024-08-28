import React from "react";
import { useSelector } from "react-redux";

const DisplayFormData = () => {
    const formDataInput = useSelector((state) =>{
        return state.form1.formData;
    })
    return (
        <div>
            <h1>Form Data</h1>
            <p>First Name: {formDataInput?.firstName}</p>
            <p>Last Name: {formDataInput?.lastName}</p>
            <p>Email: {formDataInput?.email}</p>
        </div>
    )
}

export default DisplayFormData;