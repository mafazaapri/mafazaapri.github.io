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
            
                  <div className="text-[2.5rem] lg:text-[4.25rem] text-start leading-none lg-leading-[4rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
            Hello{" "}
              <img src="/img/hand.png" className="w-6 inline-block" /> , 
              <br />with my
              experience I specialize in crafting seamless digital experiences
              for{" "}
              </span>
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
