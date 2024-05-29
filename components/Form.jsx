import React from 'react';
import FadeInSection from '../components/FadeInSection';

function Form() {
  return (
    <div className="bg-[url('/BGForm.jpg')] w-full font-outfit font-normal text-xl h-[800px] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <FadeInSection>
      <div className="bg-opacity-95 bg-BG text-white p-8 NPC:w-[1024px] font-outfit font-normal text-xl">
      
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium ">Full Name *</label>
            <input type="text" id="fullName" name="fullName" placeholder="" required 
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium ">Email Address *</label>
            <input type="email" id="email" name="email" placeholder="" required 
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium ">Phone Number *</label>
            <input type="tel" id="phone" name="phone" placeholder="" required 
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"/>
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium ">Subject *</label>
            <input type="text" id="subject" name="subject" placeholder="" required 
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"/>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-lg font-medium ">Your Message *</label>
            <textarea id="message" name="message" rows="4" placeholder="" required 
              className="w-full font-outfit font-normal text-xl p-2 bg-transparent border-b border-[#3A4553] outline-none focus:outline-none focus:border-Gold"></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <a href="#" type="submit" className="mt-4 bg-white hover:bg-Gold text-black font-bold py-4 px-8 ">
              Get An Appointment
            </a>
          </div>
        </form>
        
      </div>
      </FadeInSection>
    </div>
  );
}

export default Form;