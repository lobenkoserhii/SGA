import React from 'react';
import Image from 'next/image';
import FadeInSection from '../components/FadeInSection';

function AboutUs() {
  return (
    <div className='bg-BG'>
      <FadeInSection>
      <div className='mx-auto max-w-[1440px] p-10 flex flex-col TB:flex-row'>
      
        <div className='flex-1 flex flex-col justify-center items-center gap-10 py-10 TB:pr-10 NPC:max-w-[50%]'>
        <img src="/Photo_about_as_1.jpg" alt="Photo_about" className='bg-cover bg-no-repeat bg-center w-[467px]' />
        <img src="/Photo_about_as_2.jpg" alt="Photo_about" className='bg-cover bg-no-repeat bg-center w-[467px]' />
        </div>
        
        <div className='flex-1 flex flex-col gap-10 TB:max-w-[50%]'>
          <h1 className="text-white text-[45px] font-bold font-cormorant leading-[51.57px]">About Us</h1>
          <img src="/Sep.svg" alt="Sep" width={95} height={44} />
          <p className="text-WH text-xl font-normal leading-7 font-outfit">
            Welcome to SGA Immigration and Legal service, your dedicated partners in making your Canadian dream a reality. Welcome to a brighter future in Canada with our team! With expert immigration consultants, we navigate the complexities for you. From tailored solutions to transparent guidance, we're with you, step by step. Your aspirations drive us. Welcome to a brighter future with us.
          </p>
          <div className='flex flex-row items-center'>
            <Image src="/SG.png" alt="photo" width={130} height={130} className="rounded-full mr-10" />
            <h1 className="text-WH text-[43px] font-normal font-academy leading-[60.20px]">Spartak Gabroshvili</h1>
          </div>
          <div className="flex flex-col NPC:flex-row justify-start NPC:items-center gap-9">
            <div className="w-[250px] h-[90px] bg-gray-700 flex-row justify-center items-center gap-2.5 inline-flex">
              <Image src="/Case.svg" alt="Sep" width={50} height={50} style={{ width: 'auto', height: 'auto' }} className='mr-5' />
              <div className="text-white text-[22px] font-medium leading-[20.81px]">95% <br />Case Success</div>
            </div>
            <div className="w-[250px] h-[90px] bg-gray-700 flex-row justify-center items-center gap-2.5 inline-flex">
              <div className="p-2 bg-gray-800 mr-5 text-white text-3xl font-bold leading-[34.38px]">5+</div>
              <div className="text-white text-[22px] font-medium leading-[20.81px]">Years<br />Experience</div>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    </div>
  );
}

export default AboutUs;
