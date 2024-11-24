import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Experiance from '../components/Experiance';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

function AboutUs() {
  return (
    <div>
      
      <div className="bg-[url('/AboutUSBG.jpg')] w-full max-h-[700px] bg-cover bg-no-repeat bg-center">
      <FadeInSection>
        <Layout />
        <div className='mx-auto max-w-[1440px] min-h-[300px] px-10 text-center flex flex-col'>
          
            <h1 className='text-5xl font-cormorant font-normal text-white'>About Us</h1>
          
         
            <img src="/IconP.svg" alt="Icon" className='mt-5 h-[50px]' />
          
        </div>
        </FadeInSection>
      </div>
      
      
      <div className='bg-BG'>
        <div className='mx-auto max-w-[1440px] px-10 py-10 TB:py-[80px]'>
        <FadeInSection>
          <div className='flex flex-col TB:flex-row items-center justify-center gap-10 TB:py-[100px]'>
            
              <div className='relative max-w-[600px]'>
                <img src="/AboutSGA.jpeg" alt="Spartak Gabroshvili" className='relative z-10' />
                <div className='absolute bottom-7 right-7 NPC:bottom-10 NPC:right-10 w-full h-full border-[1px] border-Gold opacity-40'></div>
              </div>
            
            <FadeInSection>
              <div className='flex flex-col items-start gap-5'>
                <img src="/Sep.svg" alt="Sep" className='w-[95px]' />
                <h2 className='NPC:text-5xl TB:text-4xl text-3xl font-cormorant font-bold text-white'>
                  I'm Spartak Gabroshvili, <br /> a Immigration Consultant
                </h2>
                <p className='text-WH text-xl font-normal font-outfit'>
                Spartak Gabroshvili is a licensed Immigration Consultant, Paralegal, Notary Public, and an esteemed College Instructor at Ashton College. 
With over five years of dedicated practice in immigration law, Spartak specializes in managing intricate immigration mattersspecifically focusing on Humanitarian and Compassionate (H&C) grounds cases. 
In addition to his private practice, Spartak has served as a Program Integrity Specialist with the Ontario Government, bringing a deep understanding of compliance, policy enforcement, and the integrity of immigration programs to his work.
Spartak holds a Master of Law from the Yaroslav Mudryi National Law University in Ukraine and is currently pursuing a PhD in International Law and Legal Studies. Additionally, Spartak is a graduate of Humber College in Canada, where he earned certifications as both a Paralegal and an Immigration Consultant.
With his extensive knowledge, legal expertise, and commitment to excellence, Spartak Gabroshvili offers comprehensive and tailored immigration services to clients, navigating them through complex legal frameworks to achieve their goals
                </p>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/IFb.svg" alt="Facebook" className="h-6 w-6 min-h-[60px]" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="/iYouTube.svg" alt="YouTube" className="h-6 w-6 min-h-[60px]" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/IInsta.svg" alt="Instagram" className="h-6 w-6 min-h-[60px]" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/Ilinkedin.svg" alt="LinkedIn" className="h-6 w-6 min-h-[60px]" />
                  </a>
                </div>
                <a href="#" type="submit" className="mt-4 bg-white hover:bg-Gold text-black font-bold py-4 px-8">
                  Get An Appointment
                </a>
              </div>
            </FadeInSection>
          </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className='flex flex-col gap-5 TB:gap-10 justify-center items-center mt-10'>
              <div className="text-center text-4xl TB:text-[45px] text-white font-bold font-cormorant TB:leading-[51.57px]">Immigration planning  </div>
              <img src="/IconP.svg" alt="Icon" className='h-[40px]' />
              <h2 className='font-cormorant font-normal text-white italic TB:text-3xl text-center'>
              At SGA Immigration & Legal Services, we have successfully guided numerous clients through a wide range of immigration matters. Our mission is to provide customized, solution-oriented services that align with the specific needs and aspirations of each client. We prioritize transparency, maintain clear and open communication, and stay up-to-date with the latest developments in immigration law to ensure we offer the most relevant and effective advice.
              From the initial consultation to the final approval, we are dedicated to supporting you throughout your entire immigration journey, ensuring a seamless and successful experience. Our commitment is to help you achieve your immigration goals with confidence and clarity.
              </h2>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className='flex flex-col TB:flex-row gap-5 TB:gap-10 py-10'>
              <Image src="/about_as_1.png" alt="Photo_about" width={447} height={293} className='bg-cover bg-no-repeat bg-center' />
              <Image src="/about_as_2.png" alt="Photo_about" width={447} height={293} className='bg-cover bg-no-repeat bg-center' />
              <Image src="/about_as_3.png" alt="Photo_about" width={447} height={293} className='bg-cover bg-no-repeat bg-center' />
            </div>
          </FadeInSection>
        </div>
      </div>
      
       <Experiance />
       <FadeInSection><Team /></FadeInSection>
      <Testimonial />
      <FadeInSection><Partners /></FadeInSection>
      <Footer />
    </div>
  );
}

export default AboutUs;
