import React from 'react'
import './Contact.css'
import { RiVideoAddFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import Contact_Data from '../../data/Contact-data.json'

function Contact() {
    return (
        <div className='contact'>
            <div className="contact-container">
                <div className="contact-wrapper">
                    <p>Contact</p>
                    <div className="contact-icons">
                        <RiVideoAddFill />
                        <FiSearch />
                        <BsThreeDots />
                    </div>
                </div>
                <div className="contact-info">
                        {
                            Contact_Data?.map((person) => (
                                <div className="person-collect">
                                    <div className="person-info">
                                        <img src={person?.url} alt="" className="person-logo" />
                                        <p>{person.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default Contact
