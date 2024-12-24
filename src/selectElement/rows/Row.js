import './Row.css';
import React from 'react';

export default function Row(props) {
    return (
        <div className="row" id='row'>
            <span className="number">{props.number}</span>
            <p className='created'>{props.created}</p>
            <input type="checkbox" name="" id="" />
        </div>
    )
}