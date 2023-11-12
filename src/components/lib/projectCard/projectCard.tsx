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
    <div>
      <img src={props.imgSrc} alt="projectPhoto" />
      <br />
      <div className="divide-y">
        <Button onClick={() => window.location.assign(`/${props.route}`)} variant="text">
          {props.eventTitle}
        </Button>
        <h3>{props.timeline}</h3>
      </div>
    </div>
  );
};
