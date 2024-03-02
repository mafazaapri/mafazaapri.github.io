import React from "react";
import Navbar from "../components/Navbar";
import Blob from "../assets/blob.svg?react";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Blob className="absolute z-[-1] hidden lg:block left-1/2 -translate-x-1/2" />
      <div className="container">
        <section className="py-10">
          <Navbar />
          <div className="uppercase text-[2.5rem] lg:text-[7.5rem] text-start font-medium leading-none	mr mt-16 lg:mt-24">
            I create<br></br>
            visual that <br></br>
            makes sense
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-16">
            <div className="text-start mb-5 lg:mb-0 lg:max-w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="flex items-start lg:max-w-52 text-start">
              <div className="w-[16px] h-[5px] bg-black mr-3 my-2"></div>
              <div>UI/UX Designer based in Seattle</div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="flex items-center mb-6">
            <div className="text-white bg-black rounded-3xl px-4 py-2 font-matter font-medium inline-block mr-5">
              <div className="uppercase w-max">Selected Works</div>
            </div>
            <div className="bg-slate-300 h-[1px] w-full"></div>
          </div>
          <p className="text-slate-400 mb-10">
            Website / Mobile app / Sotware tool
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Work
              title="Norris Mclaughlin"
              imgFullName="norris-mclaughlin.png"
              description="Redesigning an experience of connecting and searching legal
                  service"
              goToUrl="/work/norris-mclaughlin"
            />
            <Work
              title="Home + Space"
              imgFullName="home-space.png"
              description="Enhancing collaboration platform within the architectures
              industry"
              goToUrl="/work/home-space"
            />
            <Work
              title="Platforme 6610"
              imgFullName="platforme-6610.png"
              description="Designing bilingual platform dedicated to wellness community
              center"
              goToUrl="/work/platforme-6610"
            />
            <Work
              title="Big Game Golf"
              imgFullName="big-game-golf.png"
              description="Elevating golf experience in a form of mobile application -
              Phase 02"
              goToUrl="/work/big-game-golf"
            />
          </div>
        </section>
        <section className="py-10">
          <div className="flex items-center mb-6">
            <div className="text-white bg-black rounded-3xl px-4 py-2 font-matter font-medium inline-block mr-5">
              <div className="uppercase w-max">Selected Works</div>
            </div>
            <div className="bg-slate-300 h-[1px] w-full"></div>
          </div>
          <p className="text-slate-400 mb-10">Brand Identity / Packaging</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Work
              title="Big Game Golf Branding"
              imgFullName="big-game-golf-branding.png"
              description="Redesigning an experience of connecting and searching legal
              service"
              goToUrl="/work/big-game-golf-branding"
            />
            <Work
              title="Rojorganic"
              imgFullName="rojorganic.jpg"
              description="Enhancing collaboration platform within the architectures
              industry"
              goToUrl="/work/rojorganic"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
