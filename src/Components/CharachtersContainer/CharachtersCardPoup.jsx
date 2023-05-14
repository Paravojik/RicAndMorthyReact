import './CharachtersContainer'
import { useState,useEffect } from 'react'
import close from '../../img/close.png'
 function CharachtersCardPoup(props){
    
    let [episodeVal,setEpisodeVal]=useState('')
    let data=props.data

    useEffect(()=>{
        let episodeValInFunc=''
        for(let i=0;i<data.episode.length;i++){
            let episode=data.episode[i]
    
            // console.log(episode.substring(episode.lastIndexOf('/')+1))
            episodeValInFunc+=episode.substring(episode.lastIndexOf('/')+1)+', '
            // setEpisodeVal(episodeVal+episode.substring(episode.lastIndexOf('/')+1)+', ')
            if(i>8){
                // setEpisodeVal(episodeVal+'and more,')
                episodeValInFunc+='and more,'
               
                i=data.episode.length+1
            }

            // $('.poup__episods__numbers').html(episodeVal.substring(0,episodeVal.lastIndexOf(',')))
       
        }
        episodeValInFunc=episodeValInFunc.substring(0,episodeValInFunc.lastIndexOf(','))
        setEpisodeVal(episodeValInFunc)
    },[data])
    // for(let i=0;i<data.episode.length;i++){
    //     let episode=data.episode[i]

    //     // console.log(episode.substring(episode.lastIndexOf('/')+1))
    //     // episodeVal+=episode.substring(episode.lastIndexOf('/')+1)+', '
    //     setEpisodeVal(episodeVal+episode.substring(episode.lastIndexOf('/')+1)+', ')
    //     if(i>8){
    //         setEpisodeVal(episodeVal+'and more,')
    //         // episodeVal+='and more,'
    //         i=data.episode.length+1
    //     }
    //     // $('.poup__episods__numbers').html(episodeVal.substring(0,episodeVal.lastIndexOf(',')))
   
    // }
    // console.log(props.data)
    // setEpisodeVal(props.closePoup)
    // console.log(props.closePoup)
    // console.log(props.data)
    let currentClass=['poup','poup__charachter__info']
    if(props.thema==='thema__white'){
        currentClass.push('thema__white__box')
    }else if(props.thema==='thema__black'){
        currentClass.push('thema__black__box')
    }
    return(
        <div className={currentClass.join(' ')} style={{display:props.isVisible,filter:'blur(0px)'}}>
            <img className='closeBtn' src={close} alt="" onClick={()=>props.ClickPoup('none')}/>
        <img className="avatar poup__img" id="poup__img" src={props.data.image} alt="img"/>
        <div className="cardName poup__name"id="poup__name">{props.data.name}</div>
   <div className="poup__group">
    <div className="poup__group__gender poup__group__item">Gender: {props.data.gender}</div>
    <div className="poup__group__status poup__group__item">Status: {props.data.status}</div>
    <div className="poup__group__species poup__group__item">Species: {props.data.species}</div>
    <div className="poup__group__location poup__group__item">Location: {props.data.location.name}</div>
   </div>
   <div className="poup__episods">
    <div className="poup__episods__text">Took part in episods:</div>
    <div className="poup__episods__numbers">{episodeVal}</div>
   </div>
    </div>
    )
 }
 export default CharachtersCardPoup