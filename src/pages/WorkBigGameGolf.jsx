import React from "react";
import PageMetadata from "../components/PageMetadata";
import HeaderImage from "../components/HeaderImage";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";
import ReadNext from "../components/ReadNext";
import BggPoint from "./page_components/bgg/BggPoint";
import Footer from "../components/Footer";

export default function WorkBigGameGolf() {
  return (
    <>
      <PageMetadata
        title="Big Game Golf"
        desc="Redesigning an experience of connecting and searching legal service"
      />
      <HeaderImage
        imgCoverName="bg-cover-big-game-golf.png"
        imgName="bgg-page.png"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container">
        <section className="mb-10">
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                Big game golf is an entertainment mobile app for golf
                enthusiasts. The app facilitate players to keep track on their
                game & connect with other golfers.
              </p>
              <p>
                After the app launched on 2018 then the stakeholders decided
                they would like to enhance their branding and the overall
                experience for their product to be more intuitive and engaging.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
            <div>
              <HeaderTitle>Role & Responsibilities</HeaderTitle>
              <p className="max-w-[31.25rem]">
                In this project I work closely with UX researcher and
                responsible to convert low fidelity wireframe to a refreshed UI
                prototype. Beside working on the product I’m also responsible to
                collaborate with the team to build a brand identity for Big game
                golf.
              </p>
            </div>
            <div>
              <HeaderTitle>Focus</HeaderTitle>
              <p className="max-w-[31.25rem]">
                My focus on this project is to build intuitive UI design and
                collaborate with the design team to enhance the low fidelity
                wireframe into final deliverable. Additionally I’m also
                responsible to create a new brand identity including design for
                the landing page.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Challenge</HeaderTitle>
              <p className="max-w-[31.25rem]">
                I joined the team halfway when they’re supposed to be designer
                withdraws from the position. I worked in a team of project
                manager, UX researcher, and lead designer. Since the discovery
                phase has done the main challenge that I face on this project is
                to keep up with the work pace. To convert low fidelity wireframe
                it required knowledge of understanding the whole concept of
                product. With the time constraint I have to be fed in with
                everything all at once and fill in the gap as we progress in the
                project. <br /> <br /> For the purpose of the case study below are few of modules 
                that I covered on this project.
              </p>
            </div>
            <div>
              <img src="/img/bgg-1.png" />
            </div>
          </div>
        </section>
        <Seperator />
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Module #01 Create New Game</HeaderTitle>
              <p className="max-w-[31.25rem]">
                The first module covered is the home screen. This screen is designed to be personalized, 
                allowing users to access shortcuts to functions based on priority levels, such as tracking games, 
                scheduling upcoming games, sending invitations, assigning rosters, and managing their wallets. 
                At this stage, I defined the design system for the entire set of screens, incorporating the brand's 
                identity throughout.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div class="bg-[#DFF5FD] px-10 py-12 flex justify-center items-center">
              <img src="/img/bgg-2.png" class="rounded-lg max-h-[33.75rem]" />
            </div>
            <div class="bg-[#DFF5FD] px-10 py-12 flex justify-center items-center">
              <img src="/img/bgg-3.png" class="rounded-lg max-h-[33.75rem]" />
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>MODULE #02 FIND GAME</HeaderTitle>
              <p className="max-w-[31.25rem]">
                One of the app primary feature is allowing user to find game
                based on their location or the game’s name. After finding the
                game, user can view all the details related to the game such as
                players, date, location, or available bet. User able to send a
                request to join the game and wait for the assigned manager to
                approve the request.
              </p>
            </div>
          </div>
          <div className="bg-[#DFF5FD] px-14 py-16 mb-20 flex gap-16 flex-wrap content-center justify-center justify-items-center">
            <img
              src="/img/bgg-4.jpg"
              className="rounded-lg max-h-[29.6875rem]"
            />
            <img
              src="/img/bgg-5.jpg"
              className="rounded-lg max-h-[29.6875rem]"
            />
            <img
              src="/img/bgg-6.jpg"
              className="rounded-lg max-h-[29.6875rem]"
            />
            <img
              src="/img/bgg-7.jpg"
              className="rounded-lg max-h-[29.6875rem]"
            />
          </div>
        </section>
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>MODULE #03 INVITE OTHER PLAYERS</HeaderTitle>
              <p className="max-w-[31.25rem]">
                After joining a game, user has an option to invite other players
                by looking on their name and add it into the the roster. This
                feature allows user to view other player’s profile such as their
                rank, history scores, and based location.
              </p>
            </div>
          </div>
          <div className="bg-[#DFF5FD] px-14 py-16 mb-20 flex gap-20 flex-wrap content-center justify-center justify-items-center ">
            <img
              src="/img/bgg-8.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
            <img
              src="/img/bgg-9.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
            <img
              src="/img/bgg-10.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
          </div>
        </section>
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>MODULE #02 FIND GAME</HeaderTitle>
              <p className="max-w-[31.25rem]">
                The scorecard enables users to check scores in real-time, and managers can post scores for other players. 
                The challenge with this screen was to present important information, such as scores, in a visible way
                within limited space. I used multiple dropdowns to refine the information and ensure it is readable for users.
              </p>
            </div>
          </div>
          <div className="bg-[#DFF5FD] px-14 py-16 mb-20 flex gap-12 flex-wrap content-center justify-center justify-items-center ">
            <img
              src="/img/bgg-11.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
            <img
              src="/img/bgg-12.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
            <img
              src="/img/bgg-13.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
            <img
              src="/img/bgg-14.jpg"
              className="rounded-lg max-h-[33.5625rem]"
            />
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>SUMMARY</HeaderTitle>
              <p className="max-w-[31.25rem]">
                By the end of this project I have learned important key
                takeaways for myself to improve my skill ability in the future.
                Here are some points that I noted down.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            <div className="flex max-w-[27.0625rem]">
              <BggPoint>
                Being the solely designer with multidisciplinary role is
                challenging but it is achievable with a solid time management
                and a good team work.
              </BggPoint>
            </div>
            <div className="flex max-w-[27.0625rem]">
              <BggPoint>
                Bridge a good communication with stakeholders, don’t treat them
                like an enemy rather than people who you can collaborate with as
                a team. There are times we might not see eye to eye but at the
                end of the day we all want to achieve the same goal.
              </BggPoint>
            </div>
            <div className="flex max-w-[27.0625rem]">
              <BggPoint>
                This project dated couple years ago looking back again today I
                can see there are few things can be improve such as UI elements
                and some usability needs to be edited.
              </BggPoint>
            </div>
            <div className="flex max-w-[27.0625rem]">
              <BggPoint>
                When working in a team environment it is important to discuss
                the what-if situation and have plan B ready.
              </BggPoint>
            </div>
          </div>
        </section>
        <section>
          <ReadNext
            imgName="bgg-branding-page.png"
            imgCoverName="bg-cover-big-game-golf-branding.png"
            imgClassName="max-w-[30.875rem]"
            title="Big Game Golf Branding"
            desc="Elevating golf experience in a form of
            mobile application"
            url="/work/big-game-golf-branding"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
