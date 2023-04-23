import Controls from '../Controls/Controls'
import CharachtersCard from './CharachtersCard'
import './CharachtersContainer.css'
// import 'jquery'
// import $ from 'jquery'
import { useEffect, useState } from 'react'
function CharachtersContainer(){

//    let [currentFiltres,setCurrentFiltres]=useState('')
let [amountOfPages,setAmountOfPages]=useState('')
   let [currentPage,setCurrentPage]=useState([])
   console.log(currentPage)
//    setCurrentPage(props.charachtersPage)

// let currentArrOfCharachters=['sdfsd','sdfs']

    function getPage(page,currentFiltres=''){
        fetch('https://rickandmortyapi.com/api/character/?page='+page+currentFiltres)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)

    setAmountOfPages(data.info.pages)
    setCurrentPage(data.results)
   
    // currentArrOfCharachters=data.results
    console.log('a',currentPage,amountOfPages)

    // $('.charachters__container').empty('')
//     for(let i=0;i<data.results.length;i++){

   

//    $('.charachters__container').append('<div class="card"> <img class="avatar" src="'+data.results[i].image+'" alt="img"><div class="cardName">'+data.results[i].name+'</div><button class="infoBtn" id="'+data.results[i].id+'">info</button></div>')
//     }

    
    // $('.infoBtn').click(function(e){
    //     getCharavherById(e.target.id)
    //     setTimeout(function(){
    //         $('.poup__charachter__info').show(100)
    //         $('.wrap').css('filter','blur(5px)')
    //     },110)


    // })
        }).catch((error) => {
            console.log(error)
            alert("There isn't any charachter ")
          });
    }
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)

    setAmountOfPages(data.info.pages)
    setCurrentPage(data.results)
   
    // console.log('a',currentPage,amountOfPages)
        }).catch((error) => {
            console.log(error)
            alert("There isn't any charachter ")
          });

    },[])

    // getPage(1)

//  function getFiltersCharacters(val){
// // if(val!==NaN){
    
//     // setCurrentFiltres(val)
//     console.log(val)
//     // setCurrentPage(1)
//     // getPage(1)
// // }
//  }
    return(
        <div className="container charachters__container"  >
            {/* <button onClick={()=>getPage(1)}>Start</button> */}
            {/* <div className="card">
             <img className="avatar" src="" alt=""/>
            <div className="cardName">Aboba</div>
            <button className="infoBtn">info</button>
            </div> */}
            
            {currentPage.map((item)=>{
                // console.log(item)
                return(
                <CharachtersCard  data={item} image={item.image} name={item.name}/>
                )
            })}
            {/* <CharachtersCard /> */}
            <Controls  amountOfPages={amountOfPages} getPage={getPage}/>
        </div>
    )
}
export default CharachtersContainer