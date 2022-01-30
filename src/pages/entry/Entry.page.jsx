import React, { useState } from "react";
import "./Entry.style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Login } from "../../components/login/Login.component";
export const Entry = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const handleOnchange = (e) =>{
    const {name,value} = e.target;
    switch(name){
      case 'email': setEmail(value)
       break
      case 'password' : setPassword(value)
       break
      default : break
    }

  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password){
      alert("Fill up all the details")
    }
    //call login api
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron>
        <Login handleOnchange={handleOnchange} handleOnSubmit={handleOnSubmit} email={email} password={password}  />
      </Jumbotron>
    </div>
  );
};
