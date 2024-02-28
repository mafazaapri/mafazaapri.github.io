import React from "react";
import Navbar from "../components/Navbar";
import Blob from "../assets/blob.svg?react";
import Work from "../components/Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Blob className="absolute z-[-1]" />
      <div className="container">
        <section className="py-10">
          <Navbar />
          <div className="uppercase text-[7.5rem] text-start font-medium leading-none	mr mt-24">
            I create<br></br>
            visual that <br></br>
            makes sense
          </div>
          <div className="flex justify-between mt-16">
            <div className="text-start max-w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="flex items-start max-w-52 text-start">
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

          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="text-4xl font-medium mb-5">Norris Mclaughlin</div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/norris-mclaughlin.png')] bg-cover bg-no-repeat bg-center mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Redesigning an experience of connecting and searching legal
                  service
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium mb-5">Home + Space</div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/home-space.png')] bg-cover bg-no-repeat bg-center mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Enhancing collaboration platform within the architectures
                  industry
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium mb-5">Platforme 6610</div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/platforme-6610.png')] bg-cover bg-no-repeat bg-center mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Designing bilingual platform dedicated to wellness community
                  center
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium mb-5">Big Game Golf</div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/big-game-golf.png')] bg-cover bg-no-repeat bg-center mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Elevating golf experience in a form of mobile application -
                  Phase 02
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
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
          <p className="text-slate-400 mb-10">Brand Identity / Packaging</p>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="text-4xl font-medium mb-5">
                Big Game Golf Branding
              </div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/big-game-golf-branding.png')] bg-cover bg-no-repeat bg-center mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Redesigning an experience of connecting and searching legal
                  service
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-medium mb-5">Rojorganic</div>
              <div
                className={`h-[33.1rem] rounded-lg bg-[url('assets/img/rojorganic.jpg')] bg-cover bg-no-repeat bg-right-top mb-7`}
              ></div>
              <div className="flex justify-between">
                <div className="max-w-xs">
                  Enhancing collaboration platform within the architectures
                  industry
                </div>
                <div className="bg-black rounded-full inline-block w-8 h-8 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
