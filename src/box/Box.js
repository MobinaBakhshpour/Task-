import './Box.css';
import React from 'react';

export default function Box(props) {

    return (
        <div className="container" id='container'>
            <div className="title"><h3>{props.title}</h3></div>
            <div className="btn">{props.name}</div>
            {props.children}
        </div>
    )
}