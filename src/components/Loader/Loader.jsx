

import React from 'react';

const Loader = () => {
  return (
    <div className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden main">
   
      <div className="stars"></div>
      <div className="twinkling"></div>
      
   
      <div className="rocket-container">
        <div className="rocket">
          🚀
        </div>
      </div>

     
      <p className="absolute text-white bottom-20 text-xl animate-bounce">
        Fasten your seatbelt, we’re time-traveling to Sangam’s portfolio!
      </p>

     
      <style jsx>{`
        
        .stars, .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .main{
        background: url('https://www.paulmarlier.fr/wp-content/uploads/2019/01/Dark-Deep-Space-4K-Wallpaper1.jpg') no-repeat center center fixed;
        }

        // .stars {
        //   background: url('https://www.transparenttextures.com/patterns/stardust.png') repeat; 
        //   z-index: 0;
        // }

        // .twinkling {
        //   background: transparent url('https://www.transparenttextures.com/patterns/noisy-net.png') repeat; 
        //   z-index: 1;
        //   animation: move-twinkle 200s linear infinite; 
        // }

       
        .rocket-container {
          position: absolute;
          top: 50%;
          left: 0;
          animation: rocket-fly 5s ease-in-out infinite alternate;
        }

        .rocket {
          font-size: 4rem;
          rotate: 45deg;
          
        }

        
        @keyframes rocket-fly {
          0% { left:0% }
          50% { left: 50% }
          100% { left: 100% }
        }

      
        @keyframes move-twinkle {
          0% { background-position: 0 0; }
          100% { background-position: -10000px 5000px; }
        }

     
      `}</style>
    </div>
  );
};

export default Loader;
