import React, {useEffect, useState, useRef} from 'react'
import './FacultyHome.css';
import { useNavigate } from 'react-router-dom';
import PostAttendance from './PostAttendance/PostAttendance'

function FaultyHome() {
  const navigate = useNavigate();
  function logout(){
      navigate("/");
  }
  return (    
    <div className='main-container'>
      <nav className='navbar'>
          <div className='navbar-nav'>
          </div>
          <div className='profile'>
            <div className='left-btns changePass'>Change Password</div>
            <div className='left-btns logout' onClick={logout}>Logout</div>
          </div>
      </nav>
      <div className='duty-container'>
        <div className='duty'>
            <PostAttendance/>
        </div>
      </div>
    </div>
  );
}

export default FaultyHome