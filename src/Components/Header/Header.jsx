
import './Header.css'
// import 'jquery'
// import $ from 'jquery'
import { Link } from 'react-router-dom'
function Header(props){
//   let [currentClicked,setCurrentClicked]=useState(1)
// function changeColor(num){
//     setCurrentClicked(num)

// }
let currentClass=['header']
if(props.thema==='thema__white'){
    currentClass.push('thema__white__header')
}else if(props.thema==='thema__black'){
    currentClass.push('thema__black__header')
}
    return(
        <header className={currentClass.join(' ')}>
        <div className="header__logo">Rick and Morty info</div>
        <div className="header__section">
        
            <div className="header__section__page"  ><Link className="header__section__page__a"   id="header__section__page__characters" to='/' style={{color:'white'}} >Characters</Link></div>
            <div  className="header__section__page"  >    <Link className="header__section__page__a" id="header__section__page__episodes" to='/episodes' style={{color:'white'}}>Episodes</Link></div>
            <div  className="header__section__page"  ><Link className="header__section__page__a" id="header__section__page__locations" to='/locations' style={{color:'white'}}>Locations</Link></div>
            <div  className="header__section__page"  ><Link className="header__section__page__a" id="header__section__page__watchList" to='/myWatchList'style={{color:'white'}} >My watch list</Link></div>
        </div>
    </header>
    )
}
export default Header