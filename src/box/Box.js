import './Box.css' ;
import React from 'react';


export default function Box(props) {
    return (
        <div className="container">
            <div className="title"><h3>{props.title}</h3></div>
        </div>
    )
}