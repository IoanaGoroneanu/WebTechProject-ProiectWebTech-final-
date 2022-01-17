import { useState } from 'react';

import React from 'react'
import Sidebar from './SidebarStudent/Sidebar';

//the function is used to set a grade for a project
function Grade() {
    const [grade, setGrade] = useState(""); 

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You have succesfully graded the project')
    }

    return (
        <>
        <Sidebar/>
        <div className="form-inner">
               <form onSubmit={handleSubmit}>
               <div className="form-group">
                   <h2 className='gradeproject'>grade a project</h2>
                   <label>select team</label>
                   <select>
                    <option value="Team 1">Team 1</option>
                    <option value="Team 2">Team 2</option>
                    <option value="Team 3">Team 3</option>
                    <option value="Team 4">Team 4</option>
                    <option value="Team 5">Team 5</option>
                    <option value="Team 6">Team 6</option>
                    <option value="Team 7">Team 7</option>
                    </select>
                </div>
                <div className="form-group">
                   <label>add grade</label>
                     <input type="text"
                 value={grade}
                 onChange={(e) => setGrade(e.target.value)}/>
                </div>
                <br/>
                 <button type="submit">Submit</button>
                    </form>
                    </div>
                    </>
    )
}

export default Grade
