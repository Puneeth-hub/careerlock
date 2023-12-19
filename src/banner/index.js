import React from 'react'; 
import './index.css'; 



const Banner = () =>{
    return(
        <div className='banner' >
           <div className='banner-content'>
                <div>
                    <h1 className='welcom-text-app'>Welcome to our App</h1>
                    <button className='get-started-btn'>Get started</button>
                </div>
           </div>
        </div>
    )
}
export default Banner;