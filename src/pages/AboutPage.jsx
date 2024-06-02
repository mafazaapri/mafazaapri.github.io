import React from "react";
import HeaderImage from "../components/HeaderImage";
import PageMetadata from "../components/PageMetadata";
import StylishHeaderTitle from "../components/StylishHeaderTitle";
import Blob from "../assets/blob.svg?react";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <PageMetadata title="About" desc="About me" />

       <Blob className="absolute z-10 hidden lg:block left-1/2 -translate-x-1/2" />
         <div className="container">
        <section className="py-10">
            
                  <div className="text-[2.5rem] lg:text-[4.25rem] text-start leading-tight lg-leading-[4rem] mr mt-16 lg:mt-40">
            <span className="font-medium">
            Hello{" "}  <img src="/img/profile-pic.png" className="w-16 inline-block ms-2" /> 
              <br/>
       
       </span>
                       
                  
                    <span className="font-small">
I'm Mafaza, UX/UI designer based <br/> in Seattle. 
                      
                      I enjoy discussing product-ideas 
        
             <br/> & solving problem through design  </span>    
     
          </div>
          </section>
         

        <section className="py-10">
          <StylishHeaderTitle className="mb-6">
  little details
          </StylishHeaderTitle>
          <br/>
            Currently I'm a UX designer at BeCurious Studio where I collaborate with PM, stakeholders, <br/> and team of designers to help clients achieve their goal <img src="/img/sprinkle.png" className="w-8 inline-block ms-2" /> <br/><br/>
         I love working in a diverse environment. I believe that collaborating with people from different <br />
             backgrounds will help me grow and excel in my career.   <img src="/img/plant.png" className="w-8 inline-block ms-2" /> 
          <br/>
          <br/>
       My favorite mobile app is Digit. The app offers a seamless experience, with each element 
            <br/>
            thoughtfully designed to help users achieve their goals effortlessly    <img src="/img/iphone.png" className="w-8 inline-block ms-2" />
          <br/>
          <br/>
 When I'm not working, I enjoy outdoor activities and visiting local farms around Washington. <br/>
I have a great love for alpacas          <img src="/img/alpaca.png" className="w-8 inline-block ms-2" />
          </section>
             </div>
    
     <footer/>
    </>
  );
}
