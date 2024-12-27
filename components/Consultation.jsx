import React from 'react';
import FadeInSection from '../components/FadeInSection';

function Consultation() {
  return (
    <div className='bg-BG'>
        <div className="mx-auto max-w-[1440px] p-10 ">
        <FadeInSection>
        <div className="flex justify-between flex-col TB:flex-row items-center text-white">
        <FadeInSection>
      <div className="max-w-lg TB:px-10">
      <h2 className="text-4xl font-cormorant leading-[40px] font-medium mb-5">Professional immigration services tailored just for you!</h2>
<p className="mb-6 font-outfit font-medium TB:text-lg ">Receive personalized support and expert guidance to make your immigration journey smooth and successful.</p>

        <a href="#contact-us" className="p-3 mb-10 bg-Gold border-2 border-transparent hover:bg-transparent hover:border-Gold hover:text-white justify-center items-center inline-flex text-[#1F2732] text-xl font-medium font-outfit">
      Contact Us
    </a>
      </div>
      </FadeInSection>
      <FadeInSection>
      <a href="tel:+16479559590" className='flex bg-white p-5 no-underline'>
      <div className="border-[10px] border-WH bg-white p-10 cursor-pointer">
        <h3 className="text-4xl font-cormorant leading-[40px] font-bold text-black text-center  mb-3">Get a Consultation</h3>
        <p className="mb-4 text-WH">Don’t miss this opportunity to turn your dreams into reality!</p>
        <div className="flex items-center gap-2">
        <img src="/CallI.svg" alt="Icon" className='h-[70px]' />
        <div className='flex flex-col'>
          <span className="font-outfit font-medium TB:text-lg text-black">Call Us On:</span>
          <span className="font-outfit font-medium TB:text-2xl text-black">+1(647)-955-9590</span>
          </div>
          </div>
        </div>
      </a>
      </FadeInSection>
    </div>
    </FadeInSection>
    </div>
      </div>
  );
}

export default Consultation;
