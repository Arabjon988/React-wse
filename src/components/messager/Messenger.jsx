import React from 'react'
import "./Messenger.css"
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { FiEdit, FiSearch } from 'react-icons/fi'
import Messange from '../../data/Contact-data.json'




function Messenger() {
  return (
    <div className="messange">
      <div className="messange-header">
        <h3>Messenger</h3>
        <div className="messege-icons">
          <BiDotsHorizontalRounded />
          <RiVideoAddFill />
          <FiEdit />
        </div >
      </div>
      <div className="messange-search">
        <FiSearch />
        <input type="text" placeholder="Search on Messanger" />
      </div>
      <div className="messange-person">
        {
          Messange?.map((msg) => (
            <div className="msg-person">
              <img src={msg?.url} alt="" className="msg-person-logo" />
              <div className="msg-person-info">
                <h3>{msg?.name}</h3>
                <p>{msg?.title}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Messenger
