import {Link} from "react-router-dom"
import React, { useState , Component, props} from 'react';
import './css/StudentProjectForm.css'
import Submit1 from "./Submit1";

//project form for the student, where they submit their team and they set the deadlines for their project
function StudentProjectForm(){
    const [name, setName] = useState("");
    const [ddl1, setDdl1] = useState("");
    const [ddl2, setDdl2] = useState("");
    const [ddl3, setDdl3] = useState("");
    const [tm1, setTM1] = useState("");
    const [tm2, setTM2] = useState("");
    const [tm3, setTM3] = useState("");   

    const[link1, setLink1] = useState("");
    const[link2, setLink2] = useState("");
    const[link3, setLink3] = useState("");
   
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You have submited the project form')
    }

    const handleSubmitLink1 = (event) => {
        event.preventDefault();
        alert('You have submited the project for the first deadline')
    }

    const handleSubmitLink2 = (event) => {
        event.preventDefault();
        alert('You have submited the project for the second deadline')
    }

    const handleSubmitLink3 = (event) => {
        event.preventDefault();
        alert('You have submited the project for final deadline')
    }

    const displayForm=()=> {
        console.log('lala')
        return(
            <div>
                
            </div>
        )
    }


    const [data, setData] = React.useState(null);

    return (
        <div className="projectform">
    
            <form onSubmit={handleSubmit}>
            <div className="form-inner">
                <h2>team and project details</h2>
            <div className="form-group"> 
                <label>Team name</label>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>
                <br/>
                <div className="form-group"> 
                <label>Team member 1
                </label> <input type="text"
                    value={tm1}
                    onChange={(e) => setTM1(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group"> 
                <label>Team member 2</label>
                <input type="text"
                    value={tm2}
                    onChange={(e) => setTM2(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group"> 
                <label>Team member 3</label> 
                <input type="text"
                    value={tm3}
                    onChange={(e) => setTM3(e.target.value)}/>
                <div/>
                <br/>
                <div className="form-group"> 
                <label>Deadline 1  </label> 
                <input type="text"
                    value={ddl1}
                    onChange={(e) => setDdl1(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group"> 
                <label>Deadline 2</label>
                <input type="text"
                    value={ddl2}
                    onChange={(e) => setDdl2(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group"> 
                <label>Deadline 3</label>
                <input type="text"
                    value={ddl3}
                    onChange={(e) => setDdl3(e.target.value)}/>
                </div>
                <br/>
                <button type="submit">Submit</button> 
                <br/>
                <h2>
                <Link to="/upload">upload project</Link>
                </h2>
                </div>

                </div>
                </form>
            

            <br/>
            


        </div>
            
    )
    }

export default StudentProjectForm
