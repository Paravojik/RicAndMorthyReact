import { useState } from 'react'
import './MyWatchList2.css'
import MyWatchList2Card from './MyWatchList2Card'

import MyWatchList2Controls from './MyWatchList2Controls'

function MyWatchList2(){
    let [arrOfEpisodes,setArrOfEpisodes]=useState(JSON.parse(localStorage.getItem('arrOfEpisodes__LS')) || [])
    function getEpisodeWatch(val){
        let copy=[...arrOfEpisodes]
        copy.push({id:arrOfEpisodes.length,name:val,isWatched:false,isDeleted:'flex'})
        setArrOfEpisodes(copy)
        // setArrOfEpisodes([...arrOfEpisodes,arrOfEpisodes[0].isWatched='true'])
        // console.log(arrOfEpisodes)
        localStorage.setItem('arrOfEpisodes__LS',JSON.stringify(copy))
      
    }
    function changeIsWatched(id){
        let copy=[...arrOfEpisodes]
        let cur=copy.find(i=>i.id===id)
        cur.isWatched=!cur.isWatched
        setArrOfEpisodes(copy)
        localStorage.setItem('arrOfEpisodes__LS',JSON.stringify(arrOfEpisodes))
        // console.log(arrOfEpisodes,copy[id].isWatched=!iswatch,'cur',cur)
    }
    function deleteWatch(id){
        let copy=[...arrOfEpisodes]
        let cur=copy.find(i=>i.id===id)
        cur.isDeleted='none'
        setArrOfEpisodes(copy)
        localStorage.setItem('arrOfEpisodes__LS',JSON.stringify(arrOfEpisodes))
    }
return(
    <div className="container myWatchList">
       
        {arrOfEpisodes.map((item)=>{
            // console.log(item)
            return(
                <MyWatchList2Card id={item.id} name={item.name} isWatched={item.isWatched} isDeleted={item.isDeleted} changeIsWatched={changeIsWatched} deleteWatch={deleteWatch}/>
            )
        })}
        
        <MyWatchList2Controls getEpisodeWatch={getEpisodeWatch}/>
    </div>
)
}
export default MyWatchList2