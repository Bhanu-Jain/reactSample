import React, { useState } from "react";
import './FormComponent.css';

const FormComponent = () => {

    const [formData, setFormData] = useState({

        fname: "",
        lname: "",
        email: "",
        mobile: ""
    });

    const updateOnInput = (event) => {

        const {name, value} = event.target;

        setFormData((prevValue) => {

            return {

                ...prevValue,
                [name]: value
            };
        })

        // if(name === 'fname'){

        //     setFormData((prevValue) => {

        //         return {

        //             ...prevValue,
        //             fname: value
        //         };
        //     })

        // }else if(name === 'lname'){
            
        //     setFormData((prevValue) => {

        //         return {

        //             ...prevValue,
        //             lname: value
        //         };
        //     })

        // }else if(name === 'email'){
            
        //     setFormData((prevValue) => {

        //         return {

        //             ...prevValue,
        //             email: value
        //         };
        //     })

        // }else if(name === 'mobile'){
            
        //     setFormData((prevValue) => { 

        //         return {

        //             ...prevValue,
        //             mobile: value
        //         };
        //     })
        // }

    }

    const handleFormSubmit = (event) => {

        event.preventDefault();
    }

    return (
        <>
            <div className = "parent_div">
                <div className="child_div"/>
                <div className="child_div_form">
                    <form className = "form_body" onSubmit={handleFormSubmit}>
                        <span>Hello {formData.fname} {formData.lname}</span>
                        <span>{formData.email} {formData.mobile}</span>
                        <input 
                            type="text" 
                            placeholder="Enter your first name" 
                            name = "fname"
                            value = {formData.fname}
                            onChange={updateOnInput}/>
                        <input 
                            type="text" 
                            placeholder="Enter your last name" 
                            name = "lname"
                            value = {formData.lname}
                            onChange={updateOnInput}/>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            name = "email"
                            value = {formData.email} 
                            onChange={updateOnInput}/>
                        <input 
                            type="number" 
                            placeholder="Enter your mobile" 
                            name = "mobile"
                            value = {formData.mobile} 
                            onChange={updateOnInput}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="child_div"/>
            </div>
        </>
    );
}

export default FormComponent;