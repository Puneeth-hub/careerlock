import React from 'react'; 
import SwipeableButton from '../custombutton';
import './index.css' 

const BoxComponent = ({imageSrc,title,description})=>{
    return(
        <div className='box'>
            <img src={imageSrc} alt='Box image'/> 
            <div className='content'>
                 <h2 className='box-tilte-head'>{title}</h2>
                 <p className='box-description'>{description}</p>
            </div> 
            <SwipeableButton/>
            
        </div>
    )
}
export default BoxComponent;