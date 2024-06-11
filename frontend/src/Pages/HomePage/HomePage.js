import React from "react";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import Poster from "../../Components/Poster/Poster"

const HomePage = () => {
  return (
    <>
  
      <div className="space-y-5 py-5 flex flex-col justify-center px-5 lg-px-10">
        {" "}
        <Poster />
        <HomeSectionCarousel SectionName={"Women"}/>
        <HomeSectionCarousel SectionName={"beauty"}/>
        <HomeSectionCarousel SectionName={"Accessories"}/>
        <HomeSectionCarousel SectionName={"Decor"}/>
      </div>
    
    </>
  );
};

export default HomePage;
