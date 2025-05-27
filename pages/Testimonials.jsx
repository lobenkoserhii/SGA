'use client'
import Head from 'next/head';
import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react';
import { testimonials } from "@/constants";  
import FadeInSection from '../components/FadeInSection';
import Form from "../components/Form"
import Footer from "../components/Footer"

const SingleTestimonial = ({ name, quote, index }) => {
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
      <div className="flex flex-col justify-start items-start text-start m-2 w-full">
        <div className="flex flex-col m-3 flex-1">
          <h5 className="font-cormorant text-xl TB:text-3xl text-white font-bold">{name}</h5>
        </div>
      </div>
    );

    const quoteBlock = (
      <div className=" text-white py-6 px-6 flex flex-col items-start ">
        <blockquote className="text-sm font-normal italic">“{quote}”</blockquote>
      </div>
    );

    return (
      <div className={`flex flex-col items-center bg-[#2E3947] p-6  shadow-md`}>
        {userInfo}
        {quoteBlock}
      </div>
    );
};

const Testimonials = () => {
    const [displayedTestimonials, setDisplayedTestimonials] = useState(testimonials.slice(0, 4)); 
  
    useEffect(() => {
      const updateTestimonials = () => {
        setDisplayedTestimonials(testimonials.slice(-20)); 
      };
  
      updateTestimonials();
    }, []);

    return (
      <>
      <Head>
  <title>Testimonials – SGA Immigration</title>
  <meta name="description" content="Read what clients say about SGA Immigration & Legal Services." />
</Head>
      <div className="bg-[url('/AboutUSBG.jpg')] w-full max-h-[700px] bg-cover bg-no-repeat bg-center">
        <FadeInSection>
        <Layout />

        <div className="mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col">
          <h1 className="text-5xl font-cormorant font-normal text-white">Testimonial</h1>
          <img src="/IconP.svg" alt="Icon" className="mt-5 h-[50px]" />
        </div>
        </FadeInSection>
        <div className="bg-BG p-10">
        <FadeInSection>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="text-white text-center text-[45px] font-bold font-cormorant leading-[51.57px]">Client Opinions & Reviews</div>
            <img src="/IconP.svg" alt="Icon" className="h-[40px]" />
            <div className="max-w-[1440px] grid grid-cols-1 TB:grid-cols-2  gap-6 TB:mt-10 ">
              {displayedTestimonials.map((testimonial, index) => (
                <SingleTestimonial key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
          </FadeInSection>
        </div>
        <Form/>
      <Footer/>
      </div>
      </>
    );
}

export default Testimonials;
