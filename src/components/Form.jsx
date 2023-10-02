import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ btnText,placeholder,styles,moveBtn }) => {
   const [name, setName] = useState("");
   const [isInvalid, setIsInvalid] = useState(false);
   const [invalidEmail, setInvalidEmail] = useState(false);

   const handleChange = (e) => {
      setName(e.target.value);
   };
   //pass all props to input as an object
   const stateBundle = { name, isInvalid, invalidEmail, handleChange,placeholder };

   //check for valid entries
   const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "") {
         setIsInvalid(true);
      } else {
         const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name);
         emailValidate(isValidEmail);
      }
   };

   const emailValidate = (checkMe) => {
      if (!checkMe) {
         setIsInvalid(true);
         setInvalidEmail(true);
      } else {
         setIsInvalid(false);
         setInvalidEmail(false);
      }
   };
   return (
      <form id="myForm" className={styles} onSubmit={handleSubmit}>
         <Input {...stateBundle} />
         <Button text={btnText} moveBtn={moveBtn} />
      </form>
   );
};

export default Form;
