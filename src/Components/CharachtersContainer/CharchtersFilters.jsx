import './CharachtersContainer.css'
import close from '../../img/close.png'
// import { useEffect, useState } from 'react'
function CharchtersFilters(props){
    // let [differentSpecies,setDifferentSpecies]=useState([])
    // function getSpecies(page){
    //     fetch('https://rickandmortyapi.com/api/character/?page='+page)
    //         .then(response=>{
    //             return  response.json()
    //         })
    //         .then(data =>{
     
    //                 for(let i=0;i<data.results.length;i++){
    //         let jval=differentSpecies.length
     
    //         let j=0
    //         let join=true
    //         while (j<=jval){
    //         if(data.results[i].species===differentSpecies[j]){
    //             join=false
    //         }
          
    //         j++;
    //     }
    //     if(join===true){
    //         console.log(data.results[i].species,differentSpecies)
    //         setDifferentSpecies([...differentSpecies,data.results[i].species] )
    //         // differentSpecies.push(data.results[i].species)  
    //         // $('.poup__charaachter__filters__filter__section__species').append('<option class="poup__charaachter__filters__filter__section__option" value="&species='+data.results[i].species+'">'+data.results[i].species+'</option>')
    //     }
    // }
    // console.log('aboba',differentSpecies)
    //         }) 
    // }
    // useEffect(()=>{
    //     for(let i=0;i<props.amountOfPages;i++){
    //         getSpecies(i)
    //     }
        
    // },[props.amountOfPages,getSpecies])
    // function spec(){
    //     for(let i=0;i<props.amountOfPages;i++){
    //         getSpecies(i)
    //     }
    //     console.log('aboba',differentSpecies)
    // }
let differentSpecies=[  
"Human",
"Alien",
"Humanoid",
"unknown",
"Poopybutthole",
"Mythological Creature",
"Animal",
"Robot",
"Cronenberg",
"Disease"
]
let currentKey=-1
    return(
        <div className="poup poup__charaachter__filters" style={{display:props.isVisibleFilter}}>
            <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
        <div className="poup__charaachter__filters__filter">
            <div className="poup__charaachter__filters__filter__text">Status:</div>
            <select name="poup__charaachter__filters__filter__section__status" className="poup__charaachter__filters__filter__section poup__charaachter__filters__filter__section__status" id="poup__charaachter__filters__filter__section__status">
                <option className="poup__charaachter__filters__filter__section__option" value="">None</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&status=alive">Alive</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&status=dead">Dead</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&status=unknown">Unknown</option>
            </select>
        </div>
        <div className="poup__charaachter__filters__filter">
            <div className="poup__charaachter__filters__filter__text" >Species:</div>
            <select name="poup__charaachter__filters__filter__section__species" className="poup__charaachter__filters__filter__section poup__charaachter__filters__filter__section__species" id="poup__charaachter__filters__filter__section__species">
                <option className="poup__charaachter__filters__filter__section__option" value="">None</option>
                {differentSpecies.map((item)=>{
                    // console.log(differentSpecies)
                    let currentClass="&species="+item
                    currentKey++
                    let currentKeyName='poup__charaachter__filters__filter__section__speciesOpt'+currentKey
                    return(
                        <option key={currentKeyName} className="poup__charaachter__filters__filter__section__option" value={currentClass}>{item}</option>
                    )
                })}

            </select>
        </div>
        <div className="poup__charaachter__filters__filter">
            <div className="poup__charaachter__filters__filter__text">Gender:</div>
            <select name="poup__charaachter__filters__filter__section__gender" className="poup__charaachter__filters__filter__section poup__charaachter__filters__filter__section__gender" id="poup__charaachter__filters__filter__section__gender">
                <option className="poup__charaachter__filters__filter__section__option" value="">None</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&gender=female">Female</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&gender=male">Male</option>
                <option className="poup__charaachter__filters__filter__section__option" value="&gender=genderless ">Genderless </option>
                <option className="poup__charaachter__filters__filter__section__option" value="&gender=unknown">Unknown</option>
            </select>
        </div>
        <button className="btn poup__charaachter__filters__btn" onClick={()=>props.ClickFiltersCharachter('none',document.getElementById('poup__charaachter__filters__filter__section__status').value,document.getElementById('poup__charaachter__filters__filter__section__species').value,document.getElementById('poup__charaachter__filters__filter__section__gender').value)}>Apply</button>
    </div>
    )
}
export default CharchtersFilters