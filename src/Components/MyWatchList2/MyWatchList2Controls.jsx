import { useState } from 'react'
import './MyWatchList2.css'
import MyWatchList2Poup from './MyWatchList2Poup'
import ClosePage from '../ClosePage/ClosePage'
function MyWatchList2Controls(props){
    let [isVisibleWatch,setIsVisibleWatch]=useState('none')
    function getWatchFiltres(val,filters=''){
        (val==='none') ? setIsVisibleWatch('none') : setIsVisibleWatch('flex')
        // currentFiltresEpisode.current='&name='+filters
        props.getEpisodeWatch(filters)
        document.getElementById('poup__episode__list__inp').value=''
     
    }
    function openWatchFiltres(){
        (isVisibleWatch==='none') ? setIsVisibleWatch('flex') : setIsVisibleWatch('none')     
    }
    function closeWithoutChange(val){
        (val==='none') ? setIsVisibleWatch('none') : setIsVisibleWatch('flex')
        document.getElementById('poup__episode__list__inp').value=''     
    }
    return(
        <div className="controls">
        {/* <button className="btn" id="prevBtn" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button> */}

        <button className="btn filter" id="add__myWatchList" onClick={openWatchFiltres}>Add new item</button>
        {/* <button className="btn" id="nextBtn" onClick={()=>changeCurrentPageNumberPlus1('next')}>Next</button> */}
        <ClosePage isVisibleFilter={isVisibleWatch} closeWithoutChange={closeWithoutChange}/>
      <MyWatchList2Poup isVisibleWatch={isVisibleWatch} closeWithoutChange={closeWithoutChange} getWatchFiltres={getWatchFiltres}/>
    </div>
    )
}
export default MyWatchList2Controls