import React, {  useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import FormInput from './FormInput'
import './Sign.css' 
const SignUp = () => {   
  const[values,setValues]=useState({
    username:"",
    email:"",
    password:""
    
  });
 
  const inputs=[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 Characters and shouldn't include any special character!",
    label:"Username",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be valid Email address!",
    label:"Email",
    required:true
  },
 
  {
    id:5,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special Character!", 
    label:"Password",
    pattern: `^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required:true
  },
  

  ]
const handleSubmit=(e)=>{
  e.preventDefault();
 

  axios.post('http://127.0.0.1:8080/addPass', values);

  
  
};
const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value});
};
console.log(values);
  return (<div className='wrapp'>
    <div className='ap'>
        <form onSubmit={handleSubmit} className='for'><div className='reg'>
        <h1 className='h'>Login</h1>
          {
            inputs.map((input)=>(

              <FormInput 
              key={input.id} {...input} 
              value={values[input.name]} 
              onChange={onChange} />
            ))
          }
            
          <a><Link to="/Main"><button className='signbttn'>Submit</button></Link></a>
            <h5>Forgot Password?</h5>
            <a><Link to="/Reg"> <a href="#">Register...</a></Link></a>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SignUp