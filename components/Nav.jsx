"use client";
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

import { Contacts } from "@/constants";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const ContactItem = ({ icon, title, content, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center w-full"
    >
      <img src={icon} alt={title} className='w-[90px] h-[50px]' />
      <div className='flex flex-col ml-2'>
        <h2 className='text-Gold text-base font-medium font-outfit capitalize whitespace-nowrap'>{title}</h2>
        <p className='text-white text-lg font-normal font-outfit whitespace-nowrap'>{content}</p>
      </div>
    </a>
  );

  return (
    <nav className="flex flex-col NPC:flex-row items-center justify-center NPC:justify-start NPC:items-start z-30 my-5 drop-shadow-xl w-full">
      <div className="mx-auto  w-full max-w-[1440px] NPC:pb-[25px] NPC:border-b-[1px] border-gray-600">

        <ul className={`flex items-center text-white text-xl font-outfit font-normal gap-4 ${isMenuOpen ? "flex-col" : "hidden"} NPC:inline-flex NPC:flex-row NPC:items-center`}>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className={`flex  items-center hover:text-Gold ${currentPath === link.href ? 'text-Gold' : ''}`}>
              <Link href={link.href} legacyBehavior>
                <div className="block cursor-pointer transition-all whitespace-nowrap">
                  {link.label}
                </div>
              </Link>
            </li>
          ))}

          <div className="flex flex-col NPC:flex-row NPC:justify-between gap-5">
            {Contacts.map((contact, index) => (
              <ContactItem key={index} {...contact} />
            ))}
          </div>
        </ul>

        {isMenuOpen ? (
          <div onClick={() => setIsMenuOpen(false)} className="NPC:hidden pl-10 absolute right-0 top-[-110px]">
            <img src="/close.svg" alt="close"  className="cursor-pointer w-[32px] h-[32px]"/>
          </div>
        ) : (
          <div onClick={() => setIsMenuOpen(true)} className="NPC:hidden pl-10 absolute right-0 top-[-110px]">
            <img src="/menu.svg" alt="menu"  className="cursor-pointer w-[32px] h-[32px]" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;