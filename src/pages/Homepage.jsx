import React from "react";
import Navbar from "../components/Navbar";
import Blob from "../assets/blob.svg?react";
import Work from "../components/Work";
import Footer from "../components/Footer";
import StylishHeaderTitle from "../components/StylishHeaderTitle";
import PageMetadata from "../components/PageMetadata";
import { useOutletContext } from "react-router-dom";

const Homepage = () => {
  const [displayBlackScreen, hideBlackScreen] = useOutletContext();

  return (
    <div className="bg-home-bg bg-repeat">
      <PageMetadata
        title="Mafaza Apri"
        desc="UI/UX Designer based in Seattle"
      />
      <Blob className="absolute z-10 hidden lg:block left-1/2 -translate-x-1/2" />
      <div className="container">
        <section className="py-10">
          <div className="text-[2.5rem] lg:text-[4.25rem] text-start leading-none lg-leading-[4rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
              I simply create
              <br />
              visual that
              <br />
              make sense
            </span>
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
        <section className="py-10">
          <StylishHeaderTitle className="mb-6">
            Selected Works
          </StylishHeaderTitle>
          <p className="text-slate-400 mb-10">Website / Mobile app / Web App</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Work
              title="Norris Mclaughlin"
              imgName="norris-homepage.png"
              description="Redesigning an experience of connecting and searching legal
                  service"
              goToUrl="/work/norris-mclaughlin"
              imgCoverName="bg-cover-norris.png"
            />
            <Work
              title="Home + Space"
              imgName="homespace-homepage.png"
              description="Enhancing collaboration platforms within the architecture industry"
              goToUrl="/work/home-space"
              imgCoverName="bg-cover-home-space.png"
            />
            <Work
              title="Platforme 6610"
              imgName="platforme-homepage-cover.png"
              description="Designing bilingual platform dedicated to wellness community
              center"
              goToUrl="/work/platforme-6610"
              imgCoverName="bg-cover-platforme.png"
            />
            <Work
              title="Big Game Golf"
              imgName="biggame-homepage.png"
              description="Elevating golf experience in a form of mobile application -
              Phase 02"
              goToUrl="/work/big-game-golf"
              imgCoverName="bg-cover-big-game-golf.png"
            />
          </div>
        </section>
        <section className="py-10">
          <StylishHeaderTitle className="mb-6">
            Selected Works
          </StylishHeaderTitle>
          <p className="text-slate-400 mb-10">Brand Identity / Packaging</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Work
              title="Big Game Golf Branding"
              imgName="bgg-branding-home.png"
              description="Developing brand identity for 
              Big Game Golf"
              goToUrl="/work/big-game-golf-branding"
              imgCoverName="bg-cover-big-game-golf-branding.png"
            />
            <Work
              title="Rojorganic"
              imgName="rojorganic-branding-homepage.png"
              description="Creating a brand packaging for organic 
              beauty product"
              goToUrl="/work/rojorganics"
              imgCoverName="bg-cover-rojorganic.png"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
