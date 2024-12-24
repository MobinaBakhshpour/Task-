import { click } from '@testing-library/user-event/dist/click';
import './Select.css';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Select(props) {

    function clickArrow() {
        let arrowElm = document.getElementById('arrow');

        arrowElm.style.transform == '' ? arrowElm.style.transform = 'rotate(180deg)' : arrowElm.style.transform = '';

    }



    return (
        <div className="select">
            <span className="idName">{props.id}</span>
            <p className='quantity'>quantity :{props.quantity}</p>
            <div className='groupCheckboxIcon'>
                <input type="checkbox" name="checkbox" id="" />
                <div id="arrow" onClick={clickArrow}>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    )
}