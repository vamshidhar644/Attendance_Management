import React from 'react'
import { useNavigate } from 'react-router';
import './FacultyLogin.css'

function FacultyLogin() {
  const navigate = useNavigate();
  function back(){
      navigate("/")
  }
  
  const [FacultyData, setFacultyData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3001/loginFaculty/", {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}) 
       .then((res) => res.json())
        .then((data) => setFacultyData(data.data) );
  }, []);
  
  function login(){
    const FacultyUsername = document.getElementById("username").value;
    const FacultyPassword = document.getElementById("password").value;
    var status = 0;
    for(var index in FacultyData){
      if(FacultyUsername === FacultyData[index]['username'] && FacultyPassword === FacultyData[index]['password']){
        status++;
      }
    }
    if(status===1){
      navigate('/FacultyHome');
    }
  }

  return (
    <div className='cover'>
      <div className='container'>
        <h1>Login as <span >Faculty</span></h1>
        
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

export default FacultyLogin