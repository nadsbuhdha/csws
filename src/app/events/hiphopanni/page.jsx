import React from 'react';
// import DefaultGallery from '../components/Gallary';
import DefaultGallery from '@/app/components/Gallary';

function Page() {
  const imageData = [
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125723/hiphopanniversery/DSC_9023-min_vrxybt.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125720/hiphopanniversery/DSC_9027-min_qh2rkk.jpg",
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125703/hiphopanniversery/IMG_20231214_140412_794_zmvtez.webp",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125722/hiphopanniversery/DSC_9055-min_jro2fg.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125714/hiphopanniversery/DSC_9047-min_rbjdnn.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125263/hiphopanniversery/DSC08260-min_o5rewu.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125261/hiphopanniversery/DSC08238-min_pipvxk.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125259/hiphopanniversery/DSC08237-min_skzdgu.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125257/hiphopanniversery/DSC08182-min_ghxkdb.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125013/hiphopanniversery/DSC08189-min_ief2e1.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125008/hiphopanniversery/DSC08222-min_c9ychz.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711125702/hiphopanniversery/IMG_20231010_152741_473_tftcjm.webp",
      
    },
    // Add more image data here...
  ];

  return (
    <div>
      <h1 class="text-black	text-6xl text-center mt-5 mb-3">Hip Hop 50th Anniversary Part 1 & Part 2 </h1>
    <DefaultGallery imageData={imageData} />
    </div>
  );
}

export default Page;
