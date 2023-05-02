import './MyWatchList2.css'
import close from '../../img/close.png'
import ListOfOptions from '../ListOfOptions/ListOfOptions'
import { useState } from 'react'
function MyWatchList2Poup(props){
    let [ListArr,setListArr]=useState([])
    function changeList(page=1){
   
        fetch('https://rickandmortyapi.com/api/episode?page='+page+'&name='+document.getElementById('poup__episode__list__inp').value)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
            

    let copy=[]
    for(let i=0;i<data.results.length;i++){

        copy.push(data.results[i].name)
    }
    setListArr(copy)
   



    }).catch((error) => {

        setListArr([])
     
      });

    }
    function getValue(id){

        let value=document.getElementById(id).value
        document.getElementById('poup__episode__list__inp').value=value
        changeList()
    }
    function applyFilters(page=1){
        let name=''
      
        fetch('https://rickandmortyapi.com/api/episode?page='+page+'&name='+document.getElementById('poup__episode__list__inp').value)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{

            name=data.results[0].name
        
            if(document.getElementById('poup__episode__list__inp').value.toLowerCase()===name.toLowerCase() && data.results.length>0){
                props.getWatchFiltres('none',name)
                setListArr([])
                document.getElementById('poup__episode__list__inp').value=''
            }else{
                console.log(name,data)
                alert("There isn't any Episodes ")
            }
          
    }).catch((error) => {
        alert("There isn't any Episodes ")
      });
    
    

    }
    function closeList(){
        setListArr([])
    }
    return(
        <div className="poup poup__watchList" onClick={closeList} style={{display:props.isVisibleWatch}}>
            <img className='closeBtn' src={close} alt="" onClick={()=>props.closeWithoutChange('none')}/>
        <div className="poup__episode__filter__text" >Enter name of Episode you want watch:</div>
        <input className="poup__episode__filter__inp" id="poup__episode__list__inp" onClick={changeList} onChange={changeList} autoComplete="off" type="name" placeholder="Episode"/>
        <button className="btn" id="apply__list" onClick={applyFilters}>Apply</button>
        <ListOfOptions ListArr={ListArr} getValue={getValue}/>
         </div>
    )
}
export default MyWatchList2Poup