import React from 'react';
import { visaOptions } from "@/constants";
import FadeInSection from '../components/FadeInSection';

function Immigration() {
  return (
    <div className='bg-BG p-10'>
      <div className="mx-auto max-w-[1440px] p-10">
      <FadeInSection>
        <div className="flex flex-col TB:flex-row justify-between gap-10">
          <div className='flex flex-col gap-5 '>
            <div className=" text-white text-start text-[45px] font-bold font-cormorant leading-[51.57px]">Trending Canadian Immigration</div>
           
          </div>
          <div className="flex items-center justify-center text-zinc-300 text-xl font-normal font-outfit TB:border-l-2 border-gray-700 TB:pl-10">
            Embark on your Canadian journey with confidence. Our experienced team simplifies your immigration process, for temporary to permanent residency. Explore opportunities, embrace a new culture, and build a brighter future in Canada. We make sure your immigration pathway to Canada would be as easy as possible.
          </div>
        </div> <FadeInSection>
        <div className="grid TB:grid-cols-3 gap-6 mt-10">
          {visaOptions.map((option) => (
            <div className="bg-gray-800 p-6 flex flex-col justify-between" key={option.title}>
              <div>
                <div className="text-center text-white text-3xl font-bold font-cormorant">{option.title}</div>
                <div className="text-zinc-300 text-xl font-normal font-outfit mt-5">{option.description}</div>
              </div>
              <div className="mt-10">
                <div className="flex justify-between items-center TB:border-t-2 border-gray-700 TB:pt-8">
                  <img src={option.imageUrl} alt={option.altText} />
                  <a href="/your-target-url" className="bg-gray-900 p-4 text-white text-xl font-medium font-outfit capitalize inline-block text-center hover:bg-Gold hover:border-none transition-colors duration-900 hover:text-black">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </FadeInSection>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Immigration;
