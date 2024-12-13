import React from 'react';
import Layout from '../components/Layout';
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";
import FadeInSection from '../components/FadeInSection';
import { InlineWidget } from 'react-calendly';

function Contact() {
  return (
    <div className="bg-[url('/AboutUSBG.jpg')] w-full bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout />
        <div className="mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col">
          <h1 className="text-5xl font-cormorant font-normal text-white">Contact Us</h1>
          <img src="/IconP.svg" alt="Icon" className="mt-5 h-[50px]" />
        </div>
      </FadeInSection>

      {/* React-Calendly Inline Widget */}
      <div className="bg-BG w-full font-outfit font-normal text-xl bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="w-full max-w-[1024px] bg-[#1F2732] text-white p-8 rounded-lg shadow-lg">
            <InlineWidget
              url="https://calendly.com/s-v-lobenko/sga"
             
              pageSettings={{
                backgroundColor: '#1A1C39',
                textColor: '#ffffff',
                primaryColor: '#D1B06B',
              }}
            />
          </div>
        </FadeInSection>
      </div>

      <Consultation />
      <Footer />
    </div>
  );
}

export default Contact;
