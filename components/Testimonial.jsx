'use client'
import React, { useState, useEffect } from 'react';
import { testimonials } from "@/constants"; 
import FadeInSection from '../components/FadeInSection'; 

const SingleTestimonial = ({ name, position, quote, photoUrl, index }) => {
    const [isReversed, setIsReversed] = useState(index % 2 !== 0);

    useEffect(() => {
      const handleResize = () => {
        setIsReversed(window.innerWidth >= 640 && index % 2 !== 0);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [index]);

    const userInfo = (
      <div className="flex flex-row items-start justify-start text-start self-start m-2">
        <img src={photoUrl} alt={name} className="w-20 h-20 rounded-full object-cover object-center"/> 
        <div className='flex flex-col m-3'>
          <h5 className="font-cormorant text-xl TB:text-3xl text-white font-bold">{name}</h5>
          <p className="font-outfit text-sm TB:text-xl font-normal text-white">{position}</p>
        </div>
      </div>
    );

    const quoteBlock = (
      <div className={`bg-gray-800 text-white py-12 px-4 ${isReversed ? 'rounded-tl-lg' : 'rounded-bl-lg'} flex flex-col items-center shadow-lg`}>
        <img src="/k.png" alt="Icon" className='m-2 self-start h-[16px]' />
        <blockquote className="text-sm TB:text-xl font-normal italic">“{quote}”</blockquote>
      </div>
    );

    return (
      <div className="flex flex-col items-center">
        {isReversed ? quoteBlock : userInfo}
        {isReversed ? userInfo : quoteBlock}
      </div>
    );
};

const Testimonials = () => {
    const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonials.slice(0, 4)); 
  
    useEffect(() => {
      const updateTestimonials = () => {
        setDisplayedTestimonials(testimonials.slice(-4)); 
      };
  
      updateTestimonials();
    }, [testimonials]);
  
    return (
      <div className='bg-BG'>
        <FadeInSection>
        <div className="mx-auto max-w-[1440px] p-10 py-20">
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className="text-white text-center text-[45px] font-bold font-cormorant leading-[51.57px]">Client Opinions & Reviews</div>
            <img src="/IconP.svg" alt="Icon" className='h-[40px]' />
            <div className="grid grid-cols-1 TB:grid-cols-2 PC:grid-cols-4 gap-6 TB:mt-10">
              {displayedTestimonials.map((testimonial, index) => (
                <SingleTestimonial key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    );
  }

export default Testimonials;

