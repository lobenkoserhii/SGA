import React from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='mx-auto max-w-[1440px] p-10'>
                  <div className='flex flex-row items-center justify-between z-30  pb-[25px] NPC:border-b-[1px] border-gray-600'>
            <Link href="/" legacyBehavior>
              <img src="/SGA_logo.svg" alt="logo" className='min-w-[125px] max-w-[180px] cursor-pointer' />
            </Link>
            <a href="#contact-us" className="px-7 py-5 bg-white bg-opacity-10 justify-center items-center inline-flex hover:bg-Gold hidden NPC:inline-flex">
              <div className="text-white text-[22px] font-normal font-outfit">Book a Consultation</div>
            </a>
          </div>
          <Nav/>
    </div>
  )
}

export default Header