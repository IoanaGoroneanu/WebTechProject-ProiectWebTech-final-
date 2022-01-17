import React from 'react'
import Sidebar from './SidebarProfessor/Sidebar'
import GradesView from './GradesView'
import '../App.css'

//teams component for the professor
function Teams() {
    
    return (
        <>
        <Sidebar/>
        <div className='teamsprof'>
            <GradesView/>
        </div>
        </>
    )
}

export default Teams
