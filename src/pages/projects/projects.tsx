import { melHome } from 'assets/images';
import { ProjectCard } from 'components/lib/projectCard';

export const Projects = () => {
  return (
    <div>
      Projects
      <div className="grid grid-cols-3">
        <ProjectCard imgSrc={melHome} eventTitle="Social Media Management" timeline="2020-2022" />
        <ProjectCard imgSrc={melHome} eventTitle="Marketing and Merchandising Internship" timeline="2019" />
        <ProjectCard imgSrc={melHome} eventTitle="Influencer Marketing" timeline="2021" />
        <ProjectCard imgSrc={melHome} eventTitle="Partnership Marketing" timeline="2020-2022" />
        <ProjectCard imgSrc={melHome} eventTitle="IBP Audit" timeline="2020" />
        <ProjectCard imgSrc={melHome} eventTitle="Events" timeline="2022" />
      </div>
    </div>
  );
};
