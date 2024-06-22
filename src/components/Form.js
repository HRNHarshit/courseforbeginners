import React from "react";
import { useForm } from "react-router-dom";

const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Full Name..." />
        <input type="email" placeholder="Email..." />
        <input type="text" placeholder="Age..." />
        <input type="password" placeholder="Password..." />
        <input type="password" placeholder="Confirm Password..." />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
