import { influencerSeven, melHome, projectsEventCoordination, projectsThree, projectsTwo } from 'assets/images';
import { ProjectCard } from 'components';

export const Projects = () => {
  return (
    <div className="flex-grow mt-16 bg-black">
      <h1 className="text-white bg-black font-title text-7xl h-fit pt-5 pl-5 pr-5">Projects</h1>
      <div className="h-full grid grid-cols-3 pb-24 bg-black">
        <ProjectCard
          imgSrc={projectsEventCoordination}
          eventTitle="Event Coordination"
          route="eventcoordination"
          timeline="2021-2022"
        />
        <ProjectCard
          imgSrc={projectsTwo}
          eventTitle="Social Media Management"
          route="socialmediamanagement"
          timeline="2020-2022"
        />
        <ProjectCard
          imgSrc={projectsThree}
          eventTitle="Partnership Marketing"
          route="partnershipmarketing"
          timeline="2020-2022"
        />
        <ProjectCard
          imgSrc={influencerSeven}
          eventTitle="Influencer Marketing"
          route="influencermarketing"
          timeline="2021"
        />
        <ProjectCard
          imgSrc={melHome}
          eventTitle="Marketing And Merchandising Internship"
          route="marketingmerchandisinginternship"
          timeline="2019"
        />
      </div>
    </div>
  );
};
