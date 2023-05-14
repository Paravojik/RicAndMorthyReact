import { useState } from 'react'
import './Settings.css'
import SettingsPoup from './SettingsPoup'
import icon from './img/settingsIcon.png'
import ClosePage from '../ClosePage/ClosePage'
function Settings(props){
    let [isVisiblePoup,setIsVisiblePoup]=useState('none')
    let [whichThema,setWhichThema]=useState(localStorage.getItem('Thema__Ric') || 'thema__white')
    function closeWithoutChange(val){
        (val==='none') ? setIsVisiblePoup('none') : setIsVisiblePoup('flex')
        document.getElementById('settins__poup__select').value=whichThema   
    }
    function ClickFiltersCharachter(val,thema){
        setWhichThema(thema)
        console.log(whichThema)
        props.changeThema(thema)
       
        if(val==='none'){
            setIsVisiblePoup('none')
        }else{
            isVisiblePoup==='none' ? setIsVisiblePoup('flex'):setIsVisiblePoup('none')
        }
        
    }
    function ClickFiltersCharachter2(){     
        isVisiblePoup==='none' ? setIsVisiblePoup('flex'):setIsVisiblePoup('none')
        document.getElementById('settins__poup__select').value=whichThema   
    }

    
    return(
        <div className="Settings">
            <img className='Settings__icon' src={icon} alt="" onClick={ClickFiltersCharachter2} />
            <ClosePage isVisibleFilter={isVisiblePoup} closeWithoutChange={closeWithoutChange}/>
            <SettingsPoup isVisibleFilter={isVisiblePoup} ClickFiltersCharachter={ClickFiltersCharachter} closeWithoutChange={closeWithoutChange}/>
        </div>
    )
}
export default Settings