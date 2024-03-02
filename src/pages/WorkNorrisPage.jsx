import React from "react";
import Footer from "../components/Footer";
import VisitButton from "../components/VisitButton";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";

export default function WorkNorrisPage() {
  return (
    <>
      <div className="h-[45.9375rem] bg-[url('/img/norris-mclaughlin.png')] bg-cover mx-12 rounded-xl mb-16 mt-10">
        {/* src="/img/norris-mclaughlin.png"
        className="mx-12 w-100 h-[45.9375rem]" */}
      </div>
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
              <VisitButton />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <HeaderTitle>Role & Responsibilities</HeaderTitle>
              <p className="max-w-[40.625rem]">
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

              <p className="max-w-[40.625rem]">
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
              <p className="max-w-[40.625rem]">
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
                  <div className="font-medium underline mb-3">
                    How you describe your company in a few sentences?
                  </div>
                  <p className="max-w-[40.625rem]">
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
                  <div className="font-medium underline mb-3">
                    On NM existing website what doesn’t work well?
                  </div>
                  <p className="max-w-[40.625rem]">
                    I am not happy with the mobile site. I think it lacks
                    functionality when you are trying to access content and date
                    from a mobile device. Also the blog searching capabilities
                    are non-existing. You cannot search a past post using key
                    words.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline mb-3">
                    Who individually interest in the outcome of this project?
                  </div>
                  <p className="max-w-[40.625rem]">
                    All of the attorneys have an interest. The website is the
                    first place prospects go to get information about the firm
                    after meeting one of us individually or perhaps even before
                    then.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline mb-3">
                    What differentiates your company from your competitors?
                  </div>
                  <p className="max-w-[40.625rem]">
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
                  <div className="font-medium underline mb-3">
                    How you describe your company in a few sentences?
                  </div>
                  <p className="max-w-[40.625rem]">
                    Norris McLaughlin, P.A., is a mid-sized, regional law firm
                    that serves the legal needs of businesses and families in
                    New Jersey, New York, and Pennsylvania. Norris McLaughlin is
                    uniquely positioned to represent a wide range of client
                    segments, including middle-market companies.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline mb-3">
                    On NM existing website what doesn’t work well?
                  </div>
                  <p className="max-w-[40.625rem]">
                    It's an old drupal site configured to word press using
                    plug-ins. It's a disaster.
                  </p>
                </div>
                <div>
                  <div className="font-medium underline mb-3">
                    Who individually interest in the outcome of this project?
                  </div>
                  <p className="max-w-[40.625rem]">
                    Jim J., Bob G., Marketing Committee, Marketing Department,
                    Practice Group Leads, IT, HR, Recruiting (Attorney),
                    Finance/Accounting, Management Committee
                  </p>
                </div>
                <div>
                  <div className="font-medium underline mb-3">
                    What differentiates your company from your competitors?
                  </div>
                  <p className="max-w-[40.625rem]">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex">
                <div>
                  <div className="bg-black rounded-full h-2 w-2 mr-3 mt-1"></div>
                </div>
                <p>
                  Attorneys rely on the website to be their point of sale when
                  advertising their services to the client. It is important for
                  the website to be designed align with the purpose.
                </p>
              </div>
              <div className="flex">
                <div>
                  <div className="bg-black rounded-full h-2 w-2 mr-3 mt-1"></div>
                </div>
                <p>
                  Mobile experience needs to be improve and ensure the
                  accessibility for all content.
                </p>
              </div>
              <div className="flex">
                <div>
                  <div className="bg-black rounded-full h-2 w-2 mr-3 mt-1"></div>
                </div>
                <p>
                  Norris McLaughlin is a big law firm that serve so many
                  different areas and different size of clients therefore their
                  website needs to look more competent, professional and stand
                  out among their competitor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Seperator />
      </div>
      <Footer />;
    </>
  );
}
