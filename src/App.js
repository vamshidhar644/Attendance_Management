import './App.css';
import {Routes, Route} from 'react-router-dom';
import AdminLogin from './ProjectComponents/Logins/AdminLogin/AdminLogin';
import FacultyLogin from './ProjectComponents/Logins/FacultyLogin/FacultyLogin';
import StudentLogin from './ProjectComponents/Logins/StudentLogin/StudentLogin';
import Home from './Home'
import AdminHome from './ProjectComponents/HomePages/AdminHome/AdminHome'
import FacultyHome from './ProjectComponents/HomePages/FacultyHome/FacultyHome'
import StudentHome from './ProjectComponents/HomePages/StudentHome/StudentHome'
// import MyComponent from './ProjectComponents/Test/MyComponent'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/faculty' element={<FacultyLogin/>}/>
        <Route path='/student' element={<StudentLogin/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/FacultyHome' element={<FacultyHome/>}/>
        <Route path='/StudentHome' element={<StudentHome/>}/>
      </Routes>
    </div>
  );
}