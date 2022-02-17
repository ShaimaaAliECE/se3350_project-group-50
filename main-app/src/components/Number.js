import PropTypes from 'prop-types'
import {draggedItem, setDraggedItem} from '../App.js'
//function for dragable numbers
function Number(props){
    return(
    <td className="number" draggable onDragStart={() => {setDraggedItem(props.num)}}>
        {
            props.num
           
        }
    </td>
    )
}

console.log('test');
export default Number;