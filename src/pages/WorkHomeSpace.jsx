import React from "react";
import Footer from "../components/Footer";
import HeaderImage from "../components/HeaderImage";
import VisitButton from "../components/VisitButton";
import HeaderTitle from "../components/HeaderTitle";
import Seperator from "../components/Seperator";
import StartFromDiagram from "../assets/home-space-start-from-diagram.svg?react";
import UnderstandingCurrentDiagram from "../assets/home-space-understanding-current.svg?react";
import CurrentTaskFlowDiagram from "../assets/home-space-current-task-flow.svg?react";
import IdentificationDiagram from "../assets/home-space-identification-diagram.svg?react";
import SimplifiedTaskFlowDiagram from "../assets/home-space-task-flow-diagram.svg?react";
import PainPoint from "./page_components/homespace/PainPoint";
import ReadNext from "../components/ReadNext";
import PageMetadata from "../components/PageMetadata";

function getMobileImagePath(num) {
  return `/img/home-space-mobile-${num}.png`;
}

export default function WorkHomeSpace() {
  return (
    <>
      <PageMetadata
        title="Home + Space"
        desc="Enhancing collaboration platform within the architectures industry"
      />
      <HeaderImage
        imgCoverName="bg-cover-home-space.png"
        imgName="homespace-homepage.png"
        className="lg:object-[50%_20%]"
      />
      <div className="container">
        <section className="mb-10">
          <div className="flex justify-between mb-16">
            <div className="max-w-[40.625rem]">
              <p className="text-4xl font-medium mb-8">
                Home + Space is an architecture’s studio expertise in home
                renovation projects for bathroom and kitchen products
              </p>
              <p>
                Home + Space collaborate with architects and designers to
                provide expertise and products for renovations and new
                construction projects. The idea started when they needed a
                platform allowing them to collaborate more efficient and task
                can be done streams through the same platform.
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
                I work in a team of project manager and UX researcher, as a UX
                designer I’m responsible to be involve in sprint process ideate
                from concept to execution, deliver high-fidelity prototype as
                well as cross functional with stakeholders.
              </p>
            </div>
            <div>
              <HeaderTitle>Focus</HeaderTitle>
              <p className="max-w-[31.25rem]">
                Building MVP product with applicable streamline task-flow and to
                conceptualize a feasible interface allowing user to collaborate,
                communicate, and to accomplish their task effectively.
              </p>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <HeaderTitle>Start From Where We At</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-20">
            <div>
              <p className="max-w-[31.25rem]">
                From the first we worked closely with stakeholders who are
                eagerly to build the concept of collaboration platform. We
                identified there are three primary users who will be benefited
                from the platform; The lead architecture who act as project
                manager, collaborator which can be another architect or
                designer, and the client. In the rhythm of project the three
                users has their own role’s and in synchronized to achieve the
                same goal.
                <br /> <br /> Considering user’s needs and wants below are the
                situation they have been facing.
              </p>
            </div>
            <div>
              <div className="bg-black h-1 mb-3"></div>
              <p className="text-3xl font-medium max-w-[45rem]">
                As the project develops we identified a business opportunity to
                take this platform to the masses.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mb-20">
            <StartFromDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Understanding The Current Situation</HeaderTitle>
              <p className="max-w-[31.25rem]">
                After understanding the role for each user and how the tree user
                synchronize. We begin to identifying how the team initiate the
                project starting from being in touch with client until the final
                delivery. I took a note of each details and action needed to be
                done.
              </p>
            </div>
          </div>
          <div className="flex align-center justify-center mb-20">
            <UnderstandingCurrentDiagram />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Current Task Flow</HeaderTitle>
              <p className="max-w-[31.25rem]">
                Generating proposal is the very first action that has to be done
                in order to start the project. We asked the stakeholders to
                explain the current flow of generating proposal in a scenario of
                home owner who like to renovate their kitchen, from sending it
                to client until the flow is done. I draw diagram to understand
                their current user flow below.
              </p>
            </div>
          </div>
          <div className="flex align-center justify-center mb-20">
            <CurrentTaskFlowDiagram />
          </div>
          <div>
            <HeaderTitle>Painting The Paint Point</HeaderTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7 mb-8">
              <p className="max-w-[31.25rem]">
                Learning the current user flow and understanding their flow to
                generate proposal has helped me to understand the current
                problem they are facing on the system.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-7">
              <div className="flex max-w-[31.25rem]">
                <PainPoint>
                  To generate a single proposal the team has to utilized four
                  different subscribed software tools. The time that it took for
                  the team to generate the proposal and populate everything back
                  is inefficient.
                </PainPoint>
              </div>
              <div className="flex max-w-[31.25rem]">
                <PainPoint>
                  When client requested for additional or alternate item it
                  become a long-winded journey where team has to go back from
                  square one.
                </PainPoint>
              </div>
              <div className="flex max-w-[31.25rem]">
                <PainPoint>
                  Collaboration between architects and project manager is done
                  through scattered emails and calls. Communication management
                  done traditionally.
                </PainPoint>
              </div>
              <div className="flex max-w-[31.25rem]">
                <PainPoint>
                  With the current task-flow managing multiple projects become
                  very challenging and limit the capacity as well as
                  capabilities of the team.
                </PainPoint>
              </div>
            </div>
          </div>
        </section>
        <Seperator />
        <section>
          <HeaderTitle>Identify The Box to Fit In</HeaderTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-7 mb-20">
            <div>
              <p className="max-w-[31.25rem]">
                During the design sprint we completed card sorting session to
                determine what would be the priority feature implemented on the
                platform. We do this by evaluating and prioritizing the
                essential feature needed to get the project going ; milestone
                tracking, payment system, ordering systems, and vision board.
                <br />
                <br />
                We narrowed the focus to engagement
                between project owner and collaborator. I created feature-level
                restriction, where the main primary user, project owner has all
                feature access and collaborator in a second perimeter on feature
                access.
              </p>
            </div>
            <div>
              <div className="bg-black h-1 mb-3"></div>
              <p className="text-3xl font-medium max-w-[45rem]">
                How might we make users to collaborate effectively in a single
                platform?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <IdentificationDiagram />
          </div>
        </section>
        <Seperator />
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Simplifying Task Flow</HeaderTitle>
              <p className="max-w-[31.25rem]">
                With the vision to have one space for all I created a simpler
                task flow where project manager can initiate new project and
                have the collaboration happen within the same designated space,
                by doing this multiple project can be easily manage and monitor
                at the same time.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mb-20">
            <SimplifiedTaskFlowDiagram />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-14">
            <div>
              <HeaderTitle>Integrating Mental Model on Interface</HeaderTitle>
              <p className="max-w-[31.25rem]">
                I aimed to designed a feasible platform that can reduce user’s
                cognitive load. The final product interface has to be simple,
                better, and has a sense of familiarity to replace the tool they
                have used previously. In order to have a blueprint I
                conceptualized the dashboard by studying their file material
                such as proposal, quote to client, as well as learning the
                interaction with the platform they used for the project. Below are multiple 
                screenshots of platform they used to create a proposal.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 mb-20 gap-5">
            <div className="col-span-4">
              <img src="/img/home-space-old-design-1.png" className="mb-5" />
              <img src="/img/home-space-old-design-2.png" />
            </div>
            <div className="col-span-2">
              <img src="/img/home-space-old-design-3.png" />
            </div>
            <div className="col-span-4">
              <img src="/img/home-space-old-design-4.png" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Dashboard</HeaderTitle>
              <p className="max-w-[31.25rem]">
                The home dashboard is designed for users to view and track all their projects. 
                This screen displays critical information and offers features that assist users 
                in editing or monitoring their projects. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
            <div>
              <p className="max-w-[31.25rem]">
                To streamline this process, I organized the information into six multi-level 
                tabs, allowing users to access each tab and perform specific functions. 
                The tabs are designed and curated based on the task flow of project managers, 
                enabling them to track project progress and apply necessary tasks efficiently.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 flex justify-center items-center mb-20">
            <img
              src="/img/home-space-project-details.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 flex justify-center items-center mb-20">
            <img
              src="/img/home-space-status-page.png"
              className="rounded-lg max-h-[19.375rem] w-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Create profile</HeaderTitle>
              <p className="max-w-[31.25rem]">
                The first touchpoint with the system is the user registration and sign-up process. 
                By filling out the form, users will be considered part of the team and invited to create a project.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img
              src="/img/home-space-vision-board-1.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
            <img
              src="/img/home-space-vision-board-2.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Vision Board</HeaderTitle>
              <p className="max-w-[31.25rem]">
                During the discovery phase, we identified a crucial feature of the platform: the vision 
                board, which facilitates collaboration between architects and project managers. 
                Similar to a mood board, the vision board allows architects to create and 
                collect inspiration in one space. They can also invite team members and project 
                managers to collaborate. Users have the ability to upload, view, comment on, 
                and delete content, enhancing their interactive experience.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img
              src="/img/home-space-vision-board-3.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
            <img
              src="/img/home-space-vision-board-4.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Product Catalog</HeaderTitle>
              <p className="max-w-[31.25rem]">
                To replace the traditional book product catalog, I designed screens that enable the team to input a product database. 
                As a result, users can easily add products to any project. Additionally, users have the flexibility 
                to add product images, write descriptions, and remove products.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img
              src="/img/home-space-product-catalog-1.png"
              className="rounded-t-lg max-h-[37.5rem] w-full mt-auto"
            />
            <div className="grid grid-cols-1 gap-5 py-16">
              <img
                src="/img/home-space-product-catalog-2.png"
                className="rounded-lg max-h-[18.75rem] w-full object-cover object-center"
              />
              <img
                src="/img/home-space-product-catalog-3.png"
                className="rounded-lg max-h-[18.75rem] w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Messaging System</HeaderTitle>
              <p className="max-w-[31.25rem]">
                A streamline messaging system embedded in the platform for user
                to communicate. User allowed to select project intended on the
                conversation to track and monitor the message seamlessly.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img
              src="/img/home-space-messaging-system-1.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
            <img
              src="/img/home-space-messaging-system-2.png"
              className="rounded-lg max-h-[25rem] w-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-14">
            <div>
              <HeaderTitle>Mobile Platform</HeaderTitle>
              <p className="max-w-[31.25rem]">
                To have a fully function experience I designed adaptive mobile
                versions. Users able to effectively perform task through mobile
                and work on project. I adapted the design from desktop and
                utilizing drop down to ensure feasibility on the experience.
              </p>
            </div>
          </div>
          <div className="bg-[#D6DAE2] px-14 py-16 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 content-center justify-center justify-items-center">
            {[...Array(10).keys()].map((val) => (
              <img
                src={`${getMobileImagePath(val + 1)}`}
                className="md:h-[28rem] md:object-cover md:object-top w-full rounded-lg"
              />
            ))}
          </div>
        </section>
        <section>
          <ReadNext
            imgName="platforme-homepage-cover.png"
            imgCoverName="bg-cover-platforme.png"
            title="Platforme 6610"
            desc="Designing bilingual platform dedicated to wellness community
                  center"
            url="/work/platforme-6610"
            imgClassName="lg:object-[50%_35%]"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
