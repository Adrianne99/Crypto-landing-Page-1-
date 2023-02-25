import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Howtobuy from './Components/Howtobuy';
import Navbar from './Components/Navbar';
import Roadmap from './Components/Roadmap';
import Tokenomics from './Components/Tokenomics';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Tokenomics />
    <Howtobuy />
    <Roadmap />
    </>
  );
}

export default App;
