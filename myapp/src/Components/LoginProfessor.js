import React, {useState} from 'react';
import LoginStudentForm from './LoginStudentForm'
import Sidebar from './SidebarProfessor/Sidebar'
import './LoginProfessor'
import './Loginform.css'
import Project from './Project';
import ProjectProfView from './ProjectProfView';

//component for professor log in
function LoginProfessor(){
    const adminUser = {
        email: "prof@ase.ro",
        password: "prof123"
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
        <div>
        {(user.email != "") ? (
      <div className = "welcome">
        <ProjectProfView/>
      </div>
    ): (
      <LoginStudentForm Login={Login} error={error}/>
    )}
    </div>
    </>
    )
}

export default LoginProfessor