import React from 'react';
import { citizenshipTypes } from "@/constants";
import FadeInSection from '../components/FadeInSection';

function splitAndHighlight(text) {
  const phrasesToHighlight = [
    "a. Skilled Worker Streams:",
    "b. Entrepreneur and Investor Streams:",
    "c. Express Entry Streams:",
    "d. International Graduate Streams:",
    "e. Family Sponsorship Streams:",
    "a. Expressing Interest:",
    "b. Nomination:",
    "c. Federal Application:"
  ];
  const regex = new RegExp(`(${phrasesToHighlight.map(phrase => phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'g');
  const parts = text.split(regex).filter(part => part.trim() !== ''); 

  return parts.map((part, index) => (
    phrasesToHighlight.includes(part.trim()) ? (
      <React.Fragment key={index}>
       <span className="font-bold">{part}</span>
      </React.Fragment>
    ) : (
      <span key={index}>{part}</span>
    )
  ));
}

const Citizenship = () => (
  <div className="">
    <div className="grid grid-cols-1 TB:grid-cols-2">
      <div className="bg-[url('/Programs3.jpeg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="p-10 bg-Gold flex flex-col justify-start items-start">
      <FadeInSection>
        <h1 className="text-[45px] text-BG font-bold font-cormorant leading-[51.57px]">Provincial Nominee Programs (PNPs)</h1>
        <img src="/IconB.svg" alt="Icon" className='my-5 h-[44px]' />

        {citizenshipTypes.map((program, index) => (
          <div key={index} className="pt-5">
            <h2 className="text-BG text-2xl font-bold">{program.title}</h2>
            <p className='text-BG  font-normal font-outfit'>
              <span className='text-BG font-bold'>Purpose:</span> {program.details.Purpose}
            </p>
            <p className='text-BG  font-normal font-outfit'>
              <span className='text-BG font-bold'>Eligibility:</span> {program.details.Eligibility}
            </p>
            {program.details.Categories && (
              <div className='text-BG  font-normal font-outfit pt-5'>
                <span className='text-BG font-bold'>Categories:</span>
                <ul>
                  {program.details.Categories.map((category, categoryIndex) => (
                    <li key={categoryIndex}>{splitAndHighlight(category)}</li>
                  ))}
                </ul>
              </div>
            )}
            {program.details.ApplicationProcess && (
              <div className='text-BG  font-normal font-outfit pt-5'>
                <span className='text-BG font-bold'>Application Process:</span>
                <ul>
                  {program.details.ApplicationProcess.map((step, stepIndex) => (
                    <li key={stepIndex}>{splitAndHighlight(step)}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className='text-BG  font-normal font-outfit pt-5'>
              <span className='text-BG font-bold'>Quotas and Allocations:</span><br /> {program.details.QuotasAndAllocations}
            </p>
            <p className='text-BG  font-normal font-outfit pt-5'>
              <span className='text-BG font-bold'>Benefits:</span><br /> {program.details.Benefits}
            </p>
            <p className='text-BG  font-normal font-outfit pt-5'>
              <span className='text-BG font-bold'>Provincial Autonomy:</span><br /> {program.details.ProvincialAutonomy}
            </p>
            <p className='text-BG  font-normal font-outfit pt-5'>
              <span className='text-BG font-bold'>Supporting Regional Economies:</span><br /> {program.details.SupportingRegionalEconomies}
            </p>
            <p className='text-BG pt-5  font-normal font-outfit'>
              Understanding the specifics of each PNP and its eligibility requirements is essential for prospective applicants. It is highly recommended to consult with our immigration professional to navigate the complexities of Provincial Nominee Programs effectively.
            </p>
            
          </div>
          
        ))}
        </FadeInSection>
      </div>
    </div>
  </div>
);

export default Citizenship;
