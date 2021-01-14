import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TinderCard from './components/TinderCard';


function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header />
      
      {/* Tinder Cards */}
      <TinderCard/>

      {/* Swipe Buttons */}
      <Footer/>
    
    </div>
  );
}

export default App;
