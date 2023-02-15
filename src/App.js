import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/plans/plans';
import Testominals from './components/Testominals/Testominals';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
        
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testominals/>
          <Join />
          <Footer />
    </div>
  );
}

export default App;
