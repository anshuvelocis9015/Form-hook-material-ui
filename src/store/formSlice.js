import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // formData:JSON.parse(localStorage.getItem("formDataaaa")),
    formData:{},
}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        saveFormData: (state,action)=>{
            state.formData = action.payload;
            // localStorage.setItem("formDataaaa",JSON.stringify(state.formData))
        }
    }
})

export const {saveFormData} = formSlice.actions;

export default formSlice.reducer;