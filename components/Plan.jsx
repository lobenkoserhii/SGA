import React from 'react';
import { services } from "@/constants";

const ServiceCard = ({ service }) => (
  <div className="bg-BG p-8 shadow-md text-center flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-center h-[160px]">
        <h3 className="font-cormorant text-white text-3xl font-bold leading-[34px]">
          {service.title}
        </h3>
      </div>
      <div className="font-outfit text-Gold text-sm TB:text-base  mt-2 mb-4 border-b border-[#3A4553]">
        {service.method}
      </div>

      <div className="flex flex-col items-center">
        <div className="font-outfit text-Gold text-xl TB:text-2xl  font-bold">{service.price}</div>
        <div className="font-outfit text-WH bg-[#1F2732] text-sm TB:text-base mb-4 px-3 py-1">Per Case</div>
      </div>
      <div className="font-outfit text-WH text-sm TB:text-base  mb-4 p-4 border-y border-[#3A4553]">
        {service.duration}
      </div>
      <ul className="font-outfit text-WH text-sm TB:text-base  mb-4">
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
    <a
      href={service.link}
      className="border-Gold border-[1px] hover:bg-Gold py-5 mt-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="font-outfit text-white font-bold">Get Started</div>
    </a>
  </div>
);

function Plan() {
  return (
    <div className="mx-auto max-w-[1440px] TB:p-10 p-5">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-center text-[45px] font-bold font-cormorant leading-[51.57px]">
          Plan For Immigration
        </div>
        <img src="/IconP.svg" alt="Icon" className="h-[40px]" />
      </div>
      <div className="grid grid-cols-1 NPC:grid-cols-3 gap-5 TB:p-10 p-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Plan;