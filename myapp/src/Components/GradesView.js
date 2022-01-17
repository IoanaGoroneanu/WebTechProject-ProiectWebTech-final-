import React from 'react'
import { teamsData } from './teams-data'
import './css/Teams.css'

//component for the professor, where they can see the grades
function GradesView() {
    
    return (
        <>
        <div className="teams-container">
            
            <h2>Project Grades</h2>
        {teamsData.map((data, key) => {
            return (
                <>
                <div key={key}>
                    {
                        data.teamName + " - grade: " + data.grade
                    }
                </div>
                 </>
            )
        })}
       
        
    </div>
    <br/>

</>
    )
}

export default GradesView
