import React from 'react';
import AnimatedHeart from './AnimatedHeart';
import AnimatedStar from './AnimatedStar';

const HeaderSection = () => (
  <div className='flex flex-col justify-center items-center'>
    <div className='max-w-[900px] text-center text-gray-900 text-[45px] font-bold font-cormorant leading-[51.57px]'>
      Achieve your Canadian immigration goals with our expert guidance
 
    </div>
    
   
    <img src="/IconP.svg" alt="Icon" className='m-5 h-[40px]' />
  </div>
);

const ClientsAndCases = () => (
  <div className='flex flex-col TB:flex-row justify-center TB:gap-20'>
    <div className='flex flex-row justify-center items-center'>
      <AnimatedHeart />
      <div className='text-center text-zinc-900 text-2xl font-bold font-cormorant leading-[34.38px]'>Trusted Clients</div>
    </div>
    <div className='flex flex-row justify-center items-center'>
      <AnimatedStar />
      <div className='text-center text-zinc-900 text-2xl font-bold font-cormorant leading-[34.38px]'>Successful Cases</div>
    </div>
  </div>
);

const PartnersComponent = () => (
  <div className='flex justify-center items-center gap-5'>
    <img src="/IconP.svg" alt="Icon" className='m-5 h-[40px]' />
    <div className='text-center text-zinc-900 text-[45px] font-bold font-cormorant leading-[51-57px]'>The Partners</div>
    <img src="/IconP.svg" alt="Icon" className='m-5 h-[40px]' />
  </div>
);

const Sponsors = () => (
  <div className='flex flex-col TB:flex-row justify-center items-center gap-10 TB:gap-24 my-10'>
    <img src="/Goya.png" alt="Goya" className='h-[80px]' />
    <img src="/BizzBizz.png" alt="Bizz" className='h-[90px]' />
  </div>
);

function Partners() {
  return (
    <div className="mx-auto max-w-[1440px] p-10">
      <HeaderSection />
      <ClientsAndCases />
      <PartnersComponent />
      <Sponsors />
    </div>
  );
}

export default Partners;
