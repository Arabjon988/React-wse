import './App.css';
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom'

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
