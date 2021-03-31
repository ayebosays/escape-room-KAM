import Nav from './components/Nav';
import Home from './components/Home';
import Game from './components/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // need this to add links to the navbar

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/game" component={ Game } />
          </Switch>
      </div>
    </Router>
  );
}

export default App;