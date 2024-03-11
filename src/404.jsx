import React from "react";
import PageMetadata from "./components/PageMetadata";
import Blob from "./assets/blob.svg?react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Blob className="absolute z-[-1] hidden lg:block left-1/2 -translate-x-1/2" />
      <section className="py-10">
        <PageMetadata
          title="404 Not Found - Mafaza Apri"
          desc="The page is not found."
        />
        <div className="container">
          <Navbar />
          <div className="relative min-h-[30rem]">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 text-center max-w-[40.625rem]"
            >
              <div className="tracking-widest font-bold text-9xl mb-3">404</div>
              <p>
                Either the URL is misspelled, the page has been removed, or
                you're looking in the wrong place.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
