import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import { IoSettingsSharp } from 'react-icons/io5'
import { IoSettings } from 'react-icons/io5'
import friends from '../../assets/fir.png'
import {FiUserMinus} from 'react-icons/fi'
import './Friend.css'
import FriendFeed from './FriendFeed/FriendFeed'
import PeopleKnow from './PeopleKnow/PeopleKnow'
import {NavLink} from 'react-router-dom'
function Friends() {
    const [openFriend, setOpenFriend] = useState(false)
    
    return (
        <div className="friend">
            <Header/>
          
            <div className="bigDivFriend">
            <div className="saidbarFriend">
                <div className="frienHeader">
                    <h2>Friends</h2>
                    <div className="settings" onClick={() => setOpenFriend(!openFriend)}>
                    {
                        openFriend ?  <IoSettingsSharp/>  : <IoSettings/>
                    }
                
                    </div>
                    <div className={openFriend ?  "SettingDivFriend" : "xecnima"}  >
                          <h4>Notification Settings</h4>
                          <p>You can manage how you are notified about Friends updates.</p>
                         <div className="line"></div>
                         <div className="checkbox">
                         <h4>Show notlifiction dots</h4>
                         <input type="checkbox" />
                         </div>
                       </div>
                </div>
                <div className="HomeFriend">
               <img src={friends} alt="" />
               <h2>Home</h2>
            </div>
            <div className="FriendRequests">
                <div className="userfirend"><FiUserMinus/></div>
                <NavLink to="/SuggestFriend">
                <h3>Friend Requests</h3>
                </NavLink>
            </div>
            <div className="FriendRequests">
                <div className="userfirend"><FiUserMinus/></div>
                <NavLink to="/SuggestFriend">
                <h3>Seggestions</h3>
                </NavLink>
            </div>
            <div className="FriendRequests">
                <div className="userfirend"><FiUserMinus/></div>
                <NavLink to="/SuggestFriend">
                <h3>All Friend</h3>
                </NavLink>
            </div>
            <div className="FriendRequests">
                <div className="userfirend"><FiUserMinus/></div>
                <NavLink to="/SuggestFriend">
                <h3>Brithdays</h3>
                </NavLink>
             </div>
            <div className="FriendRequests">
                <div className="userfirend"><FiUserMinus/></div>
               <NavLink to="/SuggestFriend">
                <h3>Custom List</h3>
                </NavLink>
            </div>
            </div>
               <div className="wrapperFriend">
                    <div className="frienrequests">
                        <div className="highheader">
                           <h2>Friend Requests</h2>
                           <NavLink to="/SuggestFriend">
                           <p>Sell All </p>
                           </NavLink>
                        </div>
                        <FriendFeed/>
                    </div>
                    <div className="lineFriend"></div>
                    <div className="PeopleMayKnow">
                        <div className="TwoPoepleKnow">
                        <h2>People You May Know</h2>
                        <p>Sell All</p>
                        </div>
                       <PeopleKnow/>                        
                    </div>
               </div>

            </div>
        </div>
    )
}

export default Friends
