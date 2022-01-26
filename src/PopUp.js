import React, { useState } from 'react';

const PopUp = ({open, setIsOpen, data}) => {
    console.log(open, data)

    const body = <div className='popup'><div className='popupinfo'>
    <p>hejka</p>
    <p>baterry {data && data.batteryLevelPct} %</p>
    <p>tablice {data && data.platesNumber} </p>
    <p>zasięg {data && data.rangeKm} km</p>
    <p>Status: {data && data.status} </p>
    <button onClick={()=>{setIsOpen(false)}}>x</button></div></div>


    return  (open && body)
}
 
export default PopUp;