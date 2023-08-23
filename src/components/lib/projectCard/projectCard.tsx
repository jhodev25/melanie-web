import type { FC } from 'react';

interface Props {
  imgSrc: string;
  eventTitle: string;
  timeline: string;
}

export const ProjectCard: FC<Props> = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt="projectPhoto" />
      <br />
      <div className="divide-y">
        <h1 className="font-medium text-3xl underline-offset-1">{props.eventTitle}</h1>
        <h3>{props.timeline}</h3>
      </div>
    </div>
  );
};
