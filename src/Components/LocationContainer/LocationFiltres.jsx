import './LocationContainer.css'
import close from '../../img/close.png'
function LocationFiltres(props){
    return(
        <div class="poup poup__location__filter" style={{display:props.isOpenLocationFiltres}}>
             <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
        <div class="poup__episode__filter__text">Enter name of Location:</div>
        <input class="poup__episode__filter__inp" id="poup__location__filter__inp" type="text" placeholder="Location"/>
        <div class="poup__charaachter__filters__filter__text">Type:</div>
        <select name="poup__location__filters__filter__section__type" class="poup__charaachter__filters__filter__section poup__location__filters__filter__section__type" id="poup__location__filters__filter__section__type">
            <option class="poup__charaachter__filters__filter__section__option" value="">None</option>
            {props.differentTypes.map((item)=>{
                let currentType='&type='+item
                return(
                    <option class="poup__charaachter__filters__filter__section__option" value={currentType}>{item}</option>
                )
            })}
        </select>
        <div class="poup__charaachter__filters__filter__text">Dimension:</div>
        <select name="poup__location__filters__filter__section__dimension" class="poup__charaachter__filters__filter__section poup__location__filters__filter__section__dimension" id="poup__location__filters__filter__section__dimension">
            <option class="poup__charaachter__filters__filter__section__option" value="">None</option>
       {props.differentDimensions.map((item)=>{
        let currentDimension='&dimension='+item
          return(
            <option class="poup__charaachter__filters__filter__section__option" value={currentDimension}>{item}</option>
          )
       })}
        </select>
        <button class="btn" id="apply__location" onClick={()=>props.getLocationsFiltres('none',document.getElementById('poup__location__filter__inp').value,document.getElementById('poup__location__filters__filter__section__type').value,document.getElementById('poup__location__filters__filter__section__dimension').value)}>Apply</button>
         </div>
    )
}
export default LocationFiltres