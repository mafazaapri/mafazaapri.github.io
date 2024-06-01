import React from "react";
import HeaderImage from "../components/HeaderImage";
import PageMetadata from "../components/PageMetadata";

export default function AboutPage() {
  return (
    <>
      <PageMetadata title="About" desc="About me" />
      <div>About.</div>
         <div className="container">
        <section className="py-10">
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
           </div>
    </>
  );
}
