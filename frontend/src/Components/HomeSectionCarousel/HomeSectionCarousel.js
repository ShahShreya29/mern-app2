import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCards/HomeSectionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const HomeSectionCarousel = ({ SectionName, data }) => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = [1,2,3,4].map((item) => (
    <HomeSectionCard />
  ));

  return (                    
    <>
      <div className="relative px-4 lg:px-8 ">
        <h2 className="text-2xl-center font-extrabold py-5">{SectionName}</h2>
        <div className="relative p-5">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
          />

          {activeIndex !== items.length - 5 && (
            <Button
              className="z-80"
              variant="content"
              sx={{ position: "absolute", top: "10rem", right: "0rem" }}
              color="black"
              arial-label="next"
              onClick={slideNext}
            >
              <ArrowForwardIosIcon />
            </Button>
          )}
          {activeIndex !== 0 && (
            <Button
              className="z-80"
              variant="content"
              sx={{ position: "absolute", top: "10rem", left: "0rem" ,}}
              // display: { xs: 'none' } 
              color="black"
              arial-label="next"
              onClick={slidePrev}
             
            >
              <ArrowBackIosNewIcon />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarousel;
