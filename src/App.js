import './App.css';
import Home from './routers/Home-pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Friends from './routers/Friends/Friends';
import Groups from './components/Groups/Groups';
import Watch from './components/Watch/Watch';
import Favorites from './components/Favorites/Favorites';
import Messenger from './components/messager/Messenger'
import PlayGames from './components/PlayGames/PlayGames'
import Suggest from './components/Suggest/Suggest'
import Weather from './components/Weather/Weather'
import SuggestFriend from './routers/Friends/SuggestFriend/SuggestFriend';
import GruopsFeed from './components/Groups/GruopsFeed/GruopsFeed';
import { useStateValue } from './context/stateProvider/StateProvider';
import Login from './routers/login-page/Login';

function App() {
  const [{user}] = useStateValue()
  return (
    <Router>
      <div className="app">
        <Switch> 
        { user ?  <Login /> :
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/Groups" component={Groups} />
            <Route exact path="/Watch" component={Watch} />
            <Route exact path="/Favorites" component={Favorites} />
            <Route exact path="/Messenger" component={Messenger} />
            <Route exact path="/PlayGames" component={PlayGames} />
            <Route exact path="/Suggest" component={Suggest} />
            <Route exact path="/Weather" component={Weather} />
            <Route exact path="/SuggestFriend" component={SuggestFriend} />
            <Route exact path="/GruopsFeed" component={GruopsFeed} />
          </> 
        }


        </Switch>
      </div>
    </Router>
  );
}

export default App;
