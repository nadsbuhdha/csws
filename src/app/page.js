"use client"
import Image from "next/image";
import NavbarDefault from "./components/Navbar"
// import Carousel from "./components/Carousel"
import { useRouter } from "next/router";
import { CarouselCustomArrows } from "./components/Carousel"; // Adjust the path accordingly
import { ReactTyped } from "react-typed";


export default function Home() {
  return (
    <main >
      <CarouselCustomArrows />
      {/* <div className="">
        <h2 className="text-black text-4xl tracking-widest mt-12 mb-40 ml-6 p-5 ">
          Based in the heart of Nottingham, Can't Stop Won't Stop is a creative studio which combines the world of music and events.
          <br/>
          <br/>
          By day we record, mix and master artists of varing genres. By night we put on some of the best jams in the U.K.  
        </h2>
      </div> */}
      
      <div >
      <h1 className="text-black text-4xl tracking-widest mt-32 mb-32 ml-6 p-5">
      Can&rsquo;t Stop Won&rsquo;t Stop{``}
        <ReactTyped
          strings={["a creative studio", "a dynamic events venue", "a collaborative workspace"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </h1>
    </div>
    
    </main>
  );
}
