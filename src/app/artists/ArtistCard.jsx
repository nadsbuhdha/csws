// ArtistCard.jsx
import React from "react";
import { DialogDefault } from "./Dialog";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  

export function ArtistCard({ artist, handleOpenDialog, handleCloseDialog, dialogOpen }) {
    return (
      <div className="flex justify-center items-center">
        <Button className="bg-black py-2 px-4" onClick={handleOpenDialog} variant="">
          About {artist.artistName}
        </Button>
        <DialogDefault
          imageProp={artist.artistImage}
          bodyProp={artist.artistBio}
          nameProp={artist.artistName}
          musicProp={artist.musicLinks}
          handleCloseDialog={handleCloseDialog}
          dialogOpen={dialogOpen}
        />
      </div>
    );
  }
  
