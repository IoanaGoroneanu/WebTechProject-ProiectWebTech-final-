import Sidebar from "./SidebarStudent/Sidebar"
import {Link} from "react-router-dom"
import React from 'react';
import StudentProjectForm from "./StudentProjectForm";

//project component for the student
function Project(Submit, error){
    return(
       <>
       <Sidebar/>
        <div className='project'>
            <StudentProjectForm/>
        </div>
       </>
    )
}

export default Project