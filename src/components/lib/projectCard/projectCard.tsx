import { Button } from '@mui/material';

import type { FC } from 'react';

interface Props {
  imgSrc: string;
  eventTitle: string;
  route: string;
  timeline: string;
}

export const ProjectCard: FC<Props> = (props) => {
  return (
    <div className="pl-2 pr-2 pt-10 flex flex-col justify-center items-left h-full">
      <img src={props.imgSrc} alt="projectPhoto" />
      <br />
      <div className="divide-y">
        <Button
          className="font-title text-2xl text-white"
          onClick={() => window.location.assign(`/${props.route}`)}
          variant="text"
        >
          {props.eventTitle}
        </Button>
        <h3 className="text-white font-title text-xl pt-1">{props.timeline}</h3>
      </div>
    </div>
  );
};
