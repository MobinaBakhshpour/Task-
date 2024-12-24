import './Row.css';
import React, { useState } from 'react';
export default function Row(props) {

    const [checked, setChecked] = useState(false)
    

    function checkedChangeHandler(event) {
        props.onCheckChange(props.idRow, event.target.checked)

        
    }

    return (
        <div className="row" id='row'>
            <span className="number">{props.number}</span>
            <p className='created'>{props.created}</p>
            <input type="checkbox" name="" id={props.idRow}  checked={props.isCkecked} onChange={checkedChangeHandler} />
        </div>
    )
}