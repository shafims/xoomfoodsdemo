import React, {createContext, useContext, useState} from "react";
import axios from "axios";

//create Context
const FormContext = createContext();

// create a provider
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const errors = {};

    // if (!formData.name) {
    //   errors.name = "Name is required";
    // }

    // if (!formData.email) {
    //   errors.email = "Email is required";
    // } else if (!/^\S+@\S+\.\S+$/i.test(formData.email)) {
    //   errors.email = "Invalid email address";
    // }

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:5000/send', formData);
        console.log('Response:' , response.data);
        setErrors(null);
    } catch (error) {
        console.log('Error Submitted form:', error);
        setErrors(error);
    }
    setFormData({name: '', email: '', password: '', confirmPassword: ''})
    alert('Data submitted successfully');
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleInputChange,
        validateForm,
        handleSubmit,
        errors,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormData = () => useContext(FormContext);