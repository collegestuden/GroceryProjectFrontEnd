import React from 'react';
import "./Form.css"
function Form() {
    return ( 
        <div className="bb">
        <div className='box'><center>
        <form>
            <h1>Register</h1>           
            <div className='row' >
                <label>User Name : </label>
                <br></br>
                <input type="text" id='username' placeholder='User Name'style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}/>
            </div>
            <div className='row'>
                <label>E-mail : </label><br></br>
                <input type="email" id='email' placeholder='Email-id' style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}
                    />
            </div>
            <div className='row'>
                <label>Phone Number : </label><br></br>
                <input type="number" id='email' placeholder='PhoneNumber' style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"10px"}}
                    />
            </div>
            <div className='row'>
                <label>Password : </label><br></br>
                <input type="password" id='password' 
                placeholder='Password'style=
                {{height :"30px",width:"280px",
                marginTop:"15px",borderRadius:"10px"}}
                    />
            </div>
            <div >
                <button className='submit' 
                style={{height :"30px",width:"120px"
                ,marginTop:"15px",borderRadius:"20px"
                ,marginBottom:"10px"}}></button>
            </div>
        </form></center>
        </div>
        </div>
    );
}
export default Form