import CharchtersFilters from '../CharachtersContainer/CharchtersFilters'
import './Controls.css'
import { useState, useRef } from 'react'
function Controls(props){
    let [isVisibleFilter,setIsVisibleFilter]=useState('none')
    // let [currentPageNumber,setCurrentPageNumber]=useState(1)
    let currentFiltres=useRef('')
    let currentPageNumber=useRef(1)
    function changeCurrentPageNumberPlus1(val){
        if(val==='next' && currentPageNumber.current<props.amountOfPages){
            currentPageNumber.current+=1

                props.getPage(currentPageNumber.current,currentFiltres.current)

        }
        console.log(currentPageNumber.current)
  
        
    }
    function changeCurrentPageNumberMinus1(val){
        if(val==='back' && currentPageNumber.current>1){
            currentPageNumber.current-=1
       
                props.getPage(currentPageNumber.current,currentFiltres.current)

        }
        console.log(currentPageNumber.current)
       
    }
    // let differentSpecies=[]
    // useEffect(()=>{
       
    //     function getSpecies(page){
    //         fetch('https://rickandmortyapi.com/api/character/?page='+page)
    //             .then(response=>{
    //                 return  response.json()
    //             })
    //             .then(data =>{
         
    //                     for(let i=0;i<data.results.length;i++){
    //             let jval=differentSpecies.length
         
    //             let j=0
    //             let join=true
    //             while (j<=jval){
    //             if(data.results[i].species===differentSpecies[j]){
    //                 join=false
    //             }
              
    //             j++;
    //         }
    //         if(join===true){
    //             differentSpecies.push(data.results[i].species)  
    //             // $('.poup__charaachter__filters__filter__section__species').append('<option class="poup__charaachter__filters__filter__section__option" value="&species='+data.results[i].species+'">'+data.results[i].species+'</option>')
    //         }
    //     }
    //     // console.log('inFunc',differentSpecies)
    //             }) 
    //     }
    //     for(let i=0;i<props.amountOfPages;i++){
    //         getSpecies(i)
    //         // console.log(differentSpecies)
    //     }    
        
    // },)
    function getFiltersCharacters(val){
        // if(val!==NaN){
            
            currentFiltres.current=val
            console.log(val)
            currentPageNumber.current=1
            props.getPage(1,currentFiltres.current)
        // }
         }
    function ClickFiltersCharachter(val,filterStatus,filterSpecies,filterGender){
        let filters=filterStatus+filterSpecies+filterGender
        console.log(filters)
        getFiltersCharacters(filters)
        if(val==='none'){
            setIsVisibleFilter('none')
        }else{
            isVisibleFilter==='none' ? setIsVisibleFilter('flex'):setIsVisibleFilter('none')
        }
        
    }
    function ClickFiltersCharachter2(){     
            isVisibleFilter==='none' ? setIsVisibleFilter('flex'):setIsVisibleFilter('none')
    }
    function closeWithoutChange(val){
        (val==='none') ? setIsVisibleFilter('none') : setIsVisibleFilter('flex')     
    }
 return(
    <div class="controls">
    <button class="btn" id="prevBtn" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button>
    <button class="btn filter" id="filters__charachter" onClick={ClickFiltersCharachter2}>Filters</button>
    {/* <button class="btn filter" id="filters__episode">Filters</button>

    <button class="btn filter" id="filters__locations">Filters</button>
    <button class="btn filter" id="add__myWatchList">Add new item</button> */}
    <button class="btn" id="nextBtn" onClick={()=>changeCurrentPageNumberPlus1('next')}>Next</button>
    <CharchtersFilters  isVisibleFilter={isVisibleFilter} ClickFiltersCharachter={ClickFiltersCharachter} closeWithoutChange={closeWithoutChange} />
</div>
 )
}
export default Controls