import React, {useState} from "react";
import { FiHome, FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import Messenger from '../messager/Messenger'
import {
  MdSubscriptions,
  MdNotificationsActive,
} from "react-icons/md";
import MarketPlace from '../../assets/marketplace.png'
import {TiGroup} from 'react-icons/ti'
import { BsMessenger } from 'react-icons/bs'
import { MdArrowDropDown, MdGroup,MdOutlineGroup } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrAdd } from "react-icons/gr";
import {NavLink, useLocation } from 'react-router-dom'


import "./Header.css";

function Header() {
  const [msg, setMsg] = useState('')
  const [groups, setGroups] = useState('')
  let location = useLocation('')


  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt="FB-Logo"
        />
        <div className="header__input">
          <FiSearch />
          <input
            type="text"
            placeholder="search facebook"
            className="header__input__text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__collect">
          <NavLink to="/">{
            location.pathname === '/' ? <AiFillHome /> : <FiHome />
          }
          </NavLink>
          <NavLink to='/groups' >{
            location.pathname === '/groups' ? <MdGroup /> : <MdOutlineGroup />
          }</NavLink>
          <MdSubscriptions />
          <img src={MarketPlace} alt="" className="header-marketPlace" />
          <TiGroup />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <CgProfile />
          <GrAdd />
          <div className="play" >
           <BsMessenger onClick={() => setMsg(!msg)}/>
            {
              msg ? <Messenger/> : <> </>
            }
          
        </div>
          <MdNotificationsActive />
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
