import React, { useState } from 'react'
import { IoSettingsSharp } from 'react-icons/io5'
import { IoSettings } from 'react-icons/io5'
import Header from '../Header/Header'
import './Groups.css'
import GruopsFeed from './GruopsFeed/GruopsFeed'
function Groups() {
    const [openGroups, setOpenGroups] = useState(false)
    return (
        <div className="groups">
            <Header />

            <div className="BigGrops">
                <div className="GroupsSaidbar">
                    <div className="GroupsHeaderSaidbar">
                        <h2>Groups</h2>
                        <div className="GroupsSettings" onClick={() => setOpenGroups(!openGroups)}>
                            {
                                openGroups ? <IoSettingsSharp /> : <IoSettings />
                            }

                        </div>
                        <div className={openGroups ? "SettingDivGroups" : "nimadur"}  >
                            <h4>Notification Settings</h4>
                            <p>You can manage how you are notified about Friends updates.</p>

                            <div className="nnn">
                                <div className="checkbox">
                                    <h4>Show notlifiction dots</h4>
                                    <input type="checkbox" />
                                </div>
                            </div>
                            <div className="Customize">
                                <div className="GroupsSettings2">
                                    <IoSettingsSharp />
                                </div>
                                <h3>Customize Notifictions</h3>

                            </div>

                            <div className="line2"></div>
                            <div className="manage">
                                <h3>Manage Groups</h3>
                                <p>You can manage all the groups you are a member of at once.</p>
                                <div className="Pings">
                                    <div className="GroupsSettings2">
                                        <IoSettings />
                                    </div>
                                    <div className="textgroups">
                                        <h4>Pins</h4>
                                        <p>Pin your favorite groups for quick access.</p>
                                    </div>
                                </div>
                                <div className="Pings">
                                    <div className="GroupsSettings2">
                                        <IoSettings />
                                    </div>
                                    <div className="textgroups">
                                        <h4>Following</h4>
                                        <p>Following or unfollow groups to control what you see in News Feed.</p>
                                    </div>
                                </div>
                                <div className="Pings">
                                    <div className="GroupsSettings2">
                                        <IoSettings />
                                    </div>
                                    <div className="textgroups">
                                        <h4>Membirship</h4>
                                        <p>Leave groups that no longer intrest you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="YourFeed">
                        <div className="feedbac"></div>
                        <h3>Your Feed</h3>
                    </div>
                    <div className="discover">
                        <div className="DiscoverDive"></div>
                        <h3>Discover</h3>
                    </div>
                    <div className="YourNotlftions">
                        <div className="DiscoverDive"></div>
                        <h3>Your Notlfictions</h3>
                    </div>
                    <div className="CreateList">
                        <h3> + Create New Group</h3>
                    </div>
                </div>
                <div className="GropsWrapper">
                    <GruopsFeed />
                    <GruopsFeed />
                    <GruopsFeed />
                    <GruopsFeed />
                </div>
            </div>
        </div>
    )
}

export default Groups
