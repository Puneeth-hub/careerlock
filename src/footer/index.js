import React from "react";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BiLogoJquery } from "react-icons/bi";




import './index.css'; 

const MyFooter = () =>{
    return(
      
        <div>
            <div className="logo-center">
              <BiLogoJquery size={35} color="white"/>
           </div>
           <div className="copyright">
           <p>Our Company Career Lock &copy; All rights reserved 2023..!</p><br/>
           
        </div>
        <footer id="footer" data-testid='footer'>
          <div className="main">
            <div className="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i className="fab fa-instagram fa-1x" />
            </div>

            <div className="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i className="fab fa-facebook fa-1x" />
            </div>

            <div className="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i className="fab fa-whatsapp fa-1x" />
            </div>

            <div class="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="white"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i className="fab fa-telegram fa-1x" />
            </div>
          </div>
        </footer>
       
      </div>


        
    )
}
export default MyFooter;