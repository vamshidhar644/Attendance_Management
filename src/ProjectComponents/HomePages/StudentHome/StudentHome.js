import React, {useEffect, useState, useRef} from 'react'
import './StudentHome.css';
import { useNavigate } from 'react-router-dom';

function StudentHome() {
  const navigate = useNavigate();
  function logout(){
      navigate("/");
  }
  return (    
    <div className='main-container'>
      <nav className='navbar'>
          <div className='navbar-nav'>
            <NavItem title="ATTENDANCE">
            <div className='menu-item'>
              <div className='dropdown'>
                <div className='dropdown-item'>My Attendance</div>
                <div className='dropdown-item'>Dashboard</div>
              </div>
            </div>
            </NavItem>
          </div>
          <div className='profile'>
            <div className='left-btns changePass'>Change Password</div>
            <div className='left-btns logout' onClick={logout}>Logout</div>
          </div>
      </nav>
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

export default StudentHome