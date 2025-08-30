import React from 'react'
import "../Styles/Header.css";
 import headerlogo from "../Assests/headerlogo.webp";

const Header = () => {
  return (
    <section className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <div className="headeralllink">
                    <ul className="headlist">
                   
                      <li>  <a href="#" className="home">Home</a></li>
               <li><a href="#" className="aboutme">Aboutme</a></li> 
                    <img src={headerlogo}  className="header-logo"/>
                  <li> <a href="#" className="work">Work</a></li> 
                   <li> <a href="#" className="contact">Contact</a></li> 
                   
                    </ul>
                  </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default Header