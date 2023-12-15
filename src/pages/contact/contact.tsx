import { melHome } from 'assets/images';

export const Contact = () => {
  return (
    <div className="w-auto h-auto columns-2 p-10">
      <div className="">
        <h1 className="text-7xl">Contact Me</h1>
        <br />
        <br />
        <h2 className="text-5xl">Location</h2>
        <h3>San Francisco Bay Area, California</h3>
        <br />
        <h2 className="text-5xl">Phone</h2>
        <h3>(925) 523-9802</h3>
        <h2 className="text-5xl">Email</h2>
        <h3>NGAIMELANIE16@GMAIL.COM</h3>
        <br />
        <h2 className="text-5xl">LinkedIn</h2>
        <h3>WWW.LINKEDIN.COM/IN/MELANIE-NGAI</h3>
      </div>
      <img src={melHome} alt="cover" />
    </div>
  );
};
