"use client"

// import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useRouter } from "next/router";
// // ... (existing imports)

// const Header = () => {
//     let Links = [
//         { name: "HOME", link: "/" },
//         { name: "SERVICE", link: "/" },
//         { name: "ABOUT", link: "/" },
//         { name: "CONTACT", link: "/" },
//     ];
//     let [open, setOpen] = useState(false);

//     return (
//         <div className='shadow-md w-full top-0 left-0 font-opensans relative'>
//             <div className='md:flex items-center justify-between bg-#FDF8F0 py-4 md:px-10 px-7'>
//                 {/* logo section */}
//                 <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
//                     <Link href="/">
//                         <img className='lg:h-24 md:h-24 sm:h-20' src="/cant_stop_wont_stop_logo no back.png" />
//                     </Link>
//                 </div>
//                 {/* Menu icon */}
//                 <div onClick={() => setOpen(!open)} className='absolute right-8 top-[40px] cursor-pointer md:hidden w-7 h-7 text-gray-800 z-10'>
//                     {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//                 </div>
//                 {/* link items */}
//                 <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-#FDF8F0 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : '-top-[490px] hidden md:block'}`}>
//                     {
//                         Links.map((link) => (
//                             <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
//                                 <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-200'>{link.name}</a>
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 {/* button */}
//             </div>
//         </div>
//     );
// };

// export default Header;

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-#FDF8F0">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
              <Link href="/">
                      <img className='lg:h-24 md:h-24 sm:h-20 ' src="/cant_stop_wont_stop_logo no back.png" />
                </Link>
              </div>
              <div className="hidden md:block flex-none">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className=" text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 px-3 py-2 rounded-md text-lg font-lg"
                  >
                    Home
                  </Link>


                  <Link
                    href="/studio"
                    className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 px-3  py-2 rounded-md text-lg font-medium"
                  >
                    Studio
                  </Link>

                  <Link
                    href="/events"
                    className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Events
                  </Link>

                  <Link
                    href="/artists"
                    className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Artists
                  </Link>

                  <Link
                    href="/contact"
                    className="text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 px-3  py-2 rounded-md text-lg font-medium"
                  >
                    Contact
                  </Link>
                </div>
              
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    href="/"
                    className="hover:text-g-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                    href="/studio"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Studio
                </a>

                <a
                    href="/events"
                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </a>

                <a
                  href="/artists"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Artists 
                </a>

                <a
                  href="/contact"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
