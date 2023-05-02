 import './ListOfOptions.css'
 function ListOfOptions(props){

    return(
        <div className='ListOfOptions'>
            {(props.ListArr.length>0) ? props.ListArr.map((item)=>{
                let currentId='ListOfOptionsID'+item
                return(
                    <option onClick={()=>props.getValue(currentId)} key={currentId} id={currentId} className='ListOfOptionsOption' value={item}>{item}</option>
                )
            }):<></>
            }
    

        
      
        
        </div>
    )
 }
 export default ListOfOptions