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
    
    
    
    // $('.location__container__table').append('<tr className="episode__row"><td className="episode__row__val">'+data.results[i].id+'</td><td className="episode__row__val">  '+data.results[i].name+'</td><td className="episode__row__val">'+data.results[i].type+'</td><td className="episode__row__val">'+data.results[i].dimension+'</td><td className="episode__row__val">'+data.results[i].residents.length+'</td></tr>')
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
        <thead className="episode__row">
            <tr>
            <th className="episode__row__val episode__row__val__id">Id</th>
            <th className="episode__row__val">Name</th>
            <th className="episode__row__val">Type</th>
            <th className="episode__row__val">Dimension</th>
            <th className="episode__row__val">Residents</th>
            </tr>
          
           </thead>
           {currentPageLocations.map((item)=>{
            let curentKey='episode__rowKey'+item.id
            return(
                <tbody key={curentKey} className="episode__row">
                    <tr>
                    <td className="episode__row__val">{item.id}</td><td className="episode__row__val">{item.name}</td><td className="episode__row__val">{item.type}</td><td className="episode__row__val">{item.dimension}</td><td className="episode__row__val">{item.residents.length}</td>
                    </tr>
                    </tbody>
            )
           })}
    </table>
    <div className="controls__box">
    <LocationControls amountOfPages__locations={amountOfPages__locations} getLocations={getLocations}/>
    </div>

</div>
)
}
export default LocationContainer