import React from 'react'
import "../Styles/Aboutme.css";
   import ellipsesec2 from "../Assests/epillipsesec2.webp";
    
    import aboutmegirl from "../Assests/aboutmegirl.webp";
     import diamondaboutme from "../Assests/diamondaboutme.webp";
const Aboutme = () => {
  return (
    <section className="aboutme">
        <div className="backgroundellipse">
            <img src={ellipsesec2} /> 
            
             <div className="linearcolorcircle">
             <div className="girl">
                <img src={aboutmegirl} />

             </div>
             <div className="aboutmecontent">
                <h2 className="aboutmehead">About me</h2>
                <p className="aboutmepara">My name is Sourasith Phomhome. I’m a UI Designer and a instrutor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...read more</p>

             </div>

             </div>
             {/* circle end */}

             {/* diamond */}
             <div className="diamondaboutme">
                <img src={diamondaboutme} />

             </div>
        </div>
       



    </section>
  )
}

export default Aboutme