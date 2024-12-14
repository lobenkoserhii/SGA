import React from 'react';
import FadeInSection from '../components/FadeInSection';
import { InlineWidget } from 'react-calendly';

function Form() {
  return (
    <div id="contact-us" className="bg-[url('/BGForm.jpg')] w-full font-outfit font-normal text-xl min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <FadeInSection>
        <div className="bg-opacity-95 bg-BG text-white p-8 my-5 w-full max-w-[1440px] rounded-lg shadow-lg">
          <div className="w-full" style={{ height: '80vh', minHeight: '600px' }}>
            <InlineWidget
              url="https://calendly.com/s-v-lobenko/SGA"
              pageSettings={{
                backgroundColor: '#1A1C39',
                textColor: '#ffffff',
                primaryColor: '#D1B06B',
              }}
              styles={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Form;
