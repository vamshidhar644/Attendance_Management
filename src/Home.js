import { useNavigate } from 'react-router';
import './App.css';
import './Home.css';
import {RiAdminLine} from 'react-icons/ri'
import {GiTeacher} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'

export default function App() {

    const navigate = useNavigate();

    function ToAdmin(){
        navigate("/admin")
    }
    function ToFaculty(){
        navigate("/faculty")
    }
    function ToStudent(){
        navigate("/student")
    }
  return (
    <div className='home-body'>
    <h1 className='top-head'>Student Attendance Management System</h1>
    <div className="App">
      <h3>Login as:</h3>
      <div className='buttons'>
          <div className='card admin' onClick={ToAdmin}>
            <RiAdminLine className='icon'/>
            <h5>ADMIN</h5>
          </div>
          <div className='card faulty' onClick={ToFaculty}>
            <GiTeacher className='icon'/>
            <h5>FACULTY</h5>
          </div>
          <div className='card student' onClick={ToStudent}>
            <FaUserGraduate className='icon'/>
            <h5>STUDENT</h5>
          </div>
      </div>
      <h2 className='myname'> VAMSHIDHAR DAWOOR</h2>
    </div>
    </div>
  );
}