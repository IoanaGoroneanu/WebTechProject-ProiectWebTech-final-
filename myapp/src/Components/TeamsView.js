import React, {useState} from 'react'
import { teamsData } from './teams-data'
import {Link} from "react-router-dom"
import './css/Teams.css'

//component where students can grade other projects
function TeamsView() {

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
                           " : " +
                           data.tm1 +
                           " , " +
                           data.tm2 +
                           " , " +
                           data.tm3
                       }
                       <br/>
                       <button className='projectlink' onClick={openLink}>Open project link</button>
                   </div>
                    
                    </>
               )
           })}
               <h2>
                <Link to="/addgrade">Grade a project</Link>
                </h2>
       </div>

       
       </>
    )
}

export default TeamsView
