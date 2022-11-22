import React from 'react'
import { useNavigate } from 'react-router';
import './StudentLogin.css'

function StudentLogin() {
  const navigate = useNavigate();
  function back(){
      navigate("/")
  }
  
  const [StudentData, setStudentData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3001/loginStudent/", {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
       .then((res) => res.json())
        .then((data) => setStudentData(data.data) );
  }, []);
  
  function login(){
    const StudentUsername = document.getElementById("username").value;
    const StudentPassword = document.getElementById("password").value;
    var status = 0;
    for(var index in StudentData){
      if(StudentUsername === StudentData[index]['username'] && StudentPassword === StudentData[index]['password']){
        status++;
      }
    }
    if(status===1){
      navigate('/StudentHome');
    }
  }

  return (
    <div className='cover'>
      <div className='container'>
        <h1>Login as <span >Student</span></h1>
        
        <input type="text" className='input-box username' name='username' id='username' placeholder="Username" required/>
        <input type="password" className='input-box password' name='password' id='password' placeholder="Password" required/>
        <div className='captcha'>

        </div>
        <div className='btns'>
          <button className='btnn' onClick={login}>LOGIN</button>
          <button className='btnn' onClick={back}>BACK</button>
        </div>
      </div>
    </div> 
  )
}

export default StudentLogin