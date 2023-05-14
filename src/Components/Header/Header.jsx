import './Header.css'
import 'jquery'
import $ from 'jquery'
function Header(props){
  
    // $('.filter').css('display','none')
    // $('#filters__charachter').css('display','flex')
 
    
    function clickCharacter(){
        $('.filter').css('display','none')
$('#filters__charachter').css('display','flex')
        $('.header__section__page').css('color','white')
        $('#header__section__page__characters').css('color','rgb(250, 81, 81)')
            $('.container').css('display','none')
        $('.charachters__container').css('display','flex') 

        
    }
    function clickEpisode(){
        $('.filter').css('display','none')
$('#filters__episode').css('display','flex')
        $('.header__section__page').css('color','white')
        $('#header__section__page__episodes').css('color','rgb(250, 81, 81)')
        $('.container').css('display','none')
        $('.episode__container').css('display','flex')
}

function clickLocations(){
    $('.filter').css('display','none')
$('#filters__locations').css('display','flex')
    $('.header__section__page').css('color','white')
    $('#header__section__page__locations').css('color','rgb(250, 81, 81)')
    $('.container').css('display','none')
    $('.location__container').css('display','flex')
}
function clickWatchList(){
    $('.filter').css('display','none')
$('#add__myWatchList').css('display','flex')
    $('.header__section__page').css('color','white')
    $('#header__section__page__watchList').css('color','rgb(250, 81, 81)')
    $('.container').css('display','none')
    $('.myWatchList').css('display','flex')
}
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
            <div className="header__section__page" id="header__section__page__characters" onClick={clickCharacter}>Characters</div>
            <div className="header__section__page" id="header__section__page__episodes" onClick={clickEpisode}>Episodes</div>
            <div className="header__section__page" id="header__section__page__locations" onClick={clickLocations}>Locations</div>
            <div className="header__section__page" id="header__section__page__watchList" onClick={clickWatchList}>My watch list</div>
        </div>
    </header>
    )
}
export default Header