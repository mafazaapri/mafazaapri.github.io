import React from "react";
import PageMetadata from "../components/PageMetadata";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";

export default function WorkBigGameGolfBranding() {
  return (
    <>
      <PageMetadata
        title="Home + Space"
        desc="Enhancing collaboration platform within the architectures industry"
      />
      <HeaderImage imgName="big-game-golf-branding.png" />
      <div className="container">
        <section>
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                The first part of Big game golf project is to create a new
                identity. The current logo they have is outdated and needs to be
                revamped.
              </p>
              <p>
                The first part of Big Game Golf project I was assigned to
                rebranding their existing identity. The new logo will be used on
                their new mobile app platform, website and eventually used as
                their new visual identity. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7 mb-16">
            <div>
              <HeaderTitle>Role & Responsibilities</HeaderTitle>
              <p className="max-w-[40.625rem]">
                As the solely designer for this project I am responsible to
                ideate new concept for logo design and visual identity,
                including color system, typography and visual direction.
              </p>
            </div>
          </div>
          <div>
            <HeaderTitle>Navigating Direction</HeaderTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7 mb-16">
              <div>
                <p className="max-w-[40.625rem]">
                  As part of design sprint me and my team each of us populated
                  moodboard of how we envision the new logo concept and present
                  it to the internal team. The purpose was to see each other's
                  perspective and collectively put down ideas that we feel align
                  with the brand  for the final delivery. 
                </p>
              </div>
              <div>
                <p className="max-w-[40.625rem]">
                  Additionally we analyze the current logo and one takeaway we
                  grasp from the discovery phase is that, the client wants to
                  avoid using the golf ball on the logo since potentially this
                  game will expand in the future not only limited to golf but it
                  could be another game such as soccer, basketball, and any
                  other sports game related. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <Seperator />
      </div>
      <Footer />;
    </>
  );
}
