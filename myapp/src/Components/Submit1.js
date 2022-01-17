import React, {useState} from 'react'
import Sidebar from './SidebarStudent/Sidebar';
import './css/StudentProjectForm.css'

//form where students can upload their project links
function Submit1() {
    const[link1, setLink1] = useState("");

    const handleSubmitLink1 = (event) => {
        event.preventDefault();
        alert('You have submited the project')
    }

    return (
        <div>
            <Sidebar/>
             <div className='upload'>
                    <div className='uploadform'>
                    <form onSubmit={handleSubmitLink1}>
                    <div className="form-inner">
                        <h2>Submit the link to the project</h2>

                    <div className="form-group"> 
                    <label>deadline</label>
                   <select>
                    <option value="Deadline 1">Deadline 1</option>
                    <option value="Deadline 2">Deadline 2</option>
                    <option value="Deadline 3">Deadline 3</option>
                   </select></div> 
                    
                   <div className="form-group">
                        <label>project link</label>
                            <input type="text"
                            value={link1}
                            onChange={(e)=> setLink1(e.target.value)}/>
                    </div>
                        <br/>
                        <button type="submit">Submit</button>
                   </div> 
                   </form>
                    </div>
            </div>
        </div>
    )
}

export default Submit1
