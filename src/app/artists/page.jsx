import React from 'react';
import { CardDefault } from './Card';
import { faFacebookF, faSquareInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons"


const ArtistsPage = () => {
  const artistsData = [
    {
      artistName: "Joe Buhdha",
      artistBio: "30 years the game: Music Lover, Father and Liverpool fanatic. Nottingham’s Joe Buhdha has produced for some of the biggest names in hip hop, not forgetting remixes and credits on classics still referenced today. He has produced for hip hop soul, funk, jazz and reggae artists like Terri Walker, Melonyx, Estelle, John Legend, Talib Kweli, Masta Ace, Jurassic 5, Cut Chemist, Rodney P, Professor Green, Ian Brown, Klashnekoff Skinnyman, Wretch 32, Sleaford Mods, Harleighblu and many more. Not only producing Joe has been behind some major acts ( Rakim, Mista Jam, Ghostface, KRS One, DJ Premier, Big Daddy Kane, Roy Ayers, Omar, Lonnie Liston Smith, Jazzy Jeff, V Rocket, Earl Gateshead of Trojan Sound, Tall Black Guy, Klashnekoff, Rob Luis, Grandmaster Flash, Mr Thing, Hot 8 Brass Band, Jeru The Damaja, V Rocket Sound System,Wiley, Kano, Lethal B and many many more) coming to Nottingham and the UK biggest all British rap event UK Takeover in association with 1xtra and Channel AKA Joe now runs his own entertainments company Can’t Stop Won’t Stop providing support to artists and coordinating music and art events.",
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
