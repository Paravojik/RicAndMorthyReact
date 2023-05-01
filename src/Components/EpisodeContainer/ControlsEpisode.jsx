import { useRef, useState } from 'react'
import './EpisodeContainer.css'
import EpisodeFiltres from './EpisodeFiltres'
import ClosePage from '../ClosePage/ClosePage'
function ControlsEpisode(props){
    let currentFiltresEpisode=useRef('')
    let currentPageNumberEpisode=useRef(1)
    let [isOpenEpisodeFiltres,setIsOpenEpisodeFiltres]=useState('none')
    function changeCurrentPageNumberPlus1(val){
        if(val==='next' && currentPageNumberEpisode.current<props.amountOfPages__episodes){
            currentPageNumberEpisode.current+=1
                props.getEpisode(currentPageNumberEpisode.current,currentFiltresEpisode.current)
        }
        console.log(currentPageNumberEpisode.current)
  
        
    }
    function changeCurrentPageNumberMinus1(val){
        if(val==='back' && currentPageNumberEpisode.current>1){
            currentPageNumberEpisode.current-=1  
                props.getEpisode(currentPageNumberEpisode.current,currentFiltresEpisode.current)
        }
        console.log(currentPageNumberEpisode.current)
       
    }
    function getEpisodeFiltres(val,filters=''){
        (val==='none') ? setIsOpenEpisodeFiltres('none') : setIsOpenEpisodeFiltres('flex')
        currentFiltresEpisode.current='&name='+filters
        currentPageNumberEpisode.current=1
        props.getEpisode(currentPageNumberEpisode.current,currentFiltresEpisode.current)
    }
    function openEpisodeFiltres(){
        (isOpenEpisodeFiltres==='none') ? setIsOpenEpisodeFiltres('flex') : setIsOpenEpisodeFiltres('none')     
    }
    function closeWithoutChange(val){
        (val==='none') ? setIsOpenEpisodeFiltres('none') : setIsOpenEpisodeFiltres('flex')     
    }

    
    return(
        <div className="controls controls__table">
        <button className="btn" id="prevBtnEpisode" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button>

        <button className="btn filter" id="filters__episode" onClick={openEpisodeFiltres}>Filters</button>
    

        <button className="btn" id="nextBtnEpisode" onClick={()=>changeCurrentPageNumberPlus1('next')}>Next</button>
        <ClosePage isVisibleFilter={isOpenEpisodeFiltres} closeWithoutChange={closeWithoutChange}/>
     <EpisodeFiltres isOpenEpisodeFiltres={isOpenEpisodeFiltres} closeWithoutChange={closeWithoutChange} getEpisodeFiltres={getEpisodeFiltres}/>
    </div>
    
    )
}
export default ControlsEpisode