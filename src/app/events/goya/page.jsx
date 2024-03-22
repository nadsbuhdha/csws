import React from 'react';
// import DefaultGallery from '../components/Gallary';
import DefaultGallery from '@/app/components/Gallary';

function Page() {
  const imageData = [
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277680/goya/DSC_3232-min_ztkrfx.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277679/goya/DSC_3228-min_idvmr5.jpg",
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277672/goya/DSC_3177-min_khcjwa.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277647/goya/DSC_3199-min_b0ya8r.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277643/goya/DSC_3097-min_amtvyg.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277627/goya/DSC_3110-min_cyql5g.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277625/goya/DSC_3016-min_yxmuxv.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277623/goya/DSC_3229-min_fqqms4.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277657/goya/DSC_3120-min_somsjh.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277617/goya/DSC_3147-min_sleohx.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710277668/goya/DSC_3193-min_cmil5r.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1710278171/goya/DSC_3252-min_regmw0.jpg",
      
    },
    // Add more image data here...
  ];

  return (
    <div>
      <h1 class="text-black	text-6xl text-center">GOYA GUMBANI </h1>
    <DefaultGallery imageData={imageData} />
    </div>
  );
}

export default Page;
