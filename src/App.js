import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Scheduler from './Components/Scheduler/Scheduler';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="AppBody animeLeft">
        <Scheduler />
      </main>
      <Footer />
    </div>
  );
}

export default App;
