// "use client"
// // import { useState, useEffect } from 'react';

// // export default function Home() {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     const fetchImages = async () => {
// //       try {
// //         const cloudName = 'dtyxhz3uy';
// //         const folderName = 'alexnut';
// //         const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/folder/${folderName}`);
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch images');
// //         }
// //         const data = await response.json();
// //         setImages(data.resources);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchImages();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Images from Cloudinary</h1>
// //       <div>
// //         {images.map(image => (
// //           <img
// //             key={image.public_id}
// //             src={image.secure_url}
// //             alt={image.public_id}
// //             style={{ width: '300px', height: '300px', margin: '10px' }}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';

// async function fetchImages(cloudName, apiKey, apiSecret, folderName) {
//   const response = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/folder/${folderName}`,
//     {
//       method: 'GET',
//       headers: {
//         'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
//       }
//     }
//   );

//   if (!response.ok) {
//     throw new Error('Failed to fetch data from Cloudinary');
//   }

//   return response.json();
// }

// export default function ImageGallery() {
//   const cloudName = 'dtyxhz3uy';
//   const apiKey = '293348676583125';
//   const apiSecret = '-F4dkj5HGbNIOcDshpZs-U88vGM';
//   const folderName = 'alexnut';

//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await fetchImages(cloudName, apiKey, apiSecret, folderName);
//         setImages(data.resources);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, [cloudName, apiKey, apiSecret, folderName]);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="gallery">
//         {images.map(image => (
//           <img key={image.public_id} src={image.secure_url} alt={image.public_id} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react'
import { AccordionCustomAnimation } from '../components/Accordion'

const accordionItems = [
  {
    question: "Main Equiptment",
    answer:
      "coming soon",
  },
  {
    question: "Live Equiptment",
    answer:
      "coming soon",
  },
  {
    question: "Outboard Equiptment",
    answer:
      "coming soon",
  },
];

function page() {
  return (
    <div><div >
      <div className="m-1 relative">
  <img className="w-full" src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778372/csws%20studio/DSC_4038_sc98xa.jpg" alt="" />
  {/* <h1 class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-black	">Can't Stop Won't Stop Studios</h1> */}
</div>
    <div className="grid grid-cols-4 gap-1 m-1">
      <div className="col-span-1">
        <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778375/csws%20studio/DSC_3994_jus6mc.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778375/csws%20studio/DSC_3993_m8eo0u.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778374/csws%20studio/DSC_3996_pdsxhh.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778373/csws%20studio/DSC_4007_smeml5.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778372/csws%20studio/DSC_4010_i0ktlt.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778372/csws%20studio/DSC_4009_uullpm.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778367/csws%20studio/DSC_4058_aidw0u.jpg" alt="Image 1" className="w-full" />
      </div>
      <div className="col-span-1">
      <img src="https://res.cloudinary.com/dtyxhz3uy/image/upload/v1708778367/csws%20studio/DSC_4031_uklnwp.jpg " alt="Image 1" className="w-full" />
      </div>
    </div>
  </div>


  <div className="text-black m-4 mt-4 pt-4 pb-4">

    <h1 className="text-4xl font-black mt-3 mb-4"> CSWS STUDIOS </h1>
  <h3 className="text-xl">TEST</h3>
  
  </div>
    <div className="m-4">
    <AccordionCustomAnimation c items={accordionItems} />

    </div>
  </div>

  )
}

export default page