import { melHome } from 'assets/images';
import { ProjectCard } from 'components';

export const Projects = () => {
  return (
    <div>
      Projects
      <div className="grid grid-cols-3">
        <ProjectCard imgSrc={melHome} eventTitle="Event Coordination" route="eventcoordination" timeline="2021-2022" />
        <ProjectCard
          imgSrc={melHome}
          eventTitle="Social Media Management"
          route="socialmediamanagement"
          timeline="2020-2022"
        />
        <ProjectCard
          imgSrc={melHome}
          eventTitle="Partnership Marketing"
          route="partnershipmarketing"
          timeline="2020-2022"
        />
        <ProjectCard imgSrc={melHome} eventTitle="Influencer Marketing" route="influencermarketing" timeline="2021" />
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
