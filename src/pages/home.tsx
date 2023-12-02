import { Button } from '@mui/material';

import { melHome } from 'assets/images';

export const Home = () => {
  return (
    <div className="w-auto h-screen bg-black text-white columns-2">
      <img src={melHome} alt="cover" />
      <div>
        <h1 className="font-title text-9xl">Melanie Ngai</h1>
        <br />
        <h2 className="font-title text-3xl">Marketing | Event Coordination</h2>
        <h2 className="font-title text-3xl">Based In San Francisco, California</h2>
        <Button className="bg-olive" onClick={() => window.location.assign('/contact')} variant="contained">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
