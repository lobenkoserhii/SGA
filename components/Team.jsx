import React from 'react'
import { teamMembers } from "@/constants";

function Team() {
  return (
    <div className='mx-auto max-w-[1440px] relative p-10'>
      <div className="text-center text-gray-900 text-[32px] font-bold font-cormorant leading-9">Our Experienced Assistants Are Ready<br/><span className="text-gray-900 text-[32px] font-bold font-cormorant leading-9"> To answer any questions</span></div>
      <div className='flex flex-col TB:flex-row justify-between items-center mt-5 gap-5'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
            <img src={member.image} alt="Team" />
            <div className='relative bottom-10'>
              <div className='flex justify-center z-10'>
                <div className='flex flex-row gap-5 bg-white py-2 px-5'>
                  {member.socials.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.url} target="_blank" rel="noopener noreferrer">
                      <img src={social.icon} alt={social.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <h1 className='text-center text-zinc-900 text-3xl font-bold font-cormorant leading-[34.38px]'>{member.name}</h1>
            <p className='text-center text-orange-300 text-xl font-normal font-outfit leading-7'>{member.role}</p>
          </div>
        ))}
        
      </div>
      <div className='flex flex-row justify-center mt-10'>
    <a href="/meet-assistants" className="w-[298px] h-[85px] px-[72px] pt-7 pb-[29px] border border-gray-800 hover:bg-Gold hover:border-none transition-colors duration-900 justify-center items-center gap-2.5 inline-flex">
        <div className="text-gray-800 text-[22px] font-medium font-outfit capitalize whitespace-nowrap">Meet assistants</div>
    </a>
</div>
    </div>
  );
}

export default Team