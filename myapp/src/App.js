
import React, {useState} from 'react';
import LoginStudent from "./Components/LoginStudent"
import Project from './Components/Project';
import StudentTeams from './Components/StudentTeams';
import Homepage from './Homepage'
import LoginProfessor from './Components/LoginProfessor'
import Teams from './Components/Teams';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import Sidebar from './Components/SidebarStudent/Sidebar';
import ProjectProfView from './Components/ProjectProfView';
import StudentProjectForm from './Components/StudentProjectForm';
import Submit1 from './Components/Submit1';
import Grade from './Components/Grade';


function App() {

  return (
    <Router>
    <>
    <switch>
        
        <Route path='/project' exact component={Project}/>
        <Route path='/studentteams' exact component={StudentTeams}/>
        <Route path='/loginstudent' exact component={LoginStudent}/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/loginprofessor' exact component={LoginProfessor}/>
        <Route path='/teams' exact component={Teams}/>
        <Route path='/studentprojects' exact component={ProjectProfView}/>
        <Route path='/upload' exact component={Submit1}/>
        <Route path='/addgrade' exact component={Grade}/>
    </switch>
    <div>
    </div>
    </>
    </Router>

  );
}


export default App;
