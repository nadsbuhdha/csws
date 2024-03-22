import React from 'react';
import DefaultGallery from '../components/Gallary';
import SelectGallery from '../components/SelectGallary';

function Page() {
  const imageData = [
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708197004/csws/52bcc58c424e9a1d7b5222c5098f3efd90c7afa5_iifprw.webp",
      link: "events/alexnut",
      eventName: "Alexander Nut",
      eventDate: "7th May 2023",
    },
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1709995814/goya/401029802_18397625782041029_5441495816612290009_n_eve6dc.jpg",
      link: "events/goya",
      eventName: "Goya",
      eventDate: "17th November 2023",
    },
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125703/hiphopanniversery/IMG_20231214_140412_794_zmvtez.webp",
      link: "events/hiphopanni",
      eventName: "Hip-Hop 50th Anniversary",
      eventDate: "July & September 2023",
    },
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106128/NYE%202022/DSC_3118_k3hbt3.jpg",
      link: "events/nyetwentytwo",
      eventName: "NYE",
      eventDate: "31st December 2022",
    },
  ];

  return (
    <div>
      <h2 className="text-black text-center text-xl">PAST EVENTS</h2>
    <DefaultGallery imageData={imageData} />

    </div>
  );
}

export default Page;
