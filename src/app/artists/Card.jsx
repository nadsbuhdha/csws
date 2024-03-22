"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArtistCard } from "./ArtistCard";
  import React, { useState } from "react";
   
  export function CardDefault({ artist }) {
    const [dialogOpen, setDialogOpen] = useState(false);
  
    const handleOpenDialog = () => {
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };
  
    return (
    
      <div className="flex justify-center items-center pb-5">
        <Card className="w-96 m-3">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={artist.artistImage} alt="card-image" className="content-center" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {artist.artistName}
            </Typography>
            <Typography className="truncate ...">
              {artist.artistBio}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <ArtistCard
              artist={artist}
              handleOpenDialog={handleOpenDialog}
              handleCloseDialog={handleCloseDialog}
              dialogOpen={dialogOpen}
            />
          </CardFooter>
        </Card>
      </div>
    );
  }