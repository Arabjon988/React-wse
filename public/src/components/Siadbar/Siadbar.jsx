import React from 'react'
import './Siadbar.css'
import { NavLink } from 'react-router-dom'
import firends from '../../assets/fir.png'
import Watch from '../../assets/watch.png'
import Group from '../../assets/group.png'
import Soat from '../../assets/soat.png'
import Save from '../../assets/save.png'
import Pages from '../../assets/pages.png'
import Star from '../../assets/star.png'
import Bag from  '../../assets/bag.png'
import volume from '../../assets/ovoz.png'
import Manger from '../../assets/manger.png'
import OOO from '../../assets/ooo.png'
import Covid from '../../assets/covid.png'
import Crisis from '../../assets/nimadur.png'
import Yurak2 from '../../assets/yurak2.png'
import Div from '../../assets/div.png'
import Star2 from '../../assets/Star2.png'
import Yurak from '../../assets/yurak.png'
import Game from '../../assets/game.png'
import Live from '../../assets/live.png'
import messager from '../../assets/messenger.png'
import playgame from '../../assets/playgemer.png'
import activity from '../../assets/activity.png'
import qolam from '../../assets/qolam.png'
import weather from '../../assets/weather.png'
function Siadbar() {
    return (
        <div className="siadbar">
            <div className="firendes">
                <NavLink to="/friends">
                <ul>
                    <li><img src={firends} alt="" /> <span >Friends</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Groups">
                <ul>
                    <li><img src={Group} alt="" /> <span >Groups</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Watch">
                <ul>
                    <li><img src={Watch} alt=""/> <span >Watch</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Save">
                <ul>
                    <li><img src={Save} alt="" /> <span >Saved</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Most">
                <ul>
                    <li><img src={Soat} alt="" /> <span >Most Recent</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Memories">
                <ul>
                    <li><img src={ Soat} alt="" /> <span >Memories</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Pages">
                <ul>
                    <li><img src={Pages} alt="" /> <span >Pages</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Events">
                <ul>
                    <li><img src={ Star } alt="" /> <span >Events</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Jobs">
                <ul>
                    <li><img src={Bag} alt="" /> <span >Jobs</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/AdCenter">
                <ul>
                    <li><img src={Manger} alt="" /> <span >Ad Center </span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Manger">
                <ul>
                    <li><img src={Manger} alt="" /> <span >Ads Manger</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Campus">
                <ul>
                    <li><img src={Manger} alt="" /> <span >Campus</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Covid">
                <ul>
                    <li><img src={Covid} alt="" /> <span >COVID-19 Information Center</span> </li>
                </ul>
                </NavLink>
            </div>
        
            <div className="firendes">
                <NavLink to="/Response">
                <ul>
                    <li><img src={Crisis} alt="" /> <span >Crisis Response</span> </li>
                </ul>
                </NavLink>
            </div>
    
            <div className="firendes">
                <NavLink to="/Health">
                <ul>
                    <li><img src={Yurak2} alt="" /> <span >Emotional Health</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/FacebookPay">
                <ul>
                    <li><img src={Div} alt="" /> <span >Facebook Pay</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Favorites"> 
                <ul>
                    <li><img src={Star2} alt="" /> <span >Favorites</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Fundraisers">
                <ul>
                    <li><img src={Yurak} alt="" /> <span >Fundraisers</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/GameVideo">
                <ul>
                    <li><img src={Game} alt="" /> <span >Game Video</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/LiveVideo">
                <ul>
                    <li><img src={Live} alt="" /> <span >Live Videos</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Messenger">
                <ul>
                    <li><img src={messager} alt="" /> <span >Messagers</span> </li>
                </ul>
                </NavLink>
            </div>

            <div className="firendes">
               <NavLink to="/PlayGames">
                <ul>
                    <li><img src={playgame} alt="" /> <span >Play Games</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                 <NavLink to="/Recent">
                <ul>
                    <li><img src={activity} alt="" /> <span >Recent AD Activity</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Suggest">
                <ul>
                    <li><img src={qolam} alt="" /> <span >Suggest Edits</span> </li>
                </ul>
                </NavLink>
            </div>
            <div className="firendes">
                <NavLink to="/Weather">
                <ul>
                    <li><img src={weather} alt="" /> <span >Wather</span> </li>
                </ul>
                </NavLink>
            </div>
        </div>
    )
}

export default Siadbar
