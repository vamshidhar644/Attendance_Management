import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import AdminLogin from './ProjectComponents/Logins/AdminLogin/AdminLogin';
import FacultyLogin from './ProjectComponents/Logins/FacultyLogin/FacultyLogin';
import StudentLogin from './ProjectComponents/Logins/StudentLogin/StudentLogin';
import App from './App'
import AdminHome from './ProjectComponents/HomePages/AdminHome/AdminHome'
import FacultyHome from './ProjectComponents/HomePages/FacultyHome/FacultyHome'
import StudentHome from './ProjectComponents/HomePages/StudentHome/StudentHome'
import Navibar from './ProjectComponents/Navbar';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>   
    <Navibar/>     
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/faculty' element={<FacultyLogin/>}/>
        <Route path='/student' element={<StudentLogin/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/FacultyHome' element={<FacultyHome/>}/>
        <Route path='/StudentHome' element={<StudentHome/>}/>
      </Routes>
    </BrowserRouter>
    // <App2/>
);