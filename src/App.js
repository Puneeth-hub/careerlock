import React from 'react';
import Navbar from './navbar';
import Banner from './banner';
import BoxComponent from './boxes';
import Brain from "../src/images/brain.jpg";
import Connecting from "../src/images/connectbrain.jpg";
import Artifical from "../src/images/artifical.jpg";
import MyFooter from './footer';


import './App.css';

function App() {
 
  return (
    <div className='app'>
       <Navbar/>
       <Banner/>
    <div>
       <BoxComponent
         id={1}
         imageSrc={Brain}
         title='Network conecpt'
         description='The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.'
       />
       <BoxComponent
         id={2}
         imageSrc={Artifical}
         title='Cyberware house'
         description='The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.'
       />
       <BoxComponent
         id={3}
         imageSrc={Connecting}
         title='Admintration Security'
         description='The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.'
       />
      </div>
    <MyFooter/>
    </div>
  );
}

export default App;
