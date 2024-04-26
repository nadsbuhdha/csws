import React from 'react';
import { CardDefault } from './Card';
import { faFacebookF, faSquareInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons"


const ArtistsPage = () => {
  const artistsData = [
    {
      artistName: "Joe Buhdha",
      artistBio: "Joe Buhdha, hailing from Nottingham, is a renowned producer in hip hop, collaborating with a diverse array of artists spanning genres like soul, funk, jazz, and reggae. His production credits include names like Terri Walker, Estelle, Talib Kweli, and more. Beyond producing, Joe has worked with major acts such as Rakim, KRS One, and DJ Premier. Today, he spearheads Can’t Stop Won’t Stop, his own entertainment company, providing support to artists and curating music and art events, including the renowned UK Takeover with 1xtra and Channel AKA.",
      artistImage: "/buhdha.jpg",
      musicLinks: `<h2 className="text-black text-center" style="text-align:center"> Follow me: <a href="https://www.instagram.com/joebuhdha className="text-red""> Here </a> <h2/>`
    },
    {
      artistName: "Bakes",
      artistBio:`Bakes has been with us for half a decade, sharpening his skills in various areas by recording, mixing and producing his own records as well as those for various clients. His unique style takes inspiration from the underground New York Hip Hop scene along with his love for 70s Jazz and Soul. Under the guidance of mentor Joe Buhdha, Bakes has gradually been creating a large portfolio with us, having worked with artists such as Melonyx, Rodney P, Joe Buhdha, Franky Bones, ShyGuy, Goya Gumbani and more
      Bakes has also been co-hosting events held at the studio. Helping organize, promote and manage various events as well as typically taking the role of resident sound engineer.
      `,
      artistImage: "/bakes_one.jpeg",
      musicLinks: `<h2 className="text-black text-center" style="text-align:center"> Follow me: <a href="https://www.instagram.com/bakescantstop"> Here </a> <h2/>`
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-10" >
      {artistsData.map((artist, index) => (
        <CardDefault key={index} artist={artist} className="pb-3 flex justify-center items-center" />
      ))}
    </div>
  );
};

export default ArtistsPage;
