import React from "react";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";
import RojorganicsLogo from "../assets/rojorganics-logo.svg?react";
import StylishHeaderTitle from "../components/StylishHeaderTitle";
import GoToButton from "../components/GoToButton";
import HeaderImage from "../components/HeaderImage";

export default function WorkRojorganicsPage() {
  return (
    <>
      <HeaderImage imgName="rojorganics-cover.jpg" />
      <div className="container">
        <section className="mb-10">
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                Rojorganics is a beauty product company focused on formulating
                product for melanin-rich skin tones and aimed.
              </p>
              <p>
                In this project I’m responsible to design packaging for their
                beauty product launch. I work closely with the product owner and
                composing visual based on the needs and goal of the product.
              </p>
            </div>
          </div>
          <HeaderTitle>Background</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
            <div>
              <p className="max-w-[40.625rem]">
                I was very fortunate when Parker gave me a room to explore
                creativity for this project, she trusted my ability and let me
                purpose what I think will be best for her product. It all
                started with discovery phase where I get to learn more about her
                target audience and where she view her brand on the market.
              </p>
            </div>
            <div>
              <p className="max-w-[40.625rem]">
                Visually speaking, Parker told me that she like to see colors
                inherited from the brand’s logo to represent the product. After
                understanding her product, goal, vision, and as well as getting
                to know her as a person it help me to narrow my visual approach
                with nautral beauty, sustainability, and safe.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section className="mb-20">
          <RojorganicsLogo className="mb-16" />
          <img src="/img/rojorganic.jpg" className="mb-14" />
          <img src="/img/rojorganic-1.jpg" className="mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img src="/img/rojorganic-2.jpg" />
            <img src="/img/rojorganic-3.jpg" />
          </div>
        </section>
        <section>
          <StylishHeaderTitle className="mb-12">Read Next</StylishHeaderTitle>
          <div className="h-[17.5rem] bg-[url('/img/norris-mclaughlin.png')] bg-cover bg-center rounded-lg mb-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 gap-16">
            <div>
              <div className="font-medium underline underline-offset-4 text-3xl mb-4">
                Norris Mclaughlin
              </div>
              <div className="flex">
                <p className="max-w-[40.625rem] mr-8">
                  I create an experience for user to search and connect with
                  legal service representative.
                </p>
                <GoToButton goToUrl="/work/norris-mclaughlin" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />;
    </>
  );
}
