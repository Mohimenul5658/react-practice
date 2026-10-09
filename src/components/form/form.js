import React, { useState } from 'react';
import style from "./form.module.css";

export default function Form() {

  const [user, setUser] = useState({name:'', email: '', password:''})
  const {name, email, password} = user;

  const handleChange = (e) =>{
    // const fieldName = e.target.name;
    // if(fieldName === 'name'){
    //   setUser({name: e.target.value, email, password});
    // }
    // else if(fieldName === 'email'){
    //   setUser({name, email: e.target.value, password});
    // }
    // else{
    //   setUser({name, email, password: e.target.value});
    // }
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("form is submitted");
    console.log(user);
    
  }
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <div className={style.formGroup}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' value={name} onChange={handleChange} id='name' placeholder='enter your name' required/>
        </div>
        <div className={style.formGroup}>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' value={email} onChange={handleChange} id='email' placeholder='@example.com' required/>
        </div>
        <div className={style.formGroup}>
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password} onChange={handleChange} id='password' placeholder='enter your password' required/>
        </div>
        <button type='submit' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}
