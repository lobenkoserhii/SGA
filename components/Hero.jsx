import React from 'react';
import FadeInSection from '../components/FadeInSection';

import Layout from '../components/Layout'

function Hero() {
  return (
    <>
      <section className="TB:bg-[url('/Header.png')] bg-[url('/Header_mob.png')] w-full TB:h-[800px] bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout/>

        <div className='mx-auto max-w-[1440px] p-10'>
          <div className='flex flex-col justify-center items-start mt-[80px] gap-10'>
            <img src="/Sep.svg" alt="Sep" className='w-[95px] h-[44px]' />
            <h1 className='text-white w-[300px] TB:w-full text-2xl TB:text-[32px] font-normal font-outfit'>
              Our expert immigration consultants <br /> are ready to assist you
            </h1>
            <a href="#" className="TB:w-[230px] TB:py-4 p-3 bg-Gold justify-center items-center gap-2.5 inline-flex">
              <div className="text-gray-800 text-xl TB:text-[22px] font-medium font-outfit capitalize">Get In Touch</div>
            </a>
            
            <div className='relative w-full '>
              <div className='flex flex-row TB:items-center TB:justify-center items-center justify-start TB:gap-5 gap-2 mx-auto'>
                <img src="/Low_Society.svg" alt="Low_logo" className='TB:w-[192px] w-[92px]' />
                <img src="/RCIC.png" alt="RCIC_logo" className='TB:w-[170px] w-[70px]' />
              </div>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>
    </>
  );
}

export default Hero;
