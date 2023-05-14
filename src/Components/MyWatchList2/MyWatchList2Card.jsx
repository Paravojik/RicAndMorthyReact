import './MyWatchList2.css'
import tickBlack from '../../img/tickBlack.png'
import tickGreen from '../../img/tickGreen.png'
import basket from '../../img/basket.png'
function MyWatchList2Card(props,{key}){
    let currentKey='MyWatchList2CardKey'+key
    let currentClass=['myWatchList__box']
    if(props.thema==='thema__white'){
        currentClass.push('thema__white__box')
    }else if(props.thema==='thema__black'){
        currentClass.push('thema__black__box')
    }
    return(
        <div key={currentKey} className={currentClass.join(' ')} style={{display:props.isDeleted}}>
            <div className="myWatchList__box__text">{props.name}</div>
                <div className="myWatchList__box__btns">
            <img className="myWatchList__box__btns__btn myWatchList__box__btns__status" src={(props.isWatched) ? tickGreen : tickBlack}alt="" onClick={()=>props.changeIsWatched(props.id)}/>
            <img className="myWatchList__box__btns__btn myWatchList__box__btns__delete" src={basket}  onClick={()=>props.deleteWatch(props.id)} alt=""/>
                </div>
        </div>
    )
}
export default MyWatchList2Card