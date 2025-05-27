import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";
import FadeInSection from '../components/FadeInSection';
import Form from '../components/Form';

function Contact() {
  return (
    <>
    <Head>
  <title>Contact – SGA Immigration</title>
  <meta name="description" content="Get in touch with SGA Immigration & Legal Services. Book a consultation today." />
</Head>
    <div className="bg-[url('/AboutUSBG.jpg')] w-full bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout />
        <div className='mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col'>
          <h1 className='text-5xl font-cormorant font-normal text-white'>Contact Us</h1>
          <img src="/IconP.svg" alt="Icon" className='mt-5 h-[50px]' />
        </div>
      </FadeInSection>

      
        
      <Consultation />
        
      <Form  />

      
      
      <Footer />
    </div>
    </>
  );
}


export default Contact;
