import {Link} from "react-router-dom"
import './App.css'

function Homepage(){
    return(
        <div className="containerhome">
        <div className="firstpage">
            Grading App
        </div>
        <div className='homepage'>
        <Link to="/loginstudent">LOGIN AS STUDENT</Link>
        <br/>
        <Link to="/loginprofessor">LOGIN AS PROFESSOR</Link>
    </div>
    </div>
    )
}

export default Homepage