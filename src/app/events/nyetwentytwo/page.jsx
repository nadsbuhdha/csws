import React from 'react';
// import DefaultGallery from '../components/Gallary';
import DefaultGallery from '@/app/components/Gallary';

function Page() {
  const imageData = [
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106133/NYE%202022/DSC_3220_xkkrdw.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106131/NYE%202022/DSC_3231_ubseoc.jpg",
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106131/NYE%202022/DSC_3105_dxn3ay.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106128/NYE%202022/DSC_3118_k3hbt3.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106126/NYE%202022/DSC_3108_lq8xlu.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106126/NYE%202022/DSC_3109_yblyr5.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106125/NYE%202022/DSC_3111_kdr0uf.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106124/NYE%202022/DSC_3089_tx0jqo.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106122/NYE%202022/DSC_3175_ol7eao.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106122/NYE%202022/DSC_3107_w9xbvz.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106121/NYE%202022/DSC_3117_iias1l.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106121/NYE%202022/DSC_3093_zyioxk.jpg",
      
    },
    {

        imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106118/NYE%202022/DSC_3125_dy3fln.jpg",
        
    },
    {

        imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106115/NYE%202022/DSC_3096_z69xpy.jpg",
        
    },
    {

        imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1711106114/NYE%202022/DSC_3137_h4kclw.jpg",
        
    },
    // Add more image data here...
  ];

  return (
    <div>
      <h1 className="text-black	text-6xl text-center">NYE 2022 </h1>
    <DefaultGallery imageData={imageData} />
    </div>
  );
}

export default Page;
