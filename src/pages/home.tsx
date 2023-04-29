import { melHome } from 'assets/images';

export const Home = () => {
  return (
    <div className="w-auto h-screen bg-beige columns-2">
      <h1 className="font-title text-9xl">Home</h1>
      <img src={melHome} alt="cover" />
      <h1 className="font-title text-9xl">Melanie Ngai</h1>
    </div>
  );
};
