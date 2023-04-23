import { useRef, useState } from 'react'
import './LocationContainer.css'
import LocationFiltres from './LocationFiltres'
function LocationControls(props){
    let [isOpenLocationFiltres,setIsOpenLocationFiltres]=useState('none')
    let currentFiltresLocations=useRef('')
    let currentPageNumberLocations=useRef(1)
    function changeCurrentPageNumberPlus1(val){
        if(val==='next' && currentPageNumberLocations.current<props.amountOfPages__locations){
            currentPageNumberLocations.current+=1
                props.getLocations(currentPageNumberLocations.current,currentFiltresLocations.current)
        }
        console.log(currentPageNumberLocations.current)
  
        
    }
    function changeCurrentPageNumberMinus1(val){
        if(val==='back' && currentPageNumberLocations.current>1){
            currentPageNumberLocations.current-=1  
                props.getLocations(currentPageNumberLocations.current,currentFiltresLocations.current)
        }
        console.log(currentPageNumberLocations.current)
       
    }
    function getLocationsFiltres(val,filterName='',filterType='',filterDimension=''){
        (val==='none') ? setIsOpenLocationFiltres('none') : setIsOpenLocationFiltres('flex')
        currentFiltresLocations.current=filterType+filterDimension+'&name='+filterName
        // добавити в locationFilter &dimension= i &type=
        console.log(currentFiltresLocations.current)
        currentPageNumberLocations.current=1
        props.getLocations(currentPageNumberLocations.current,currentFiltresLocations.current)
    }
    function openLocationsFiltres(){
        (isOpenLocationFiltres==='none') ? setIsOpenLocationFiltres('flex') : setIsOpenLocationFiltres('none')     
    }
    function closeWithoutChange(val){
        (val==='none') ? setIsOpenLocationFiltres('none') : setIsOpenLocationFiltres('flex')     
    }
    // let differentTypes=useRef([])
let differentTypes=   [ 'Planet', 'Cluster', 'Space station', 'Microverse', 'TV', 'Resort', 'Fantasy town', 'Dream', 'Dimension', 'unknown', 'Menagerie', 'Game', 'Customs', 'Daycare', 'Dwarf planet (Celestial Dwarf)', 'Miniverse', 'Teenyverse', 'Box', 'Spacecraft', 'Artificially generated world', 'Machine', 'Arcade', 'Spa', 'Quadrant', 'Quasar', 'Mount', 'Liquid', 'Convention', 'Woods', 'Diegesis', 'Non-Diegetic Alternative Reality', 'Nightmare', 'Asteroid', 'Acid Plant', 'Reality', 'Death Star', 'Base', 'Elemental Rings', 'Human', 'Space', 'Hell', 'Police Department', '', 'Country', 'Consciousness']

    // function getTypes(page){
    //     fetch('https://rickandmortyapi.com/api/location?page='+page)
    //         .then(response=>{
    //             return  response.json()
    //         })
    //         .then(data =>{
     
    //                 for(let i=0;i<data.results.length;i++){
    //         let jval=differentTypes.current.length
     
    //         let j=0
    //         let join=true
    //         while (j<=jval){
    //         if(data.results[i].type===differentTypes.current[j]){
    //             join=false
    //         }
          
    //         j++;
    //     }
    //     if(join===true){
    //         differentTypes.current.push(data.results[i].type)  
    //         // $('.poup__location__filters__filter__section__type').append('<option class="poup__charaachter__filters__filter__section__option" value="&type='+data.results[i].type+'">'+data.results[i].type+'</option>')
    //     }
    // }
    //         }) 
    // }
    // setTimeout(function(){
    //     for(let i =0;i<props.amountOfPages__locations;i++){
    
    //         getTypes(i)
    //     }
    //     console.log(differentTypes.current)
    // },100)
    let differentDimensions=[
        "Dimension C-137",
        "unknown",
        "Post-Apocalyptic Dimension",
        "Replacement Dimension",
        "Cronenberg Dimension",
        "Fantasy Dimension",
        "Dimension 5-126",
        "Testicle Monster Dimension",
        "Cromulon Dimension",
        "Dimension C-500A",
        "Dimension K-83",
        "Dimension J19ζ7",
        "Eric Stoltz Mask Dimension",
        "Evil Rick's Target Dimension",
        "Giant Telepathic Spiders Dimension",
        "Unknown dimension",
        "Dimension K-22",
        "Dimension D-99",
        "Dimension D716",
        "Dimension D716-B",
        "Dimension D716-C",
        "Dimension J-22",
        "Dimension C-35",
        "Pizza Dimension",
        "Phone Dimension",
        "Chair Dimension",
        "Fascist Dimension",
        "Fascist Shrimp Dimension",
        "Fascist Teddy Bear Dimension",
        "Wasp Dimension",
        "Tusk Dimension",
        "Magic Dimension",
        "Merged Dimension"]
    // let differentDimensions=useRef([])
    // function getDimensions(page){
    //     fetch('https://rickandmortyapi.com/api/location?page='+page)
    //         .then(response=>{
    //             return  response.json()
    //         })
    //         .then(data =>{
     
    //                 for(let i=0;i<data.results.length;i++){
    //         let jval=differentDimensions.current.length
     
    //         let j=0
    //         let join=true
    //         while (j<=jval){
    //         if(data.results[i].dimension===differentDimensions.current[j]){
    //             join=false
    //         }
          
    //         j++;
    //     }
    //     if(join===true){
    //         differentDimensions.current.push(data.results[i].dimension)  
          
    //     }
    // }
    //         }) 
    // }
    // setTimeout(function(){
    //     for(let i =0;i<props.amountOfPages__locations;i++){
    
    //         getDimensions(i)
    //     }
    //     console.log(differentDimensions.current)
    // },100)
    return(
        <div class="controls">
        <button class="btn" id="prevBtn" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button>

     
    
        <button class="btn filter" id="filters__locations" onClick={openLocationsFiltres}>Filters</button>

        <button class="btn" id="nextBtn" onClick={()=>changeCurrentPageNumberPlus1('next')} >Next</button>
       <LocationFiltres differentTypes={differentTypes} differentDimensions={differentDimensions} isOpenLocationFiltres={isOpenLocationFiltres} closeWithoutChange={closeWithoutChange} getLocationsFiltres={getLocationsFiltres}/>
    </div>
    )
}
export default LocationControls