import './MyWatchList2.css'
import tickBlack from '../../img/tickBlack.png'
import tickGreen from '../../img/tickGreen.png'
import basket from '../../img/basket.png'
function MyWatchList2Card(props,{key}){
    let currentKey='MyWatchList2CardKey'+key
    return(
        <div key={currentKey} className="myWatchList__box" style={{display:props.isDeleted}}>
            <div className="myWatchList__box__text">{props.name}</div>
                <div className="myWatchList__box__btns">
            <img className="myWatchList__box__btns__btn myWatchList__box__btns__status" src={(props.isWatched) ? tickGreen : tickBlack}alt="" onClick={()=>props.changeIsWatched(props.id)}/>
            <img className="myWatchList__box__btns__btn myWatchList__box__btns__delete" src={basket}  onClick={()=>props.deleteWatch(props.id)} alt=""/>
                </div>
        </div>
    )
}
export default MyWatchList2Card