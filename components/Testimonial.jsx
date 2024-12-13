'use client'
import React, { useState, useEffect } from 'react';
import { testimonials } from "@/constants"; 
import FadeInSection from '../components/FadeInSection'; 

const SingleTestimonial = ({ name, quote, index }) => {
    const [isReversed, setIsReversed] = useState(index % 2 !== 0);
    const [isExpanded, setIsExpanded] = useState(false);

    const WORD_LIMIT = 20; // Количество слов для ограничения

    useEffect(() => {
      const handleResize = () => {
        setIsReversed(window.innerWidth >= 640 && index % 2 !== 0);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [index]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const getPreviewTextWithButton = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            const preview = words.slice(0, wordLimit).join(" ");
            return (
                <>
                    {preview}{" "}
                    <span className="text-gray-300">...</span>{" "}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleExpanded();
                        }}
                        className="text-Gold text-xs TB:text-[14px] font-medium font-outfit capitalize"
                    >
                        Read More
                    </a>
                </>
            );
        }
        return text;
    };

    const userInfo = (
      <div className="flex flex-col justify-start items-start text-start self-start m-2">
        <h5 className="font-cormorant text-xl TB:text-3xl text-white font-bold">{name}</h5>
      </div>
    );

    const quoteBlock = (
      <div className={`bg-gray-800 text-white py-12 px-4 flex flex-col items-center shadow-lg`}>
        <blockquote className="text-sm TB:text-xl font-normal italic">
          {isExpanded || quote.split(" ").length <= WORD_LIMIT
            ? quote
            : getPreviewTextWithButton(quote, WORD_LIMIT)}
        </blockquote>
        {isExpanded && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleExpanded();
            }}
            className="text-Gold text-xs TB:text-[14px] font-medium font-outfit capitalize mt-2"
          >
            Read Less
          </a>
        )}
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
        setDisplayedTestimonials(testimonials.slice(0, 4)); 
      };
  
      updateTestimonials();
    }, [testimonials]);
  
    return (
      <div className='bg-BG'>
        <FadeInSection>
        <div className="mx-auto max-w-[1440px] p-10 py-20">
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className="text-white text-center text-[45px] font-bold font-cormorant leading-[51.57px]">Client Opinions & Reviews</div>
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
