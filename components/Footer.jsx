import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Footer = () => {
  return (
    <footer className="bg-BG text-white pt-8">
      <FadeInSection>
      <div className="mx-auto max-w-[1440px] px-10 ">
      <div className='flex flex-row justify-between items-center gap-2'>
  <img src="/FooterL.svg" alt="SGA Immigration & Legal Services Logo" className="w-full max-w-[35%] h-auto"/>
  <img src="/SGA_logo.svg" alt="SGA Immigration & Legal Services Logo" className="w-full max-w-[15%] h-auto"/>
  <img src="/FooterR.svg" alt="SGA Immigration & Legal Services Logo" className="w-full max-w-[35%] h-auto"/>
</div>

        <div className="flex justify-start items-center gap-10 my-10 ">
        <h3 className=" font-bold whitespace-nowrap font-cormorant text-white text-xl TB:text-3xl TB:leading-[34px]   ">Contact Us</h3>
          <div className='flex whitespace-nowrap flex-col gap-2 font-outfit font-normal text-sm TB:text-xl'>
             <p>7 Mabelle Ave., M9A0C9, Ontario, Canada</p>
            <p>Email: spartak@sgaimmigration.com</p>
            <p>Phone: +1(647)-955-9590</p>
          </div>
        
          </div>
          <div className='flex flex-col flex-col-reverse TB:flex-row justify-between items-center border-y border-[#3A4553] '>
  <div className="flex flex-row items-center justify-center my-4">
    <p className='font-outfit text-sm TB:text-bases '>Copyright © SGA IMMIGRATION & LEGAL SERVICES</p>
  </div>
  <div className='flex flex-row justify-between items-center'>
    <h3 className="font-outfit font-normal text-xl text-Gold mx-3">Follow:</h3>
    <div className="flex gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/IFb.svg" alt="Facebook" className="h-6 w-6 min-h-[60px]"/>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="/iYouTube.svg" alt="YouTube" className="h-6 w-6 min-h-[60px]"/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/IInsta.svg" alt="Instagram" className="h-6 w-6 min-h-[60px]"/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/Ilinkedin.svg" alt="LinkedIn" className="h-6 w-6 min-h-[60px]"/>
      </a>
    </div>
  </div>
</div>

          
        
       
      </div>
      </FadeInSection>
    </footer>
  );
}

export default Footer;
