
import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      <Navigation/>

    </div>
  );
}

export default App;
