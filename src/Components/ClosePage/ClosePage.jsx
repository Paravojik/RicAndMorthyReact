import './ClosePage.css'
function ClosePage(props){
    return(
        <div className='closePage' onClick={()=>props.closeWithoutChange('none')} style={{display:props.isVisibleFilter}}>
            
        </div>
    )
}
export default ClosePage