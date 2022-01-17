import React from 'react'
import Sidebar from './SidebarProfessor/Sidebar'
import ProjectDetailsProf from './ProjectDetailsProf'
import '../App.css'

//project component for the professor
function ProjectProfView() {
    return (
        <>
        <Sidebar/>
        <ProjectDetailsProf/>
        </>
    )
}

export default ProjectProfView
