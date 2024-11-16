import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}

export default App;
