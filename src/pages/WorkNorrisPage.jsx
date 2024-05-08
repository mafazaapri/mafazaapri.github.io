import React from "react";
import Footer from "../components/Footer";
import VisitButton from "../components/VisitButton";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";
import DiscoveryPoint from "./page_components/homepage/DiscoveryPoint";
import ShoppingExperience from "../assets/shopping-experience.svg?react";
import SearchingForAttorney from "../assets/searching-for-attorney.svg?react";
import SearchingExperienceMap from "../assets/searching-experience-map.svg?react";
import HeaderImage from "../components/HeaderImage";
import ReadNext from "../components/ReadNext";
import PageMetadata from "../components/PageMetadata";

export default function WorkNorrisPage() {
  return (
    <>
      <PageMetadata
        title="Norris Mclaughlin"
        desc="Redesigning an experience of connecting and searching legal service"
      />
      <HeaderImage
        imgCoverName="bg-cover-norris.png"
        imgName="norris-homepage.png"
      />
      <div className="container">
        <section className="mb-10">
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                Norris Mclaughlin is a law firm that serves legal needs to
                families and businesses of all sizes in a variety of industries
              </p>
              <p>
                Norris Mclaughlin provide full service legal needs to
                individuals and business, there are 100+ attorneys serving
                throughout New Jersey, New York, and Pennsylvania. As their law
                firm grows bigger their website platform plays a vital role to
                connect between client and attorneys. To improve and maximize
                the website's potential, a redesigning project is needed.
              </p>
            </div>
            <div>
              <VisitButton url="https://norrismclaughlin.com/" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
            <div>
              <HeaderTitle>Role & Responsibilities</HeaderTitle>
              <p className="max-w-[31.25rem]">
                As a UX designer I was responsible to collaborate with team
                member and design 30+ unique pages. My involvement in the
                project included user research, visual concept, and producing
                the final prototype. We performed qualitative research by
                interviewing internal members, client and lawyers to get a
                better understanding of their objectives ; personality of the
                brand, audience, and the issue they faced on the current
                website.
              </p>
            </div>
            <div>
              <HeaderTitle>Focus</HeaderTitle>

              <p className="max-w-[31.25rem]">
                Norris Mclaughlin needed to replace their current website,
                organize the site architecture, and enhance the platform to
                create a seamless experience for clients to find attorney.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>User Research</HeaderTitle>
              <p className="max-w-[31.25rem]">
                To have a better understanding about Norris Mclaughlin we start
                off the project by conducting interview with the team member and
                attorneys. We composed questionnaire related to their
                background, vision, role, and technical issue on the current
                website. Below are some of the answer of questionnaire that we
                asked interviewee.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-x-10  mb-24">
            <div class="col-span-2">
              <div
                className="w-[7.8125rem] h-[7.8125rem] bg-[#E3E5E8] rounded-full relative 
                after:rounded-full after:bg-[url('/img/danielle-defilippis.png')] after:bg-cover after:bg-center after:content-[''] 
                after:absolute after:w-full after:h-full after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                after:-translate-y-1/2 mb-5"
              />
              <div className="font-medium mb-5">Danielle DeFilippis</div>
              <div className="font-medium mb-3 uppercase text-xs">Role</div>
              <div className="mb-5 text-xs">
                Attorney, Member, Co-Chair of IP
              </div>
            </div>
            <div class="col-span-10">
              <div className="grid grid-cols-2 gap-14 gap-y-10">
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    How you describe your company in a few sentences?
                  </div>
                  <p className="max-w-[20rem]">
                    We are a full service law firm providing counseling to
                    businesses of all sizes in a variety of industries. Our
                    attorneys assist with businesses in all stages of growth and
                    act as a partner in their development. With regional offices
                    and networks that include countries across the globe we are
                    uniquely positioned to service our clients on a global
                    scale.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    On NM existing website what doesn’t work well?
                  </div>
                  <p className="max-w-[25.625rem]">
                    I am not happy with the mobile site. I think it lacks
                    functionality when you are trying to access content and date
                    from a mobile device. Also the blog searching capabilities
                    are non-existing. You cannot search a past post using key
                    words.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    Who individually interest in the outcome of this project?
                  </div>
                  <p className="max-w-[20rem]">
                    All of the attorneys have an interest. The website is the
                    first place prospects go to get information about the firm
                    after meeting one of us individually or perhaps even before
                    then.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    What differentiates your company from your competitors?
                  </div>
                  <p className="max-w-[25.625rem]">
                    The various industries we service; the scope and depth of
                    industry knowledge; affordable rates; global networks of
                    colleagues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-10">
            <div class="col-span-2">
              <div
                className="w-[7.8125rem] h-[7.8125rem] bg-[#E3E5E8] rounded-full relative 
                after:rounded-full after:bg-[url('/img/jim-jarrell.png')] after:bg-cover after:bg-center after:content-[''] 
                after:absolute after:w-full after:h-full after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                after:-translate-y-1/2 mb-5"
              />
              <div className="font-medium mb-5">Jim Jarrell</div>
              <div className="font-medium mb-3 uppercase text-xs">Role</div>
              <div className="mb-5 text-xs">
                Chief Marketing & Business Development Officer
              </div>
            </div>
            <div class="col-span-10 mb-28">
              <div className="grid grid-cols-2 gap-14 gap-y-10">
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    How you describe your company in a few sentences?
                  </div>
                  <p className="max-w-[20rem]">
                    Norris McLaughlin, P.A., is a mid-sized, regional law firm
                    that serves the legal needs of businesses and families in
                    New Jersey, New York, and Pennsylvania. Norris McLaughlin is
                    uniquely positioned to represent a wide range of client
                    segments, including middle-market companies.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    On NM existing website what doesn’t work well?
                  </div>
                  <p className="max-w-[25.625rem]">
                    It's an old drupal site configured to word press using
                    plug-ins. It's a disaster.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    Who individually interest in the outcome of this project?
                  </div>
                  <p className="max-w-[20rem]">
                    Jim J., Bob G., Marketing Committee, Marketing Department,
                    Practice Group Leads, IT, HR, Recruiting (Attorney),
                    Finance/Accounting, Management Committee
                  </p>
                </div>
                <div>
                  <div className="font-medium underline underline-offset-4 mb-3">
                    What differentiates your company from your competitors?
                  </div>
                  <p className="max-w-[25.625rem]">
                    Our value proposition is based on the FACT that our
                    professionals have some of the same skills and experience as
                    attorneys who handle sophisticated legal work at Big Law
                    firms, but our clients benefit from that blue-chip legal
                    service without the Big Law invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <HeaderTitle>Discovery</HeaderTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
              <div className="flex">
                <DiscoveryPoint>
                  Attorneys rely on the website to be their point of sale when
                  advertising their services to the client. It is important for
                  the website to be designed align with the purpose.
                </DiscoveryPoint>
              </div>
              <div className="flex">
                <DiscoveryPoint>
                  Mobile experience needs to be improve and ensure the
                  accessibility for all content.
                </DiscoveryPoint>
              </div>
              <div className="flex">
                <DiscoveryPoint>
                  Norris McLaughlin is a big law firm that serve so many
                  different areas and different size of clients therefore their
                  website needs to look more competent, professional and stand
                  out among their competitor.
                </DiscoveryPoint>
              </div>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-12 mb-14">
            <div className="col-span-7">
              <HeaderTitle>Understanding Target Audience</HeaderTitle>
              <p className="max-w-[31.25rem]">
                There are reasons attributes to decision-making when people make
                a purchase, for instance between person who is visiting Amazon
                website and person who is visiting legal service website.{" "}
                <br></br>
                <br></br> People has a reason as to why they need a legal
                service. For ex : “ I need to apply a permit for my new
                restaurant” They have a problem to solve or a potential issue
                they might face. There’s “The need” which is the urge to solve a
                problem and “The keyword” which in this scenario would be the
                practice area.<br></br>
                <br></br> With that being said, understanding about the type of
                taget audience helped me to form a solid foundation in creating
                concept experience, organizing information architecture, and
                ultimately navigating what work best for NM website.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 col-span-5">
              <div>
                <ShoppingExperience className="mb-4" />
                <p className="text-center italic">Shopping experience</p>
              </div>
              <div>
                <SearchingForAttorney className="mb-4" />
                <p className="text-center italic">Searching for attorney</p>
              </div>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <HeaderTitle>Key Takeaway</HeaderTitle>
              <p className="max-w-[31.25rem]">
                After analyzing the discovery phase and synthesize the current
                website I came up with three prioritized issue that I discovered
                and plays a significant role in the overall experience ; Search
                feature, navigation, and attorney’s portfolio.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
            <div>
              <div className="font-medium mb-3 uppercase">
                Primary Searching Feature
              </div>
              <p className="max-w-[31.25rem]">
                When user visited NM website the primary task is to find
                attorney who serve the legal service they needed and whom
                practice on the location the are looking for. The current search
                feature on the website is barely noticeable and it doesn’t
                maximize its feature.
              </p>
            </div>
            <div>
              <div className="font-medium mb-3 uppercase">
                Poor User Journey
              </div>
              <p className="max-w-[31.25rem]">
                There are three primary users on NM website ; potential clients,
                lawyer and internal members. Each user has various different
                task to accomplish on the website. The current website shows a
                very complicated user journey, each user has no end to end
                direction to accomplish the task they wanted to do.
              </p>
            </div>
            <div>
              <div className="font-medium mb-3 uppercase">
                Lack of Information Architecture
              </div>
              <p className="max-w-[31.25rem]">
                NM website very rich with content such as lawyers profile,
                article, blog, events and podcast there are hundreds of post
                written by attorneys. All of these information are accessible
                for clients to read but unfortunately, the current website has
                no structured on information hierarchy and it caused all of the
                content has poor accessibility and some of them are hidden.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <HeaderTitle>#1 Searching Experience</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-20">
            <div>
              <p className="max-w-[31.25rem]">
                How do user find an attorney and information related problem
                they have? to answer this question I build a single scenario for
                user to visit the website and find an attorney. The concept was
                to create a systematic information where user will be navigated
                to a single-journey and have the ability to explore with content
                related to the practice area. I create user-flow to illustrating
                how user navigate on search feature.
              </p>
            </div>
            <div>
              <div className="text-3xl font-medium max-w-[45rem]">
                <img src="/img/cloud.png" className="w-[2.25rem] mb-4" />
                <p>
                  Think of it like a Google search, in a few keywords you get
                  results to the right attorney, articles, news, and related
                  events.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <SearchingExperienceMap />
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/norris-search-result.png"
              className="max-h-[40rem] rounded-lg"
            />
          </div>
        </section>
        <Seperator />
        <section>
          <HeaderTitle>#2 Attorney's Profile</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-16">
            <div>
              <p className="max-w-[31.25rem]">
                During the initial user research attorneys explained the role of
                the website to become a tool for them to showcase their profile,
                background, expertise, and content related to their experience.
                With the current design there are many content hidden on the
                website and has poor accessibility. These content plays
                significant role to be a touch-point for attorney to sale their
                service.<br></br>
                <br></br> Based on the discovery phase below is a map of needs
                and wants from attorney :
              </p>
            </div>
            <div>
              <div className="text-3xl font-medium max-w-[45rem]">
                <img src="/img/cloud.png" className="w-[2.25rem] mb-4" />
                <p>
                  The challenge is how to provide all information related to
                  David without requiring users to navigate between multiple
                  pages.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 mb-20 grid grid-cols-10 gap-x-14">
            <div className="col-span-2 flex justify-center items-center">
              <div className="bg-[#F8F8F8] py-6 px-6 flex flex-col justify-center items-center rounded-md">
                <div
                  className="w-[6.5625rem] h-[6.5625rem] bg-[#E3E5E8] rounded-full relative 
                after:rounded-full after:bg-[url('/img/danielle-defilippis.png')] after:bg-cover after:bg-center after:content-[''] 
                after:absolute after:w-full after:h-full after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 
                after:-translate-y-1/2 mb-4"
                />
                <p className="font-medium text-center text-sm">
                  Daniel DeFilippis is an attorney specialized in Divorce.
                </p>
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center">
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md mb-5 text-center w-full">
                I want potential client to know my achievement, profile, and
                background.
              </div>
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md mb-5 text-center w-full">
                I want client to know my service area
              </div>
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md text-center w-full">
                I want potential client to know that I have helped many
                immigration case
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center">
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md mb-5 text-center w-full">
                I want client able to read my article, post, and updates on the
                news regarding Immigration.
              </div>
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md mb-5 text-center w-full">
                I want client able to contact me
              </div>
              <div className="bg-[#F8F8F8] py-6 px-8 rounded-md text-center w-full">
                I want client to know that I served in NY and NJ
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <HeaderTitle>One Stop Shop Experience</HeaderTitle>
              <p className="max-w-[31.25rem]">
                After understanding their pain points and considering attorney’s
                needs and wants I created a designated space for attorney to
                showcase their portfolio and all content related to that
                attorney in one place. This allows users to access all related
                information without the need to jump between pages.
              </p>
            </div>
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/norris-search-result.png"
              className="max-h-[40rem] rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-10">
            <div className="bg-[#DEE9F8] px-10 pt-12 flex justify-center items-center">
              <img src="/img/norris-homepage-1.png" className="rounded-t-lg" />
            </div>
            <div className="bg-[#DEE9F8] px-10 pt-12 flex justify-center items-center">
              <img src="/img/norris-homepage-2.png" className="rounded-t-lg" />
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <HeaderTitle>#3 Simplify Navigation</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-16">
            <div>
              <p className="max-w-[31.25rem]">
                One of the main pain points identified was the complex
                navigation bar. There are too many focus point presented on the
                current navigation system. Having information is great but when
                it’s presented all at once it can derailed user from the primary
                task.
              </p>
            </div>
            <div>
              <div>
                <img src="/img/sprinkle.png" className="w-[1.875rem] mb-4" />
                <p className="text-3xl font-medium max-w-[31.25rem]">
                  The time it takes to make a decision increases with the number
                  and complexity of choices available -Hick’s law
                </p>
              </div>
            </div>
          </div>
          <img src="/img/norris-header.png" className="mb-16"></img>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-10">
            <p className="max-w-[31.25rem]">
              After reorganizing the entire links on the current website and how
              everything placed I’m able to eliminate some of the link on the
              primary navigation. The goal is to simplify the navigation to only
              what’s needed for user to access so that user can focus on the
              task to find an attorney and service they need.
            </p>
            <p className="max-w-[45rem]">
              User will be presented with few helpful links to accomodate in
              completing the task and a secondary navigation added for links
              with low-priority.
            </p>
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 grid grid-cols-12 gap-10 justify-items-center">
            <div className="col-span-12 lg:col-span-9">
              <img
                src="/img/norris-services-catalog-page.png"
                className="rounded-t-lg max-h-[25rem]"
              />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <img
                src="/img/norris-social-media.png"
                className="rounded-t-lg max-h-[17rem]"
              />
            </div>
          </div>
        </section>
        <Seperator />
        <section className="mb-24">
          <HeaderTitle className="mb-6">Cohesive Experience</HeaderTitle>
          <div className="flex justify-between mb-16 flex-col lg:flex-row gap-10">
            <p className="max-w-[31.25rem]">
              To ensure cohesive experience I designed the rest of the pages to
              align with design system and reorganizing the layout while
              maintaining readability and accessibility. Below screenshot for
              blog page, article, news, events, and presentation.
            </p>
            <div>
              <VisitButton url="https://norrismclaughlin.com/" />
            </div>
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/norris-asset-protection-page.png"
              className="max-h-[40rem] rounded-lg"
            />
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/norris-blog-page.png"
              className="max-h-[40rem] rounded-lg"
            />
          </div>
          <div className="bg-[#DEE9F8] px-14 py-16 flex justify-center items-center mb-10">
            <img
              src="/img/norris-services-page.png"
              className="max-h-[40rem] rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#DEE9F8] px-10 pt-12 flex justify-center items-center">
              <img src="/img/norris-news-page-1.png" className="rounded-t-lg" />
            </div>
            <div className="bg-[#DEE9F8] px-10 pt-12 flex justify-center items-center">
              <img src="/img/norris-news-page-2.png" className="rounded-t-lg" />
            </div>
          </div>
        </section>
        <section>
          <ReadNext
            imgName="homespace-homepage.png"
            imgCoverName="bg-cover-home-space.png"
            title="Home + Space"
            desc="Enhancing collaboration platform within the architectures industry"
            url="/work/home-space"
            imgClassName="lg:object-[50%_12%]"
          />
        </section>
      </div>
      <Footer />;
    </>
  );
}
