import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className='centered h-screen -mt-20'>
          <div>
            <div className="text-white">
              <p className='text-4xl md:text-6xl font-bold text-center'>Commodity Price Control System </p>
            </div>
            <div className='space-x-10 mt-9 centered'>
              <button className='bg-red-500'>Login</button>
              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
