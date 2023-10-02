import React from "react";

const Input = ({handleChange,name,isInvalid,invalidEmail,placeholder}) => {
   
   return (
      <div className="mb-4">
         <input onChange={handleChange} value={name} type="text" placeholder={placeholder} className={`border ${isInvalid?"border-red":"border-liteGray"}  py-2 px-4 w-full  validateMe`} />
         {isInvalid && <span className="text-red">
            {invalidEmail ? "Invalid email format. Example: abc@gmail.com":"Please check your email"}
            </span>}
      </div>
   );
};

export default Input;
