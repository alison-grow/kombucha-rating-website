import './App.css';
import Header from './Components/Header';
import GtsDrinks from './Components/Sections/GTs';
import HealthDrinks from './Components/Sections/Healthade';
import KevitaDrinks from './Components/Sections/Kevita';
import OtherDrinks from './Components/Sections/Other';

function App() {
  return (
    <div className="App">
      <Header />
      <GtsDrinks />
      <HealthDrinks />
      <KevitaDrinks />
      <OtherDrinks />
    </div>
  );
}

export default App;
