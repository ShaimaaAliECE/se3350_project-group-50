import PropTypes from 'prop-types'
import {draggedItem, setDraggedItem} from '../App.js'
//function for dragable numbers
function Number(num){
    return(
    <td className="number" draggable onDragStart={() => {setDraggedItem(num)}}>
        {
            num
        }
    </td>
    )
}

Number.propTypes = {
    num : PropTypes.number,
}

export default Number;