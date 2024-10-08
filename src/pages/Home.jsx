import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroCard from "../components/HeroCard/HeroCard.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import wave from "../assets/wave Gif.gif";
import Rapidscat from "../components/Rapidscat/Rapidscat.jsx";
import Satelite from "../components/Satelite/Satelite.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Footer5 from "../components/Footer/Footer5.jsx";

import AOS from "aos";
import "aos/dist/aos.css";




const Home = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
        });
      });
      return (
        <>


        <Navbar />
        <div className="">
          <div className="h-[700px] relative">
            
            <Hero />

            <video
              autoPlay
              loop
              muted
              className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
            >
              <source src={BgVideo} type="video/mp4" />
            </video>
            
            <Hero />
            
          </div>
          

          


          
          
          <HeroCard 
          
          
          
          />
         
          

          <Rapidscat />

          
          <Satelite />
          {/* <Footer /> */}
          <Footer5 />
        </div>
        </>
      );
    };
    

export default Home