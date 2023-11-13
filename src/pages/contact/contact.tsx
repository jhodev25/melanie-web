import { melHome } from 'assets/images';

export const Contact = () => {
  return (
    <div className="w-auto h-auto columns-2">
      <div>
        <h1>Contact Me</h1>
        <h2>Location</h2>
        <h3>San Francisco Bay Area, California</h3>
        <h2>Phone</h2>
        <h3>(925) 523-9802</h3>
        <h2>Email</h2>
        <h3>NGAIMELANIE16@GMAIL.COM</h3>
        <h2>LinkedIn</h2>
        <h3>WWW.LINKEDIN.COM/IN/MELANIE-NGAI</h3>
      </div>
      <img src={melHome} alt="cover" />
    </div>
  );
};
