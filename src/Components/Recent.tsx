import React from 'react'
import "../Styles/Recent.css";


import "swiper/css";
// import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation,EffectCoverflow } from 'swiper/modules';
//  import 'swiper/css/navigation';
//  coverfloweffect
import  'swiper/css/effect-coverflow';

   import swiperpic1 from "../Assests/swiperpic1.webp";
      import swiperpic2 from "../Assests/swiperpic2.webp";
      import swiper3 from "../Assests/swiper3.webp";
const Recent = () => {
  return (
    <section  className="recent main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  <div className="recentposswiper">
                    <h2 className="recenthead">My recent work</h2>

                {/* </div> */}
{/* swiper col */}

{/* <div className="col-lg-12"> */}
 <Swiper
            
             effect={'coverflow'}
             grabCursor={true}
            
              // navigation={true}
                   modules={[Navigation,EffectCoverflow]}

                    
                  //
               spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              
              //   pagination={{ clickable: true }}
              //   autoplay={{ delay: 5000 }}
              loop={true}
              // coverfloweffgect
           coverflowEffect={
            {
              rotate:0,
              stretch:0,
              depth:100,
              modifier:2.5,

            }
           }
          


              // coverfloweffect
               navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev  .swiper-button-prev ',
    
  }}
              className="mySwiper   swiper-effect"
              // breakpoints  
  //                           breakpoints={{
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   430: {
  //     slidesPerView: 1,
  //     spaceBetween: 15,
  //   },
  //   932: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  // }}
// end breakpoints
 
  
            >
            
           <SwiperSlide>
  <div className="imagecontainer">
    <div className="glass-card">
      <img src={swiperpic1} className="slide-image" />
      <div className="designs-label">
  Designs
</div>

   
    </div>
  </div>
</SwiperSlide>

            {/* 2nd slide start */}
                   
           <SwiperSlide>
  <div className="imagecontainer  blurback">
    <div className="glass-card">
      <img src={swiperpic2} className="slide-image" />
      <div className="designs-label">
 UIDesigns
</div>

   
    </div>
  </div>
</SwiperSlide>    
            
{/* 2nd swiper end */}

{/* 3rd slide */}
 
           <SwiperSlide>
  <div className="imagecontainer">
    <div className="glass-card">
      <img src={swiper3} className="slide-image" />
      <div className="designs-label">
  Mockup
</div>

   
    </div>
  </div>
</SwiperSlide>

{/* 3rd slide */}
   
   {/* controller*/}

<div className="slider-controller">
  <div className="swiper-button-prev slider-arrow">
    {/* <i className="ri-arrow-left-line"></i> */}
     
  </div>

   <div className="swiper-button-next slider-arrow">
   {/* <i className="ri-arrow-right-fill"></i>
      */}
  </div>

</div>




   {/* controller */}
            

                  
             
             
            </Swiper>


</div>


{/* iii */}
</div>
{/* iii */}

            
            </div>


        </div>


    </section>
    
  )
}

export default Recent