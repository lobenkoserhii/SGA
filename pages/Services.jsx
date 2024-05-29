import React from 'react';
import Layout from '../components/Layout';
import { services, additionalServices } from "@/constants";
import Consultation from "../components/Consultation";
import Form from "../components/Form";
import Footer from "../components/Footer";
import FadeInSection from '../components/FadeInSection';

const ServiceCard = ({ service }) => (
  <div className="bg-BG p-8 shadow-md text-center flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-center h-[160px]">
        <h3 className="font-cormorant text-white text-3xl font-bold leading-[34px]">
          {service.title}
        </h3>
      </div>
      <div className="font-outfit text-Gold text-sm mt-2 mb-4 border-b border-[#3A4553]">
        {service.method}
      </div>
      <div className="flex flex-col items-center">
        <div className="font-outfit text-Gold text-lg text-4xl font-bold">
          {service.price}
        </div>
        <div className="font-outfit text-WH bg-[#1F2732] text-sm mb-4 px-3 py-1">
          Per Case
        </div>
      </div>
      <div className="font-outfit text-WH text-sm mb-4 p-4 border-y border-[#3A4553]">
        {service.duration}
      </div>
      <ul className="font-outfit text-WH text-sm mb-4">
        {service.description.map((item, index) => (
          <li
            key={index}
            className={`border-b px-8 py-4 border-[#3A4553] ${
              index === service.description.length - 1 ? '' : 'mb-4'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <a href="#" className="border-Gold border-[1px] hover:bg-Gold py-5 mt-5">
      <div className="font-outfit text-white font-bold">Get Started</div>
    </a>
  </div>
);

function Services() {
  return (
    <div className="bg-[url('/AboutUSBG.jpg')] w-full max-h-[700px] bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout />
        <div className="mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col">
          <h1 className="text-5xl font-cormorant font-normal text-white">
            Services
          </h1>
          <img src="/IconP.svg" alt="Icon" className="mt-5 h-[50px]" />
        </div>
      </FadeInSection>
      <div className="bg-BG">
        <FadeInSection>
          <div className="mx-auto max-w-[1440px] p-10">
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="text-center text-white text-[45px] font-bold font-cormorant leading-[51.57px]">
                Plan For Immigration
              </div>
              <img src="/IconP.svg" alt="Icon" className="mt-5 h-[50px]" />
            </div>
            
            <div className="grid grid-cols-1 NPC:grid-cols-3 gap-5 p-10">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </FadeInSection>
        <div className="flex flex-col gap-5 justify-center items-center">
          
            <div className="text-white text-center text-[45px] font-bold font-cormorant leading-[51.57px]">
              Temporary Plan For Immigration
            </div>
            <img src="/IconP.svg" alt="Icon" className="mt-5 h-[50px]" />
          
        </div>
        <div className="grid grid-cols-1 NPC:grid-cols-6 gap-5 p-10">
          <div className="col-span-1"></div>
          {additionalServices.map((service, index) => (
            <div className="col-span-2" key={index}>
              <FadeInSection>
                <ServiceCard service={service} />
              </FadeInSection>
            </div>
          ))}
          <div className="col-span-1"></div>
        </div>
      </div>
      <Consultation />
      <Form />
      <Footer />
    </div>
  );
}

export default Services;
