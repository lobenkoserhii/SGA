import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from '../components/FadeInSection';

function Experience() {
  const [progressValues, setProgressValues] = useState([]);
  const progressBarRefs = useRef([]);
  const progressKnobRefs = useRef([]);

  const progressBarData = [
    { label: "Express Entry", percentage: 75 },
    { label: "Family Sponsorship", percentage: 80 },
    { label: "Study Permits and Work Permits", percentage: 75 },
    { label: "Visitor Visas", percentage: 90 },
    { label: "Provincial Nominee Programs (PNPs)", percentage: 90 },
    { label: "Citizenship Applications", percentage: 90 }
  ];

  useEffect(() => {
    setProgressValues(progressBarData.map(item => ({ ...item, currentPercentage: 0 })));
  }, []);

  useEffect(() => {
    const intervals = progressValues.map((item, index) => {
      return setInterval(() => {
        if (progressBarRefs.current[index] && progressValues[index].currentPercentage < item.percentage) {
          const newPercentage = progressValues[index].currentPercentage + 1;
          progressBarRefs.current[index].style.width = `${newPercentage}%`;
          progressKnobRefs.current[index].style.left = `calc(${newPercentage}% - 2px)`; // Center the knob properly
          setProgressValues(current => {
            const newArray = [...current];
            newArray[index] = { ...newArray[index], currentPercentage: newPercentage };
            return newArray;
          });
        } else {
          clearInterval(intervals[index]);
        }
      }, 20);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [progressValues]);

  return (
    <div className="grid grid-cols-1 TB:grid-cols-2">
 <div className="bg-[url('/Experiance.png')] bg-cover bg-no-repeat bg-center  h-full">
  
</div>
      <div className=" p-10 bg-Gold flex flex-col justify-start items-start">
      <FadeInSection>
        <h1 className="text-[45px] font-bold font-cormorant leading-[51.57px]">We Are Specialised And Experienced</h1>
        <img src="/IconB.svg" alt="Icon" className='my-5 h-[44px]' />
        <p className="text-xl font-normal font-outfit text-black">With decades of experience, SGA Immigration is an experienced immigration partner who understands the intricacies of Canadian immigration law and policy. We are always up to date with the latest changes to ensure your application is always on the right track.</p>
        <div className="flex flex-col my-10 gap-5 w-full">
          {progressValues.map((item, index) => (
            <div key={index}>
                <div className="flex justify-between  my-2 text-xl font-normal font-outfit text-black">
                <span>{item.label}</span>
                <span>{item.currentPercentage}%</span>
              </div>
              <div className="relative w-full h-2 bg-white">
                <div className="absolute top-0 left-0 h-full bg-black" style={{ width: '0%' }} ref={el => progressBarRefs.current[index] = el}></div>
                <div className="absolute top-0 w-4 h-4 bg-black rounded-full" style={{ top: '-4px', left: '0%' }} ref={el => progressKnobRefs.current[index] = el}></div>
              </div>
            </div>
          ))}
        </div>
        </FadeInSection>
      </div>
      
    </div>
  );
}

export default Experience;
