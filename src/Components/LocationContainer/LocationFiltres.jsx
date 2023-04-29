import './LocationContainer.css'
import close from '../../img/close.png'
function LocationFiltres(props){
    return(
        <div className="poup poup__location__filter poup__table" style={{display:props.isOpenLocationFiltres}}>
             <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
        <div className="poup__episode__filter__text">Enter name of Location:</div>
        <input className="poup__episode__filter__inp" id="poup__location__filter__inp" type="text" placeholder="Location"/>
        <div className="poup__charaachter__filters__filter__text">Type:</div>
        <select name="poup__location__filters__filter__section__type" className="poup__charaachter__filters__filter__section poup__location__filters__filter__section__type" id="poup__location__filters__filter__section__type">
            <option className="poup__charaachter__filters__filter__section__option" value="">None</option>
            {props.differentTypes.map((item)=>{
                let currentType='&type='+item
                let currentKey='optionType'+item
                return(
                    <option key={currentKey} className="poup__charaachter__filters__filter__section__option" value={currentType}>{item}</option>
                )
            })}
        </select>
        <div className="poup__charaachter__filters__filter__text">Dimension:</div>
        <select name="poup__location__filters__filter__section__dimension" className="poup__charaachter__filters__filter__section poup__location__filters__filter__section__dimension" id="poup__location__filters__filter__section__dimension">
            <option className="poup__charaachter__filters__filter__section__option" value="">None</option>
       {props.differentDimensions.map((item)=>{
        let currentDimension='&dimension='+item
        let currentKey='optionDimension'+item
          return(
            <option key={currentKey} className="poup__charaachter__filters__filter__section__option" value={currentDimension}>{item}</option>
          )
       })}
        </select>
        <button className="btn" id="apply__location" onClick={()=>props.getLocationsFiltres('none',document.getElementById('poup__location__filter__inp').value,document.getElementById('poup__location__filters__filter__section__type').value,document.getElementById('poup__location__filters__filter__section__dimension').value)}>Apply</button>
         </div>
    )
}
export default LocationFiltres