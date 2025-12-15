import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'remixicon/fonts/remixicon.css'
import "./Styles/Commonstyles.css";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Aboutme from './Components/Aboutme';
import Recent from './Components/Recent';
import Gettouch from './Components/Gettouch';
import Footer from './Components/Footer';


// import './App.css';

function App() {
  return (
  <>
<Header/>
<Hero/>
<Aboutme/>
<Recent/>
<Gettouch/>
<Footer/>


  </>
  );
}

export default App;
