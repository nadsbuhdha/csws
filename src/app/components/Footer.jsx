import React from 'react'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faSquareInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
    <footer className="bg-black text-center text-white bg-neutral-300 p-4 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 mt-auto">
    <a href="https://www.facebook.com/cantstopwontstoplabel" target='blank'><FontAwesomeIcon className='p-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' size="2x" transform="shrink-6 left-4" icon={faFacebookF} /> </a>
    <a href="https://www.instagram.com/cantstopnottm/" target='blank'><FontAwesomeIcon className='p-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' size="2x"  icon={faSquareInstagram} /> </a>
    <a href="https://soundcloud.com/cantstopwontstoprecords" target='blank'><FontAwesomeIcon className='p-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' size="2x" icon={faSoundcloud} /> </a>

          <div
            className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            © 2023 Copyright:
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="https://tw-elements.com/"
            > CSWS STUDIOS</a>
            
          </div>
          <div>
            <h2 className='text-white'>Site by: <span><a href="https://nadeem-unwin.netlify.app/" target="_blank" > Nadeem Unwin </a></span></h2>
          </div>
        </footer>
        );
}

export default Footer