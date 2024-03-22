import React from 'react';
// import DefaultGallery from '../components/Gallary';
import DefaultGallery from '@/app/components/Gallary';

function Page() {
  const imageData = [
    {
      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237578/alexnut/IMG_4682_nzhnmu.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237566/alexnut/IMG_4661_owloql.jpg",
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237554/alexnut/IMG_4632_qkw68z.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237549/alexnut/IMG_4625_rliygm.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237564/alexnut/IMG_4652_zvq7qn.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237545/alexnut/IMG_4624_rjpmm7.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237540/alexnut/IMG_4615_a7jssx.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237538/alexnut/IMG_4611_wbsf4s.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237535/alexnut/IMG_4597_hq4wqq.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237526/alexnut/IMG_4585_tkweuk.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237523/alexnut/IMG_4591_hgxqml.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237521/alexnut/IMG_4586_zeg9tz.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237533/alexnut/IMG_4604_ktmv99.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237533/alexnut/IMG_4603_n3cpb1.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237531/alexnut/IMG_4598_fd41tg.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237542/alexnut/IMG_4618_isykgg.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237556/alexnut/IMG_4638_ijgmma.jpg",
      
    },
    {

      imageLink: "https://res.cloudinary.com/dtyxhz3uy/image/upload/v1707237557/alexnut/IMG_4636_teejrb.jpg",
      
    },

    
    
    // Add more image data here...
  ];

  return (
    <div>
      <h1 class="text-black	text-6xl text-center">ALEX NUT </h1>
    <DefaultGallery imageData={imageData} />
    </div>
  );
}

export default Page;
