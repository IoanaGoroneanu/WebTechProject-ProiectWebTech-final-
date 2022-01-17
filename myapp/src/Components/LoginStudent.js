import React, {useState} from 'react';
import LoginStudentForm from './LoginStudentForm'
import Sidebar from './SidebarStudent/Sidebar';
import './Loginform.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Project from './Project'
import StudentTeams from './StudentTeams';


//login component for the student
function LoginStudent(){
    const adminUser = {
        email: "ioana@ase.ro",
        password: "ioana123"
    }

    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");

    const Login=details=>{
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password)
   {
     console.log("Logged id");
     setUser({
       email: details.email
     })
   }
   else{
     console.log("Details do not match")
     setError("Details do not match")
   }
    }

    const Logout = () => {
        setUser({email: ""});
    }

    return(
        <>
        {(user.email != "") ? (
      <div className = "welcome">
        <Project/>
      </div>
    ): (
      <LoginStudentForm Login={Login} error={error}/>
    )}
    </>
    )
}

export default LoginStudent