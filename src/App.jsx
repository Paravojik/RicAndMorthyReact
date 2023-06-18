
import { useState } from 'react';
import './App.css';
import CharachtersContainer from './Components/CharachtersContainer/CharachtersContainer';
// import Controls from './Components/Controls/Controls';
import EpisodeContainer from './Components/EpisodeContainer/EpisodeContainer';
import Header from './Components/Header/Header';
import LocationContainer from './Components/LocationContainer/LocationContainer';
import MyWatchList2 from './Components/MyWatchList2/MyWatchList2';
import Settings from './Components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  let date=new Date().getHours()
  let xSetInterval
  let [thema,setThema]=useState(localStorage.getItem('Thema__Ric') || 'thema__white')
  function themaAsTime(){
    xSetInterval=setInterval(function(){

 if(localStorage.getItem('Thema__Ric')==='thema__asTime'){

  date= new Date().getHours()

  if(date>=6 && date<=20){
    setThema('thema__white')
  }else{
    setThema('thema__black')
  }
 }else{
  clearInterval(xSetInterval)
 }
    },1000)
    date= new Date().getHours()
    if(date>=6 && date<=20){
      setThema('thema__white')
      
    }else{
      setThema('thema__black')
    }
  }
  if(thema==='thema__asTime'){
    themaAsTime()

    
  }
   function  changeThema(val){
    localStorage.setItem('Thema__Ric',val)
    if(val!=='thema__asTime'){
    
      setThema(val)
      clearInterval(xSetInterval)
     
    }else{
      themaAsTime()
      // (date>=6 && date<=8) ? setThema('thema__white') : setThema('thema__black')
  
    }

  }
  return (
    <div className="App" id='App'>
      <Header thema={thema}/>
      <div className="App__main">
        <Routes>

   <Route path='/' element={<CharachtersContainer thema={thema}/>}/>
   <Route path='/episodes' element={<EpisodeContainer thema={thema}/>}/>
        <Route path='/locations' element={ <LocationContainer thema={thema}/>}/>
        <Route path='/myWatchList' element={ <MyWatchList2 thema={thema}/>}/>
        {/* <CharachtersContainer thema={thema}/> */}
        {/* <EpisodeContainer thema={thema}/>
        <LocationContainer thema={thema}/>
        <MyWatchList2 thema={thema}/> */}
        </Routes>
        <Settings changeThema={changeThema}/>
        {/* <Controls/> */}
      </div>
    </div>
  );
}

export default App;
