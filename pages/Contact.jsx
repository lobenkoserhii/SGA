import React from 'react'
import Layout from '../components/Layout'
import Consultation from "../components/Consultation"
import Footer from "../components/Footer"
import FadeInSection from '../components/FadeInSection';

function Contact() {
  return (
    <div className="bg-[url('/AboutUSBG.jpg')] w-full max-h-[700px] bg-cover bg-no-repeat bg-center">
      <FadeInSection>
      <Layout />

      <div className='mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col '>
        <h1 className='text-5xl font-cormorant font-normal text-white '>Contact Us</h1>
        <img src="/IconP.svg" alt="Icon" className='mt-5 h-[50px]' />
      </div>
      </FadeInSection>
      <div className="bg-BG w-full font-outfit font-normal text-xl h-[800px] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-10">
      <FadeInSection>
      <div className=" bg-[#1F2732] text-white p-8 NPC:w-[1024px] font-outfit font-normal text-xl">
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
      <Consultation/>
      <Footer/>
    </div>
    

      
  )
}

export default Contact