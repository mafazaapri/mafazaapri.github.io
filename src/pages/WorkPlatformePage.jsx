import React from "react";
import Footer from "../components/Footer";
import VisitButton from "../components/VisitButton";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import StylishHeaderTitle from "../components/StylishHeaderTitle";
import GoToButton from "../components/GoToButton";

export default function WorkPlatformePage() {
  return (
    <>
      <div className="h-[45.9375rem] bg-[url('/img/platforme-6610.png')] bg-cover mx-12 rounded-xl mb-16 mt-10"></div>
      <div className="container">
        <section className="mb-10">
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                Platforme 6610 offer a variety of fitness programs led by
                experienced trainers that are tailored to individual needs and
                preferences.
              </p>
              <p>
                Platforme 6610 was created when the owner decided to part ways
                with a fitness center franchise based in Canada. With a whole
                new identity, they aimed to establish a diverse wellness
                community center that is cost-efficient and welcomes clientele
                to share their health journey within the community.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <HeaderTitle>Role & Responsibilities</HeaderTitle>
              <p className="max-w-[40.625rem]">
                My main role in this project is to collaborate with the product
                manager and stakeholders to develop the platform from the
                creative side. Since Platforme 6610 needs a major rebranding, I
                am involved in the brainstorming process to create a new face
                that aligns with the brand's voice. In addition to rebranding, I
                am also responsible for building their website to promote the
                new fitness platform.
              </p>
            </div>
            <div>
              <HeaderTitle>Focus</HeaderTitle>
              <p className="max-w-[40.625rem]">
                There are two clear goals to be achieved by the end of the
                project. First, to create a new brand identity for Platforme
                6610. Second, to develop a website that aligns with the brand's
                needs and represents their values. The deliverable included UI
                design and brand identity which you can find the case study
                here.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <HeaderTitle>Navigating Direction</HeaderTitle>
              <p className="max-w-[40.625rem]">
                In the beginning of the process me an my team had a throughout
                discussion with the stakeholders discussing on what should be
                the right approach to introduce a new fitness center to the
                market. The discovery phase includes defining the vision,
                mission, and goal for the company. We also collaborate on
                building the vision board. <br />
                <br />
                Ultimately we propose the theme that we see fit for Platforme
                6610 which is Bold, colorful, and diverse.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
            <div>
              <HeaderTitle>Composing Homepage</HeaderTitle>
              <p className="max-w-[40.625rem]">
                I organized the layout for the homepage while considering the
                key points that I need to meet on the website. The overall goal
                is to focused on introducing Platforme 6610 as a competitive
                brand new fitness center which aimed to help individuals in
                being active, improve their lifestyle, and build a vibrant
                communities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="italic">
                As a user I want to be able to know what service provided, so
                that I know what Platforme 6610 all about.
                <br />
                <br />
                As a user I want to be able to know what classes offered on the
                fitness center, so that I can consider to become a membership.
                <br />
                <br />
                As a user I want to be able to view the class schedule, so that
                I can join the class.
              </p>
            </div>
            <div>
              <p className="italic">
                As a user I want to be able to know the price membership so that
                I can compare with fitness center on the area.
                <br />
                <br />
                As a user I want to be able to register as a new member, so that
                I can join the class.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>#1 Website</HeaderTitle>
              <p className="max-w-[40.625rem]">
                After considering user’s needs and wants, I create prototype
                with goal to have the overall website design in sync.
                Calls-to-action (CTAs) play a significant role in prompting
                users to take action. I have added CTA taglines where necessary,
                without overwhelming users when they visit the website. I placed
                a fixed CTA to join the membership program presented on the
                homepage.
              </p>
            </div>
            <div>
              <HeaderTitle>Micro Interaction</HeaderTitle>
              <p className="max-w-[40.625rem]">
                To create a powerful statement I designed a micro-interaction as
                a starter to the website. I utilize the logo design and follows
                by short video with brief paragraph introducing the fitness
                center. To ensure accessibility, a skip-button available if user
                needed to skip the introduction.
              </p>
            </div>
          </div>
          <div className="bg-[#617698cc] px-14 py-16 flex justify-center items-center mb-14">
            <div className="bg-black h-[531px] w-[1041px]"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#617698cc] px-10 pt-12 flex justify-center items-center">
              <img src="/img/platforme-homepage.png" className="rounded-t-lg" />
            </div>
            <div className="bg-[#617698cc] px-10 pt-12 flex justify-center items-center">
              <img
                src="/img/platforme-homepage-2.png"
                className="rounded-t-lg"
              />
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <HeaderTitle>Class Schedule</HeaderTitle>
              <p className="max-w-[40.625rem]">
                One of the main takeaways mentioned during the discovery phase
                was to include a class schedule as part of the website. The
                class schedule will automatically rotate every two weeks,
                allowing members to view the available classes. The schedule
                will provide information such as the class program, instructor's
                name, duration, and timing.
              </p>
            </div>
            <div>
              <HeaderTitle>Focus</HeaderTitle>
              <p className="max-w-[40.625rem]">
                In order to develop the class schedule, I conducted a
                comparative study among different fitness platforms and analyzed
                how they present their schedules on their respective websites.
                Out of the many fitness platforms available, I narrowed down my
                focus to three specific platforms for my study.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="max-w-[40.625rem]">
                LA Fitness
                <br />
                <br />
                Below is how LA fintess’s schedule presented on their website by
                utilizing drop-down tab to presents the schedule for Yoga class
                around the area 98108. There are Pro and cons that I learnt from
                using drop-down button to present the class schedule. <br />
                <br />
                Cons: The use of a drop-down table limits users from comparing
                the availability of classes across different days. For example,
                if a user wants to view all available Yoga classes from Monday
                to Wednesday, they would have to open three separate drop-down
                tabs. This constraint in information makes it difficult for
                users to effectively compare the data.
              </p>
            </div>
            <div>
              <div className="bg-[#617698cc] px-16 py-10 flex justify-center items-center">
                <img
                  src="/img/platforme-la-fitness.png"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="max-w-[40.625rem]">
                Rival Fitness
                <br />
                <br />
                The second fitness platform I looked at is Rival Fitness. The
                concept of their class schedule is quite similar to Platforme
                6610, where they present a bi-weekly class schedule on their
                system but also provide the option for users to view the full
                calendar schedule. <br />
                <br />
                Pro: One aspect of their schedule design that I found effective
                is how they incorporated the date and class details in
                synchronized tables. As a user, I felt that the information was
                easy to digest while still providing the flexibility to access
                more information when needed.
                <br />
                <br />
                Cons: The one con that I found is that the class filter only
                works based on the selected day, which means I can only filter
                classes for one specific day. With that being said, the filter
                function lacks utility since there are not many classes taking
                place on a single day. It would be more beneficial if users
                could filter classes based on a certain range of days or weeks.
              </p>
            </div>
            <div>
              <div className="bg-[#617698cc] px-16 py-10 flex justify-center items-center">
                <img
                  src="/img/platforme-rival-fitness.png"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Class Schedule</HeaderTitle>
              <p className="max-w-[40.625rem]">
                After observing comparative study and understanding the scale of
                available classes on the schedule. I designed a schedule to fit
                in with the user’s needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faSquareCheck} size="lg" />
                <div className="max-w-[40.625rem] font-medium text-lg">
                  Compare available classes across the day
                </div>
              </div>
              <p className="max-w-[40.625rem]">
                Utilizing X and Y graph to increase readability when scanning
                the class availability. The X column shows as indicator of
                timing and the Y row has info of classes in a card with length
                follow based on the indicator.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={faSquareCheck} size="lg" />
                <div className="max-w-[40.625rem] font-medium text-lg">
                  Allowing user to pick and choose
                </div>
              </div>
              <p className="max-w-[40.625rem]">
                Since the class are available from Monday to Sunday I’m
                implementing a clickable column where user can view the schedule
                based on the selected day. Additionally user allowed to view the
                schedule based on “Weekly” schedule where all classes presented
                from Monday to Sunday.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-14">
            <div className="bg-[#617698cc] px-14 py-16 flex justify-center items-center">
              <div className="bg-black h-[450px] w-[450px]"></div>
            </div>
            <div className="bg-[#617698cc] px-14 py-16 flex justify-center items-center">
              <div className="bg-black h-[450px] w-[450px]"></div>
            </div>
          </div>
          <div className="bg-[#617698cc] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/platforme-class.png"
              className="rounded-lg max-h-[40rem]"
            />
          </div>
        </section>
        <Seperator />
        <section>
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <HeaderTitle>Class Schedule</HeaderTitle>
              <p>
                One of the main takeaways mentioned during the discovery phase
                was to include a class schedule as part of the website. The
                class schedule will automatically rotate every two weeks,
                allowing members to view the available classes. The schedule
                will provide information such as the class program, instructor's
                name, duration, and timing.
              </p>
            </div>
            <div>
              <VisitButton url="https://platforme6610.com/" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#617698cc] px-10 pt-12 flex justify-center items-center">
              <img src="/img/platforme-contact.png" className="rounded-t-lg" />
            </div>
            <div className="bg-[#617698cc] px-10 pt-12 flex justify-center items-center">
              <img
                src="/img/platforme-contact-2.png"
                className="rounded-t-lg"
              />
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <HeaderTitle>Mobile Responsive</HeaderTitle>
              <p className="max-w-[40.625rem]">
                One of the main takeaways mentioned during the discovery phase
                was to include a class schedule as part of the website. The
                class schedule will automatically rotate every two weeks,
                allowing members to view the available classes. The schedule
                will provide information such as the class program, instructor's
                name, duration, and timing.
              </p>
            </div>
          </div>
          <div className="bg-[url('/img/platforme-phone.png')] h-[42rem] bg-cover bg-center mb-14" />
          <div className="bg-[#617698cc] px-14 py-16 flex justify-center items-center mb-20">
            <img
              src="/img/platforme-mockup.png"
              className="rounded-lg max-h-[40rem]"
            />
          </div>
        </section>
        <section>
          <StylishHeaderTitle className="mb-12">Read Next</StylishHeaderTitle>
          <div className="h-[17.5rem] bg-[url('/img/big-game-golf.png')] bg-cover bg-center rounded-lg mb-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 gap-16">
            <div>
              <div className="font-medium underline underline-offset-4 text-3xl mb-4">
                Big Game Golf
              </div>
              <div className="flex">
                <p className="max-w-[40.625rem] mr-8">
                  Elevating golf experience in a form of mobile application -
                  Phase 02
                </p>
                <GoToButton goToUrl="/work/big-game-golf" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />;
    </>
  );
}
