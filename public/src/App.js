import './App.css';
import Home from './routers/Home-pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Friends from './routers/Friends/Friends';
import Login from './routers/Login-pages/Login'
import Groups from './components/Groups/Groups';
import Watch from './components/Watch/Watch';
import Save from './components/Save/Save';
import Most from './components/Most/Most';
import Memories from './components/memories/Memories';
import Pages from './components/Pagess/Pages';
import Events from './components/Events/Events';
import Job from './components/Job/Job'
import Manger from './components/Manger/Manger';
import AdCenter from './components/AdCenter/AdCenter';
import Campus from './components/Campus/Campus'
import Covid from './components/Covid/Covid';
import Response from './components/Response/Response'
import Health from './components/Health/Health';
import FacebookPay from './components/FacebookPay/FacebookPay'
import Favorites from './components/Favorites/Favorites';
import Fundraisers from './components/Fundraisers/Fundraisers';
import GameVideo from './components/GameVideo/GameVideo'
import LiveVideo from './components/LiveVideo/LiveVideo';
import Messenger from  './components/messager/Messenger'
import PlayGames from './components/PlayGames/PlayGames'
import Recent from './components/Recent/Recent'
import Suggest from './components/Suggest/Suggest'
import Weather from './components/Weather/Weather'
function App() {
   return (
   <Router>
   <div className="app">
    <Switch> 
  
        <Route exact path="/" component={Home}/>
         <Route exact path="/friends" component={Friends}/> 
          <Route exact path="/Groups" component={Groups}/>
          <Route exact path="/Watch" component={Watch}/>
          <Route exact path="/Save" component={Save}/> 
          <Route exact path="/Most" component={Most}/> 
          <Route exact path="/Memories" component={Memories}/>
          <Route exact path="/Pages" component={Pages}/> 
          <Route exact path="/Events" component={Events}/> 
          <Route exact path="/Jobs" component={Job}/>
          <Route exact path="/Manger" component={Manger}/> 
          <Route exact path="/AdCenter" component={AdCenter}/> 
          <Route exact path="/Campus" component={Campus}/> 
          <Route exact path="/Covid" component={Covid}/>
          <Route exact path="/Response" component={Response}/>
          <Route exact path="/Health" component={Health}/> 
          <Route exact path="/FacebookPay" component={FacebookPay} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/Fundraisers" component={Fundraisers}/> 
          <Route exact path="/GameVideo" component={GameVideo} />
          <Route exact path="/LiveVideo" component={LiveVideo} />
          <Route exact path="/Messenger" component={Messenger} />
          <Route exact path="/PlayGames" component={PlayGames} />
          <Route exact path="/Recent" component={Recent}/>
          <Route exact path="/Suggest" component={Suggest} />
          <Route exact path="/Weather" component={Weather} />
         <Login/>
    
 
   </Switch>
    </div>
    </Router>
  );
}

export default App;
