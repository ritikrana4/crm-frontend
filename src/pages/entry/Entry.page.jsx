import React, { useState } from "react";
import "./Entry.style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Login } from "../../components/login/Login.component";
import { PasswordReset } from "../../components/password-reset/PasswordReset.component";


export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form,setForm] = useState("login");
  
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fill up all the details");
    }
    //call login api
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Fill up all the details");
    }
    //call password reset  api
  };

  const formSwitcher = (formtype)=>{
      setForm(formtype);
  }
  
  return (
    <div className="entry-page bg-info">
      <Jumbotron>
       {(form === 'login') &&
        (<Login
          handleOnchange={handleOnchange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          password={password}
          formSwitcher = {formSwitcher}
          />)
        }
       {(form ==='passwordreset') && (<PasswordReset
       handleOnchange={handleOnchange}
       handleOnResetSubmit={handleOnResetSubmit}
       email={email}
       formSwitcher = {formSwitcher} />)}
      </Jumbotron>
    </div>
  );
};
