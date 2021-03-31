import Nav from './components/Nav';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Game from './components/Game';

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Game />
      <HowItWorks />
      <AboutUs />
    </div>
  );
}

export default App;