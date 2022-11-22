import React from 'react';
import { useNavigate } from 'react-router';
import './AdminLogin.css'

function AdminLogin() {

  const navigate = useNavigate();
  function back(){
      navigate("/")
  }

  const [AdminData, setAdminData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3001/loginAdmin/", {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
       .then((res) => res.json())
        .then((data) => setAdminData(data.data) );
  }, []);
  
  function login(){
    console.log(AdminData)
    const AdminUsername = document.getElementById("username").value;
    const AdminPassword = document.getElementById("password").value;
    var status = 0;
    for(var index in AdminData){
      if(AdminUsername === AdminData[index]['username'] && AdminPassword === AdminData[index]['password']){
        status++;
      }
    }
    if(status===1){
      navigate('/AdminHome');
    }
  }

  return (
    <>
    <div className='cover'>
      <form className='container' action=''>
        <h1>Login as <span >Admin</span></h1>
        <input 
              type="text" 
              className='input-box username' 
              autoComplete='off'
              name='username' 
              id='username' 
              placeholder="Username" 
              required/>
        <input 
              type="password" 
              className='input-box password' 
              autoComplete="off" 
              name='password' 
              id='password' 
              placeholder="Password" 
              required />
        <div className='btns'>
          <button className='btnn' onClick={login}>LOGIN</button>
          <button className='btnn' onClick={back}>BACK</button>
        </div>
      </form>
    </div> 
    </>
  )
}

export default AdminLogin