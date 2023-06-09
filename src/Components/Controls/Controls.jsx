import CharchtersFilters from '../CharachtersContainer/CharchtersFilters'
import ClosePage from '../ClosePage/ClosePage'
import './Controls.css'
import { useState, useRef } from 'react'
function Controls(props){
    let [isVisibleFilter,setIsVisibleFilter]=useState('none')
    // let [currentPageNumber,setCurrentPageNumber]=useState(1)
    let [filterStatus,setFilterStatus]=useState('')
    let [filterSpecies,setFilterSpecies]=useState('')
    let [filterGender,setFilterGender]=useState('')
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
        setFilterGender(filterGender)
        setFilterSpecies(filterSpecies)
        setFilterStatus(filterStatus)
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
        document.getElementById('poup__charaachter__filters__filter__section__status').value=filterStatus
        document.getElementById('poup__charaachter__filters__filter__section__species').value=filterSpecies
        document.getElementById('poup__charaachter__filters__filter__section__gender').value=filterGender
    }
 return(
    <div className="controls">
    <button className="btn" id="prevBtn" onClick={()=>changeCurrentPageNumberMinus1('back')}>Back</button>
    <button className="btn filter" id="filters__charachter" onClick={ClickFiltersCharachter2}>Filters</button>
    {/* <button class="btn filter" id="filters__episode">Filters</button>

    <button class="btn filter" id="filters__locations">Filters</button>
    <button class="btn filter" id="add__myWatchList">Add new item</button> */}
    <button className="btn" id="nextBtn" onClick={()=>changeCurrentPageNumberPlus1('next')}>Next</button>
    <ClosePage isVisibleFilter={isVisibleFilter} closeWithoutChange={closeWithoutChange}/>
    <CharchtersFilters  isVisibleFilter={isVisibleFilter} ClickFiltersCharachter={ClickFiltersCharachter} closeWithoutChange={closeWithoutChange} />
</div>
 )
}
export default Controls