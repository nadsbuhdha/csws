"use client"

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({ imageProp, bodyProp, nameProp, handleCloseDialog, musicProp, dialogOpen }) {
    return (
      <Dialog open={dialogOpen} size="xxl" handler={handleCloseDialog} className="flex justify-center items-center">
        <DialogHeader className="underline">{nameProp}</DialogHeader>
        <img className="w-1/5 mb-4 content-center mx-auto" src={imageProp} alt="artist" />
        <DialogBody className="text-black">{bodyProp} <br/> <br/><span dangerouslySetInnerHTML={{ __html: musicProp }} /></DialogBody>
        <DialogFooter>
          {/* <Button variant="text" color="red" onClick={handleCloseDialog} className="mr-1">
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="red" onClick={handleCloseDialog}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
  }
  


// import React from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
 
// export function DialogSizes() {
//   const [size, setSize] = React.useState(null);
 
//   const handleOpen = (value) => setSize(value);
 
//   return (
//     <>
//       <div className="mb-3 flex gap-3">
//         <Button onClick={() => handleOpen("xxl")} variant="gradient">
//           Open Dialog XXL
//         </Button>
//       </div>
//       <Dialog
//         open={
//           size === "xxl"
//         }
//         size={size || "md"}
//         handler={handleOpen}
//       >
//         <DialogHeader>Its a simple dialog.</DialogHeader>
//         <DialogBody>{bodyProp}</DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={() => handleOpen(null)}
//             className="mr-1"
//           >
//             <span>Cancel</span>
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={() => handleOpen(null)}
//           >
//             <span>Confirm</span>
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </>
//   );

