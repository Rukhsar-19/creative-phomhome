import React from 'react'
import "../Styles/Hero.css";
  import herotop from "../Assests/herotop.webp";
  import herodownbackshadow from "../Assests/herodownbackshadow.webp";
const Hero = () => {
  return (
    <section className="hero">
        
          {/* relativeimg */}
          <div className="headerstrip">
            <ul className="sidebar">
                <li>  <a href="#">
    <i className="ri-home-4-line"></i>
  </a> </li>
                <li><a href="#"><i className="ri-user-minus-line"></i></a></li>
                <li><a href="#"><i className="ri-shopping-bag-line"></i></a></li>
                <li><a href="#"><i className="ri-phone-fill"></i></a></li>
                <li><a href="#"><i className="ri-search-line"></i></a></li>
            </ul>

          </div>
            <div className="imagepos">
                <div className="herotopimg">
                <img src={herotop}    className="heroside" />
                </div>

                  {/* <div className="herodown"> */}
                    <img src={herodownbackshadow} className="herodown"/>

                {/* </div>    */}

                </div>
                {/* text */}
                <div className="heroallcontentpos">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                <div className="herocontent">
                    <div  className="herohead">
                        Creative UI Designer
                         Sourasith Phomhome
                        Based in Montreal

                    </div>
                    <div className="herobuttons">
                    <button  className="round-button">Hireme</button>
                    <button  className="round-button  linearcolor">DownloadCV</button>
                   </div> 
                   </div>
                 </div>
                </div>
                </div>

                {/* hj */}
                </div>
                {/* text */}

                

 

    
    
    </section>
  )
}

export default Hero