import './EpisodeContainer.css'
import close from '../../img/close.png'
function EpisodeFiltres(props){
    return(
        <div className="poup poup__episode__filter" style={{display:props.isOpenEpisodeFiltres}}>
              <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
            <div className="poup__episode__filter__text">Enter name of Episode:</div>
            <input className="poup__episode__filter__inp" id="poup__episode__filter__inp" type="text" placeholder="Episode"/>
            <button className="btn" id="apply__episodes" onClick={()=>props.getEpisodeFiltres('none',document.getElementById('poup__episode__filter__inp').value)}>Apply</button>
         </div>
    )
}
export default EpisodeFiltres