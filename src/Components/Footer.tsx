import React from 'react'
import "../Styles/Footer.css";
 import instagram from "../Assests/instagram.webp";
 import twitter from "../Assests/twitter.webp";
 import linkedin from "../Assests/linkedin.webp";
 import facebook from "../Assests/facebook.webp";
 import youtube from "../Assests/youtube.webp";
 import footertoppic from "../Assests/footertoppic.webp";
 import footerandget from "../Assests/footerandget.webp";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footertop">
              <ul className="footerlist">
    <li>
      <a href="#">
        <i className="ri-home-2-fill colorchange"></i>
        Home
      </a>
    </li>

    {/* ggg */}
<li>
      <a href="#">
        <i className="ri-user-3-fill colorchange"></i>
        Aboutme
      </a>
    </li>

    {/* hh */}
    {/* 3 */}
<li>
      <a href="#">
           <i className="ri-mail-fill  colorchange"></i>
        work
      </a>
    </li>
    {/* 3 */}

    {/* 4 */}
    <li>
      <a href="#">
         <i className="ri-phone-fill  colorchange"></i>
        Phone
      </a>
    </li>
    {/* 4 */}
  </ul>
     
  


        </div>

 <div className="Allfooterlogos">
    <div className="posalllogos">
  <a href="#" > <img src={instagram} width={30}  height={10} className="logo-img"  />  </a>
 

  {/* hhh */}
  <a href="#"><img src={twitter}  width={30}  height={10} className="logo-img" /> </a>  

 
    

    <a href="#"><img src={linkedin}  width={30}  height={10}   className="logo-img" /></a>
  <a href="#" > <img src={facebook}   width={30}  height={10}  className="logo-img" /></a> 
   <a href="#"> <img src={youtube}    width={30}  height={10} className="logo-img" /></a> 
 
</div>
   </div>

   <div className="terms">
    <div className="endfooter">
        <div className="privacy">Terms of Service - Privacy Policy </div>
         {/* <div className="gettouchlastsec"> */}
     {/* <img src={footerandget}  className="gettouchlastsec"   /> */}
{/* 
</div>   */}

    </div>

   </div>

   {/* pics place top */}
   <div className="footerpostop">
   <div className="footerpics">
    <img src={footertoppic}   className="footercirclepic" />
    </div>

    
   </div>
{/* picsplace top */}

{/* pic inboth section */}

   <div className="gettouchlastsec">
     <img src={footerandget}  className="lastimg"   />

</div>   

{/* pic in both section */}

    </section>
  )
}

export default Footer