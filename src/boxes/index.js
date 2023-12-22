import React from 'react';
import SwipeableButton from '../custombutton';
import './index.css';

const BoxComponent = ({ id, imageSrc, title, description }) => {
 


  return (
    <div className='box'>
      <img src={imageSrc} alt=''/>
      <div className='content'>
        <h2 className='box-title-head' style={{ color: 'white' }}>{title}</h2>
        <p className='box-description'>{description}</p>
      </div>
      <SwipeableButton />
    </div>
  );
};

export default BoxComponent;
