import { click } from '@testing-library/user-event/dist/click';
import './Select.css';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Row from './rows/Row';
import dataList from '../datas';


export default function Select(props) {

    const [isRotated, setRotated] = useState(false)
    const [isChecked, setCheck] = useState(false)
    let chechedTrue =[]
    function clickArrow(event) {
        setRotated(prev => !prev)
    }

    function handelCheckChange (rowID, isChecked) {
        console.log(rowID, isChecked);
        if (chechedTrue) {
            chechedTrue.push(props.idElm)
        }else{
            chechedTrue =[props.idElm]
        }
        console.log(chechedTrue);
         

    }

    return (
        <>
            <div className="select">
                <span className="idName">{props.idElm}</span>
                <p className='quantity'>quantity :{props.quantity}</p>
                <div className='groupCheckboxIcon'>
                    <input type="checkbox" name="checkbox" id={props.idElm}/>
                    <div id="arrow" onClick={clickArrow} style={{ transform: isRotated ? "rotate(180deg)" : "rotate(0deg)", cursor: 'pointer' }}>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>

            {isRotated && <div className="subMenu">
                {Object.entries(dataList).map(([key, data]) => (
                    data.map((item, index) => {
                        if (key === props.idElm) {
                            return <Row number={index + 1} created={item.created} idRow={item.uniqueId} isChecked='false' onCheckChange={handelCheckChange}></Row>
                        }
                        return null
                    }
                    ))
                )}
            </div>}
        </>
    )
}