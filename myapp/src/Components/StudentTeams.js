import Sidebar from "./SidebarStudent/Sidebar"
import TeamsView from "./TeamsView"
import '../App.css'

//teams component for the student
function StudentTeams(){
    return(
        <>
        <Sidebar/>
        <div className='studentteams'>
        <TeamsView/>
    </div>
    </>
    )
}

export default StudentTeams