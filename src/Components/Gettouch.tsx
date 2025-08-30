import React from "react";
import "../Styles/Gettouch.css";
import girlsit from "../Assests/girlsit.webp";
import gettouchlastpic from "../Assests/gettouchlastpic.webp";
const Gettouch = () => {
  return (
    <section className="gettouch">
      <div className="picturegirl">
        <img src={girlsit} width="30%" />
      </div>

      <div className="gettouchform">
        {/* <div className="container"> */}
        <div className="textside">
          <div className="textsideform">
            <h2 className="formhead">Get in touch</h2>
            <p className="form-content">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
          </div>

          <div className="formicons">
            <div className="uipic1">
              <i className="ri-phone-fill"></i>
            </div>
            {/* <div className="div"> */}
            <p className="icontext">1-514-456-2753</p>
            {/* </div> */}
          </div>

          {/* secondformicon */}

          <div className="formicons">
            <div className="uipic1">
              <i className="ri-mail-fill"></i>
            </div>
            {/* <div className="div"> */}
            <p className="icontext">Sou12@gmail.com</p>
            {/* </div> */}
          </div>
        </div>
        {/* secondformicon */}

        {/* </div> */}

        <div className="rightformside">
          <h2 className="message">Send me a message</h2>
          <div className="allinputs">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="input-field"
            ></input>
          </div>

          {/* 2 */}
          <div className="allinputs">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="EmailAddress"
              className="input-field"
            ></input>
          </div>

          {/* 2 */}
          {/* 3 */}
          <div className="allinputs">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Subject"
              className="input-field"
            ></input>
          </div>
          {/* 3 */}

          {/* testarea */}

          <div className="areatext">
            <textarea
              id="message"
              name="message"
              placeholder="Yourmessage"
              className="areaoftext"
            ></textarea>
          </div>

          {/* textarea */}

          <button className="round-button  linearcolor  noborder">
            Sendmessage
          </button>
        </div>
      </div>

      {/* lastpic */}

      {/* <div className="gettouchlastsec">
     <img src={gettouchlastpic}  className="lastimg"   />

</div>  */}

      {/* lastpic */}
    </section>
  );
};

export default Gettouch;
