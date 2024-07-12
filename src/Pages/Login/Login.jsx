import React from "react";
import "./Login.css";
import CommonInput from "../../Common/Input/Input";

const Login = () => {
  const Field = ["Email", "Password"];
  return (
    <div className="LoginContainer">
      <div className="LoginBox">
       <div className="inputBoxContainer">
       {Field.map((field, index) => (
          <CommonInput key={index} className="InputField" placeholder={field} />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Login;
