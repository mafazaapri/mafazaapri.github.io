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
        className="lg:object-[50%_20%]"
      />
    
       <div className="container">
        <section className="py-10">
          <div className="text-[2.5rem] lg:text-[6.25rem] text-start leading-none lg-leading-[6rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
              I create
              <br />
              visuals that
            </span>
            <br />
            <span className="font-neuton italic">make sense</span>
            <img src="/img/sprinkles.png" className="w-8 inline-block ms-2" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-16">
            <div className="text-start mb-5 lg:mb-0 lg:max-w-[28rem]">
              Hi I’m Mafaza{" "}
              <img src="/img/hand.png" className="w-6 inline-block" /> , with my
              experience I specialize in crafting seamless digital experiences
              for{" "}
              <span className="font-neuton italic">
                websites, apps, & brands.
              </span>
              <br />I believe that every product is unique, and so is the design
              process.
            </div>
          </div>
        </section>
  </>
  );
}
