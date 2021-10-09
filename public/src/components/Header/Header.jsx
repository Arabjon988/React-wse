import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi'
import { FiAirplay } from 'react-icons/fi'
import {VscHome} from 'react-icons/vsc'
import {NavLink} from 'react-router-dom'
import { TiGroup } from 'react-icons/ti'
import './Header.css'
function Header() {
    return (
        <div className="header">
             <img src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png" alt="" />
             <div className="input">
                 <IoSearchOutline />
                 <input type="text" placeholder="Serach Facebook" />
             </div>
                <div className="HomeHeader">
                    <div className="home">
                  <NavLink to="/">
                    <VscHome/>
                  </NavLink>
                  </div>
                  <div className="user">
                  <NavLink to="/">
                    <HiOutlineUsers/>
                  </NavLink>
                  </div>
                  <div className="play">
                  <NavLink to="/">
                    <FiAirplay/>
                  </NavLink>
                  </div>
                  <div className="grup">
                  <NavLink to="/">
                    <TiGroup/>
                  </NavLink>
                  </div>
                </div>
 
        </div>
    )
}

export default Header
