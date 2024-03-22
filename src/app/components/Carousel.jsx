import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomArrows() {
  return (
    <Carousel
      transition={{ duration: 3 }}
      autoplay={true}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          {/* Placeholder child */}
          {" "}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          {/* Placeholder child */}
          {" "}
        </IconButton>
      )}
    >
      <img src="/pico.jpg" alt="image 1" className="h-full w-full object-cover" />
      <img src="/pict.jpg" alt="image 2" className="h-full w-full object-cover" />
      <img src="/picth.jpg" alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
