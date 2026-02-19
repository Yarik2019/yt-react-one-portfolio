import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience ';
import Contact from './components/Contact';
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SocialLinks/>
      
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <ScrollToTop smooth  className="absolute  !right-4 !bottom-4 flex items-center justify-center  bg-black text-white" />
    </div>
  );
}

export default App;
