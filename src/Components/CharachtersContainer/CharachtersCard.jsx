import './CharachtersContainer.css'
import CharachtersCardPoup from './CharachtersCardPoup'
import { useState } from 'react'
import ClosePage from '../ClosePage/ClosePage'
function CharachtersCard(props,{key}){
    let [isVisible,setIsVisible]=useState('none')
    function ClickPoup(close){
        
        if(close==='none'){
            setIsVisible('none')
            // document.getElementById('App').style.filter='blur(0px)'
        }else{
            // if(isVisible==='none'){
            //     setIsVisible('flex')
            //     document.getElementById('App').style.filter='blur(5px)'
            // }else{
            //     document.getElementById('App').style.filter='blur(0px)'
            //     setIsVisible('none')
            // }
            isVisible==='none' ? setIsVisible('flex'):setIsVisible('none')
        }
        console.log(isVisible)
    }
    function closeWithoutChange(val){
        (val==='none') ? setIsVisible('none') : setIsVisible('flex')     
    }
    let currentKeyOfCardCharachter=key

    let currentClass=['card']
    if(props.thema==='thema__white'){
        currentClass.push('thema__white__box')
    }else if(props.thema==='thema__black'){
        currentClass.push('thema__black__box')
    }
    return(
        <div className={currentClass.join(' ')} key={currentKeyOfCardCharachter}>
       
        <img className="avatar" src={props.image}alt=""/>
       <div className="cardName">{props.name}</div>
       <button className="infoBtn" onClick={ClickPoup}>info</button>
       <ClosePage isVisibleFilter={isVisible} closeWithoutChange={closeWithoutChange}/>
       <CharachtersCardPoup thema={props.thema} ClickPoup={ClickPoup} data={props.data} isVisible={isVisible}/>
       </div>
    )
}
export default CharachtersCard