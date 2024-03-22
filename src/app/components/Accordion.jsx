"use client"

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export function AccordionCustomAnimation({ items }) {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);
 
  return (
    <>
      {items.map((item, index) => (
        <Accordion  key={index} open={open === index} animate={CUSTOM_ANIMATION}>
          <AccordionHeader  onClick={() => handleOpen(index)}>{item.question}</AccordionHeader>
          <AccordionBody >{item.answer}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
