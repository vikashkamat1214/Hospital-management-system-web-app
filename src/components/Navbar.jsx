import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Context } from '../main';
import { toast } from "react-toastify";
import axios from 'axios';
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {

  const [show, setShow] = useState(false);
  const {isAuthenticated} = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async () => {
  
         await axios.get(
          "http://localhost:4000/api/v1/user/patient/logout", 
          {withCredentials:true}).then(res => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      
  };
 

  const goToLogin = () => {
    navigateTo("/login");
  };
  

  return (
    <>
    <nav className='container'>
      <div className="logo">ZeeCare</div>
      <div className={show ? "navLinks showmenu":"navLinks"}>
         <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT US</Link>
          <Link to={"/appointment"}>APPOINTMENT</Link>
         </div>
         {isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button>) : (<button className='loginBtn btn' onClick={goToLogin}>LOGIN</button>)}
      
      </div>
      <div className='hamburger' onClick={()=>setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
