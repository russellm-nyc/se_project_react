import React from "react";
import { useState } from "react";

function useForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };
  return <div>useForm</div>;
}
export default useForm;
