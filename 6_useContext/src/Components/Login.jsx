import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";


const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const changeUserName = (e) => {
    setUserName(e.target.value);
  }
  
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  

  const handleSubmit = () => {
    setUser({userName, password})
  }

  return (
    <>
      <h2>Login Page : </h2>
      <input type="text" placeholder="Enter userName" value={userName} onChange={changeUserName}/>
      <input type="text" placeholder="Enter password" value={password} onChange={changePassword}/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
