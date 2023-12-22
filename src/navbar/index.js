import React, {useEffect, useState} from 'react'; 
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiLogoJquery } from "react-icons/bi";
import './index.css' 

const Navbar = () =>{
    const [showDropdown, setShowDropdown] = useState(false);
    const [notificationCount,setNotificationCount] = useState(0);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setNotificationCount(0);
    };  
    useEffect(()=>{
      const intervalId = setInterval(()=>{
           setNotificationCount((prevCount) => prevCount+1);
      },60000); 
      return() => clearInterval(intervalId);
    },[]);
    
    return(
    <div className="navbar">
      <div className="left-side">
        <div className="logo"><BiLogoJquery size={35}/></div>
        <div className="nav-items">
          <a href="#">Dashboard</a>
          <a href="#">Team</a>
          <a href="#">Project</a>
          <a href="#">Calendar</a>
        </div>
      </div>
      <div className="right-side">
        <div className="notification">
          <IoIosNotificationsOutline size={25}/> 
          {notificationCount > 0 && (
            <span className='notification-indicator'>{notificationCount}</span>
          )}
        </div>
        <div className="user-profile" onClick={toggleDropdown}>
          <FaRegUserCircle size={25}/>
          {showDropdown && (
            <div className="dropdown">
              <a href="#">Your Profile</a>
              <a href="#">Settings</a>
              <a href="#">About</a>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}
export default Navbar;