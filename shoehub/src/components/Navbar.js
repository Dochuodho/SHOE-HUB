
import { NavLink } from "react-router-dom"; 
import { BsFillHouseHeartFill } from 'react-icons/bs'
import { FaTruckMoving } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { LuLogIn } from 'react-icons/lu'
import { LuLogOut } from 'react-icons/lu'
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoePrints } from 'react-icons/fa'
import {  GiRunningShoe, GiConverseShoe } from 'react-icons/gi'

import { FaUser } from 'react-icons/fa'
import './Navbar.css'



function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated, setShow} = useAuth0();
  return (
    <>
    <div className="free">
     
        <div className='icons'>
          
        <FaTruckMoving /> 
        </div>
        <p>Call Us For Delivery</p>
      </div>
      <div className='topheader'>
        <div className='container'>
          <div className='logo'>
            <strong>SHOE-HUB<GiRunningShoe /><FaShoePrints /><GiConverseShoe /></strong>
          </div>
          
          <div className='icon'>
            {
            
              isAuthenticated &&
              (
                <div className='account'>
                <div className='iconuser'>
                <FaUser />
                
                <p>Hello, {user.name}</p>
                </div>
                </div>

              )
            }
            
              
                <div className='icon2'>
                  <NavLink to="/" className='routelink' onClick={()=>setShow(true)}>Home<BsFillHouseHeartFill /></NavLink>
                  <NavLink to="/cart" className='routelink' onClick={()=>setShow(false)}>Cart<FaShoppingBag /></NavLink>
                </div>
              </div>
           
          </div>

        </div>
        <div className='header-container'>
          
          <div className='container'>
            <div className='menu'>
              <ul>
              <li>
                <NavLink to='/'>Home</NavLink>

              </li>
              <li>
                <NavLink to='/product'>View products</NavLink>

              </li>
              <li>
                <NavLink to='/about'>About Us</NavLink>

              </li>
              <li>
                <NavLink to='/contacts'>Contacts</NavLink>

              </li>
              </ul>

            
          </div>
          <div className='authentication-container'>
            {
              isAuthenticated ? 
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout<LuLogOut /></button>
              :
              <button onClick={() => loginWithRedirect()}>Login<LuLogIn /></button>
            }
            
            
          </div>
            
          </div>
         

        </div>
        
    </>
  );
}

export default Navbar;