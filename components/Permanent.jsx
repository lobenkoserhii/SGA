import React from 'react';
import { permanentResidencyTypes } from "@/constants";
import FadeInSection from '../components/FadeInSection';

function Permanent({ highlightText, permanentHighlightPhrases }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 TB:grid-cols-2">
        <div className="p-10 flex flex-col justify-start items-start">
        <FadeInSection>
          <h1 className="text-[45px] text-BG font-bold font-cormorant leading-[51.57px]">Permanent Residency</h1>
          <img src="/IconB.svg" alt="Icon" className='my-5 h-[44px]' />

          {permanentResidencyTypes.map((program, index) => (
            <div key={index} className="pt-5">
              <h2 className="text-BG text-2xl font-bold">{program.title}</h2>
              <p className='text-BG  font-normal font-outfit'>
                <span className='text-BG font-bold'>- Purpose:</span> {program.details.Purpose}
              </p>
              {program.details.SelectionCriteria && (
                <p className='text-BG  font-normal font-outfit'>
                  <span className='text-BG font-bold'>- Selection Criteria:</span> {program.details.SelectionCriteria}
                </p>
              )}
              {program.details.Eligibility && (
                <p className='text-BG  font-normal font-outfit'>
                  <span className='text-BG font-bold'>- Eligibility: </span> {program.details.Eligibility}
                </p>
              )}
              
              {program.details.Types && (
                <div className='text-BG  font-normal font-outfit'>
                  <ul>
                    {program.details.Types.map((type, typeIndex) => (
                      <li key={typeIndex}>{highlightText(type, permanentHighlightPhrases)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
          <p className='text-BG pt-5  font-normal font-outfit'>
             It's important to note that each of these programs has its own eligibility criteria, application processes, and requirements. Consulting with our immigration professional is highly recommended best program for your specific situation and ensure a successful application for permanent residency in Canada.
          </p>
          </FadeInSection>
        </div>
        <div className="bg-[url('/Programs2.jpeg')] bg-cover bg-no-repeat bg-left"></div>
      </div>
    </div>
  );
}

export default Permanent;
