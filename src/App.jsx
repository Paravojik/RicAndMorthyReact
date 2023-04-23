
import './App.css';
import CharachtersContainer from './Components/CharachtersContainer/CharachtersContainer';
// import Controls from './Components/Controls/Controls';
import EpisodeContainer from './Components/EpisodeContainer/EpisodeContainer';
import Header from './Components/Header/Header';
import LocationContainer from './Components/LocationContainer/LocationContainer';
import MyWatchList2 from './Components/MyWatchList2/MyWatchList2';

function App() {

  return (
    <div className="App" id='App'>
      <Header />
      <div className="App__main">
        <CharachtersContainer />
        <EpisodeContainer/>
        <LocationContainer/>
        <MyWatchList2/>
        {/* <Controls/> */}
      </div>
    </div>
  );
}

export default App;
