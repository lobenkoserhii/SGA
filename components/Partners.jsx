import React from 'react';
import AnimatedHeart from './AnimatedHeart';
import AnimatedStar from './AnimatedStar';

const HeaderSection = () => (
  <div className='flex flex-col justify-center items-center'>
    <div className='max-w-[900px] text-center text-gray-900 text-[45px] font-bold font-cormorant leading-[51.57px]'>
      Achieve your Canadian immigration goals with our expert guidance
      <div className='my-4 text-center text-[#909090] text-xl font-normal font-outfit border-gray-700'>
        Contact us now to get started on your path to success!
      </div>
    </div>
    
    <a href="#" className="TB:w-[250px] TB:py-4 p-3 bg-Gold border-2 border-transparent hover:bg-transparent hover:border-Gold justify-center items-center gap-5 inline-flex">
      <div className="text-gray-800 text-xl font-medium font-outfit capitalize">Book a Consultation</div>
    </a>
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
