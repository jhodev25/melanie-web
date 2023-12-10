import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { FC } from 'react';

interface Props {
  body: string;
}

const RoundPaper = styled(Paper)(() => ({
  width: 500,
  height: 300,
  padding: 15,
}));

export const RoundedPaper: FC<Props> = (props) => {
  return (
    <RoundPaper className="font-body bg-olive text-white">
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </RoundPaper>
  );
};
