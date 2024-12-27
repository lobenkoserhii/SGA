import React from 'react';
import Layout from '../components/Layout';
import { visaTypes } from "@/constants";
import Permanent from '../components/Permanent';
import PNP from '../components/PNP';
import Testimonial from "../components/Testimonial";
import Form from "../components/Form";
import Footer from "../components/Footer";
import FadeInSection from '../components/FadeInSection';

function highlightText(text, phrasesToHighlight) {
  const regex = new RegExp(`(${phrasesToHighlight.map(phrase => phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    phrasesToHighlight.includes(part.trim()) ? <span key={index} className="font-bold">{part}</span> : part
  );
}

const temporaryHighlightPhrases = [
  "a. Open Work Permit",
  "b. Employer-Specific Work Permit",
  "c. Post-Graduation Work Permit"
];

const permanentHighlightPhrases = [
  "a. Federal Skilled Worker Program (FSWP):",
  "b. Federal Skilled Trades Program (FSTP):",
  "c. Canadian Experience Class (CEC):"
];

function Programs() {
  return (
    <div className="bg-[url('/AboutUSBG.jpg')] w-full max-h-[700px] bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout />

        <div className='mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col'>
          <h1 className='text-5xl font-cormorant font-normal text-white'>Programs</h1>
          <img src="/IconP.svg" alt="Icon" className='mt-5 h-[50px]' />
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 TB:grid-cols-2">
        <div className="bg-[url('/Programs1.jpeg')] bg-cover bg-no-repeat bg-center h-full"></div>

        <div id="temporary-visas" className="p-10 bg-Gold flex flex-col justify-start items-start">
          <FadeInSection>
            <h1 className="text-[45px] text-BG font-bold font-cormorant leading-[51.57px]">Temporary Visas</h1>
            <img src="/IconB.svg" alt="Icon" className='my-5 h-[44px]' />

            {visaTypes.map((visa, index) => (
              <div key={index} id={visa.link} className="pt-5">
                <h2 className="text-BG text-2xl font-bold">{visa.title}</h2>
                <p className='text-BG font-normal font-outfit'>
                  <span className='text-BG font-bold'>- Purpose:</span> {visa.details.Purpose}
                </p>
                {visa.details.Duration && (
                  <p className='text-BG font-normal font-outfit'>
                    <span className='text-BG font-bold'>- Duration:</span> {visa.details.Duration}
                  </p>
                )}
                {visa.details.Eligibility && (
                  <p className='text-BG font-normal font-outfit'>
                    <span className='text-BG font-bold'>- Eligibility:</span> {visa.details.Eligibility}
                  </p>
                )}
                {visa.details.Types && (
                  <div className='text-BG font-normal font-outfit'>
                    <ul>
                      {visa.details.Types.map((type, typeIndex) => (
                        <li key={typeIndex}>{highlightText(type, temporaryHighlightPhrases)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <p className='text-BG pt-5 font-normal font-outfit'>
              It's important to note that the eligibility requirements, application processes, and documentation for each type of temporary visa can be quite specific. Consulting with our immigration professional is highly recommended to ensure that you meet all the necessary criteria and complete the application accurately.
            </p>
          </FadeInSection>
        </div>
      </div>

   

 

      <Permanent highlightText={highlightText} permanentHighlightPhrases={permanentHighlightPhrases} />
      <PNP />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
}

export default Programs;
