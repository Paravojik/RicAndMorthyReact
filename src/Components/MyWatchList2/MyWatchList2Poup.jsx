import './MyWatchList2.css'
import close from '../../img/close.png'
function MyWatchList2Poup(props){
    return(
        <div class="poup poup__watchList" style={{display:props.isVisibleWatch}}>
            <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
        <div class="poup__episode__filter__text">Enter name of Episode you want watch:</div>
        <input class="poup__episode__filter__inp" id="poup__episode__list__inp" type="text" placeholder="Episode"/>
        <button class="btn" id="apply__list" onClick={()=>props.getWatchFiltres('none',document.getElementById('poup__episode__list__inp').value)}>Apply</button>
         </div>
    )
}
export default MyWatchList2Poup