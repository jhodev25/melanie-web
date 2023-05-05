import { Button } from '@mui/material';

import { melHome } from 'assets/images';
import { Menu } from 'components/lib/menu/menu';

export const Home = () => {
  return (
    <div className="w-auto h-screen bg-beige columns-2">
      <img src={melHome} alt="cover" />
      <div>
        <Menu />
        <h1 className="font-title text-9xl">Melanie Ngai</h1>
        <br />
        <h2 className="font-title text-3xl">Marketing | Partnerships | Event Coordination</h2>
        <h2 className="font-title text-3xl">Based in San Francisco, California</h2>
        <Button className="bg-olive" variant="contained">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
