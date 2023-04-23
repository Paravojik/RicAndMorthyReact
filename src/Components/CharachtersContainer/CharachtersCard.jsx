import './CharachtersContainer.css'
import CharachtersCardPoup from './CharachtersCardPoup'
import { useState } from 'react'
function CharachtersCard(props){
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
    return(
        <div className="card">
       
        <img className="avatar" src={props.image}alt=""/>
       <div className="cardName">{props.name}</div>
       <button className="infoBtn" onClick={ClickPoup}>info</button>
       <CharachtersCardPoup ClickPoup={ClickPoup} data={props.data} isVisible={isVisible}/>
       </div>
    )
}
export default CharachtersCard