import './Settings.css'
import close from '../../img/close.png'
function SettingsPoup(props){
    return(
        <div className="poup poup__charaachter__filters" style={{display:props.isVisibleFilter}}>
             <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
             <div className="poup__charaachter__filters__filter">
            <div className="poup__charaachter__filters__filter__text">Thema:</div>
            <select name="poup__charaachter__filters__filter__section__status" className="poup__charaachter__filters__filter__section settins__poup__select" id="settins__poup__select">
                <option className="poup__charaachter__filters__filter__section__option" value="thema__white">White</option>
                <option className="poup__charaachter__filters__filter__section__option" value="thema__black">Black</option>
                <option className="poup__charaachter__filters__filter__section__option" value="thema__asTime">As Time</option>
          
            </select>
        </div>
        <button className="btn poup__charaachter__filters__btn" onClick={()=>props.ClickFiltersCharachter('none',document.getElementById('settins__poup__select').value)}>Apply</button>
        </div>
    )
}
export default SettingsPoup