import './App.css';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <FAQ />
    </div>
  );
}

export default App;
