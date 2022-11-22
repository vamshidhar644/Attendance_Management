import React, {useEffect, useRef, useState} from 'react'
import './AdminHome.css';
import { useNavigate } from 'react-router-dom';

import AddFaculty from './Faculty/AddFaculty/AddFaculty'
import RemoveFaculty from './Faculty/RemoveFaculty/RemoveFaculty';
import UpdateFaculty from './Faculty/UpdateFaculty/UpdateFaculty';

import AddStudent from './Student/AddStudent/AddStudent'
import UpdateStudent from './Student/UpdateStudent/UpdateStudent'
import RemoveStudent from './Student/RemoveStudent/RemoveStudent'

function AdminHome() {
  const navigate = useNavigate();
  function logout(){
      navigate("/");
  }
  const [active, setActive] = useState("AddFaculty");
  
  return (    
    <div className='main-container'>
      <nav className='navbar'>
          <div className='navbar-nav'>
            <NavItem title="FACULTY">
              <div className='menu-item'>
                <div className='dropdown'>
                  <div className='dropdown-item' onClick={() => setActive("AddFaculty")}>Add Faculty</div> 
                  <div className='dropdown-item' onClick={() => setActive("UpdateFaculty")}>Update Faculty</div>
                  <div className='dropdown-item' onClick={() => setActive("RemoveFaculty")}>Remove Faculty</div>
                </div>
              </div>
            </NavItem>

            <NavItem title="STUDENT">
              <div className='menu-item'>
                <div className='dropdown'>
                  <div className='dropdown-item' onClick={() => setActive("AddStudent")}>Add Student</div>
                  <div className='dropdown-item' onClick={() => setActive("UpdateStudent")}>Update Student</div>
                  <div className='dropdown-item' onClick={() => setActive("RemoveStudent")}>Remove Student</div>
                </div>
              </div>
            </NavItem>
          </div>
          <div className='profile'>
            <div className='left-btns changePass'>Change Password</div>
            <div className='left-btns logout' onClick={logout}>Logout</div>
          </div>
      </nav>
      <h1 align="CENTER">WELCOME !</h1>
      <div className='body-container'>
        <div className='duty'>
            {active === "AddFaculty" && <AddFaculty/>}
            {active === "UpdateFaculty" && <UpdateFaculty/>}
            {active === "RemoveFaculty" && <RemoveFaculty/>}  

            {active === "AddStudent" && <AddStudent/>}
            {active === "UpdateStudent" && <UpdateStudent/>}
            {active === "RemoveStudent" && <RemoveStudent/>}
        </div>
      </div>
    </div>
  );
}

function NavItem(props){
  const ref = useRef()
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const checkOutside = e => {
      if (dropdown && ref.current && !ref.current.contains(e.target)){
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', checkOutside)

    return () => {
      document.removeEventListener('mousedown', checkOutside)
    }
  }, [dropdown])

  return(

    <div className='nav-items' ref={ref}>
      <div className='title-btn' 
          onClick={() => setDropdown(oldState => !oldState)}
          >
        {props.title}
      </div>
      {dropdown ? props.children : null}
    </div>
  );
}

export default AdminHome