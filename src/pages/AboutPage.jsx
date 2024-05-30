import React from "react";
import HeaderImage from "../components/HeaderImage";
import PageMetadata from "../components/PageMetadata";

export default function AboutPage() {
  return (
  <>

     <PageMetadata
        title="Big Game Golf"
        desc="Redesigning an experience of connecting and searching legal service"
      />
  <HeaderImage
        imgCoverName="bg-cover-home-space.png"
        imgName="homespace-homepage.png"
        className="lg:object-[50%_20%]"
      />
  </>
  );
}
