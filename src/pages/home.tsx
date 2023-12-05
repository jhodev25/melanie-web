import { Button } from '@mui/material';

import { melHome } from 'assets/images';

export const Home = () => {
  return (
    <div className="w-auto h-auto bg-black text-white columns-2">
      <div className="flex h-screen items-center justify-center">
        <img src={melHome} alt="cover" />
      </div>
      <div className="h-screen flex flex-col justify-center items-left relative">
        <h1 className="font-title text-9xl">Melanie Ngai</h1>
        <br />
        <h2 className="font-title text-3xl">Marketing | Event Coordination</h2>
        <h2 className="font-title text-3xl">Based In San Francisco, California</h2>
        <br />
        <Button className="bg-olive w-fit" onClick={() => window.location.assign('/contact')} variant="contained">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
