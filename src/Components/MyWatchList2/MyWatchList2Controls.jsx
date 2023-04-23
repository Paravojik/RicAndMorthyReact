import { useState } from 'react'
import './MyWatchList2.css'
import MyWatchList2Poup from './MyWatchList2Poup'
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
    }
    return(
        <div class="controls">
        {/* <button class="btn" id="prevBtn" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button> */}

        <button class="btn filter" id="add__myWatchList" onClick={openWatchFiltres}>Add new item</button>
        {/* <button class="btn" id="nextBtn" onClick={()=>changeCurrentPageNumberPlus1('next')}>Next</button> */}
      <MyWatchList2Poup isVisibleWatch={isVisibleWatch} closeWithoutChange={closeWithoutChange} getWatchFiltres={getWatchFiltres}/>
    </div>
    )
}
export default MyWatchList2Controls