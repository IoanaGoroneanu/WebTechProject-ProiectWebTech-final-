import React from 'react'
import { teamsData } from './teams-data';
import './css/Teams.css'

//project component for the professor, where they see the teams and the projects
function ProjectDetailsProf() {
    const openLink = () => {
        teamsData.map((data, key) => {
            window.open(data.link);
        })
    }

    return (
       <>
       <div className="teams-container">
           <h2>Teams</h2>
           {teamsData.map((data, key) => {
               return (
                   <>
                   <div key={key}>
                       {
                           data.teamName +
                           " , " +
                           data.tm1 +
                           " , " +
                           data.tm2 +
                           " , " +
                           data.tm3
                       }
                       <br/>
                       <button onClick={openLink}>Open project link</button>
                   </div>
                    
                    </>
               )
           })}
       </div>
       </>
       )
}

export default ProjectDetailsProf
