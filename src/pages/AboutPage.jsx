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
            
                  <div className="text-[2.5rem] lg:text-[4.25rem] text-start leading-none lg-leading-[2rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
            Hello{" "}
              <img src="/img/profile-pic.png" className="w-6 inline-block" /> , 
              <br />I’m Mafaza, a multi-disciplinary designer based {" "}
     
              in Seattle. I love to to talk about product-ideas 
        
              and solving UX problem. Currently UX/UI Designer at  BeCurious Studio.
              </span>
              
            </div>
          </div>
          </section>
           </div>

   
          <StylishHeaderTitle className="mb-6">
         Small lil details
          </StylishHeaderTitle>
     
    </>
  );
}
