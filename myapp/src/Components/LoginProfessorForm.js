import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginform.css'

//login form for professor
function LoginProfessorForm({Login, error}) {
   
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    function submitHandler(e){
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
            </div>
            <input type="submit" value="LOGIN"/>
        </form>
        
    )
}

export default LoginProfessorForm;