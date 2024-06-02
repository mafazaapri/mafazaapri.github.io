import React from "react";
import HeaderImage from "../components/HeaderImage";
import PageMetadata from "../components/PageMetadata";
import StylishHeaderTitle from "../components/StylishHeaderTitle";
import Blob from "../assets/blob.svg?react";

export default function AboutPage() {
  return (
    <>
      <PageMetadata title="About" desc="About me" />

       <Blob className="absolute z-10 hidden lg:block left-1/2 -translate-x-1/2" />
         <div className="container">
        <section className="py-10">
       <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-16">
            
                  <div className="text-[2.5rem] lg:text-[4.25rem] text-start leading-none lg-leading-[4rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
            Hello{" "}
            I’m Mafaza. {" "}  <img src="/img/profile-pic.png" className="w-16 inline-block ms-2" /> 
       </span>
                       
                    <br />
                    <span className="font-small">
I am a UX/UI designer based in Seattle. I enjoy discussing product-ideas 
        
              and solving UX problem through design.  </span>    
         </div>
          </div>
          </section>
         

        <section className="py-10">
          <StylishHeaderTitle className="mb-6">
         Small lil details
          </StylishHeaderTitle>
          <br/>
           
           <p> I love working in a diverse environment. I believe that collaborating with people from different <br />
             backgrounds will help me grow and excel in my career.</p>
          <br/>
          <p>My favorite mobile app is Digit. The app offers a seamless experience, with each element 
            <br/>
            thoughtfully designed to help users achieve their goals effortlessly</p>
          <br/>
          <p>When I'm not working, I enjoy outdoor activities and visiting local farms around Washington. 
I have a great love for alpacas.</p>
          </section>
             </div>
    
     
    </>
  );
}
