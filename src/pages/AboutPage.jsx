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
        imgCoverName="bg-cover-big-game-golf.png"
        imgName="bgg-page.png"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
  );
}
