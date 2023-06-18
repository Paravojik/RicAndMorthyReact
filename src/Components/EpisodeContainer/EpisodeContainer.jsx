import { useEffect, useState } from 'react';
import ControlsEpisode from './ControlsEpisode'
import './EpisodeContainer.css'
function EpisodeContainer(props){
    let [amountOfPages__episodes,setAmountOfPages__episodes]=useState('')
    let [currentPageEpisode,setCurrentPageEpisode] =useState([])
    
    function getEpisode(page,episodes__filtres=''){
        fetch('https://rickandmortyapi.com/api/episode?page='+page+episodes__filtres)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log('ds',data)
    setAmountOfPages__episodes(data.info.pages)
    setCurrentPageEpisode(data.results)
    console.log('sda',amountOfPages__episodes,currentPageEpisode)

    }).catch((error) => {
        console.log(error)
        alert("There isn't any Episodes ")
     
      });
    }
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/episode?page=1')
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
            setAmountOfPages__episodes(data.info.pages)
            setCurrentPageEpisode(data.results)

    }).catch((error) => {
        console.log(error)
        alert("There isn't any Episodes ")
      });
      let el = document.getElementsByClassName('header__section__page__a');

      for (let i = 0; i < el.length; i++) {
          let currentEl = el[i];
          currentEl.style.color = 'white';
      }
      
      document.getElementById('header__section__page__episodes').style.color='rgb(250, 81, 81)'
    },[])
    let currentClass=['container','episode__container','container__table']
if(props.thema==='thema__white'){
    currentClass.push('thema__white')
}else if(props.thema==='thema__black'){
    currentClass.push('thema__black')
}
    return(
        <div className={currentClass.join(' ')} >
            <table className="episode__container__table">
                <thead className="episode__row">
                    <tr>
                    <th className="episode__row__val">Id</th>
                    <th className="episode__row__val">Episode</th>
                    <th className="episode__row__val">Name</th>
                    <th className="episode__row__val">Released</th>
                    <th className="episode__row__val">Characters</th>
                    </tr>
             
                   </thead>
                   {currentPageEpisode.map((item)=>{
                 let curentKey='episode__rowKey'+item.id
                    return(
                        <tbody key={curentKey} className="episode__row" >
                            <tr>
                            <td className="episode__row__val">{item.id}</td><td className="episode__row__val"> {item.episode}</td><td className="episode__row__val">{item.name}</td><td className="episode__row__val">{item.air_date}</td><td className="episode__row__val">{item.characters.length}</td>
                            </tr>
                            </tbody>
                    )
                   })}
            </table>
            <div className="controls__box">
            <ControlsEpisode amountOfPages__episodes={amountOfPages__episodes} getEpisode={getEpisode}/>
            </div>
           
        </div>
    )
}
export default EpisodeContainer