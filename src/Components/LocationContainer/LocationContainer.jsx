import { useEffect,useState } from 'react';
import './LocationContainer.css'
import LocationControls from './LocationControls'
function LocationContainer(){
    let [amountOfPages__locations,setAmountOfPages__locations]=useState('')
    let [currentPageLocations,setCurrentPageLocations]=useState([])
    function getLocations(page,filtres__locations=''){
        fetch('https://rickandmortyapi.com/api/location?page='+page+filtres__locations)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)
    setAmountOfPages__locations(data.info.pages)
    setCurrentPageLocations(data.results)

    
   
    // for(let i=0;i<data.results.length;i++){
    
    
    
    // $('.location__container__table').append('<tr class="episode__row"><td class="episode__row__val">'+data.results[i].id+'</td><td class="episode__row__val">  '+data.results[i].name+'</td><td class="episode__row__val">'+data.results[i].type+'</td><td class="episode__row__val">'+data.results[i].dimension+'</td><td class="episode__row__val">'+data.results[i].residents.length+'</td></tr>')
    // }
    }).catch((error) => {
        console.log(error)
        alert("There isn't any Location")
      });
    }
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/location?page=1')
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)
    setAmountOfPages__locations(data.info.pages)
    setCurrentPageLocations(data.results)
    
    }).catch((error) => {
        console.log(error)
        alert("There isn't any Location")
      });
    },[])
return(
    <div className="container location__container container__table">
    <table className="location__container__table">
        <tr className="episode__row">
            <th className="episode__row__val episode__row__val__id">Id</th>
            <th className="episode__row__val">Name</th>
            <th className="episode__row__val">Type</th>
            <th className="episode__row__val">Dimension</th>
            <th className="episode__row__val">Residents</th>
           </tr>
           {currentPageLocations.map((item)=>{
            return(
                <tr class="episode__row"><td class="episode__row__val">{item.id}</td><td class="episode__row__val">{item.name}</td><td class="episode__row__val">{item.type}</td><td class="episode__row__val">{item.dimension}</td><td class="episode__row__val">{item.residents.length}</td></tr>
            )
           })}
    </table>
   <LocationControls amountOfPages__locations={amountOfPages__locations} getLocations={getLocations}/>
</div>
)
}
export default LocationContainer