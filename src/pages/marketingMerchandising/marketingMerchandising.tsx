import { internship, melHome } from 'assets/images';

export const MarketingMerchandising = () => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="pt-10 pl-10 text-7xl text-left">MARKETING + MERCHANDISING INTERNSHIP</h1>
        <div className="flex columns-2 p-10 w-screen">
          <img className="flex flex-col h-2/3 w-2/3" src={internship} alt="cover" />
          <div className="flex-grow h-full p-5">
            <h2 className="text-5xl">DESCRIPTION</h2>
            <br />
            <h3>
              During the summer of 2019, I had the privilege of interning at Chamber Music Northwest, a non- profit
              musical performance organization.
            </h3>
            <br />
            <h3>
              In my role as the Marketing and Merchandising Intern, I took charge of merchandising and sales.
              Additionally, I had the opportunity to observe and learn various marketing aspects within the unique
              context of a non-profit organization.
            </h3>
          </div>
        </div>
      </div>
      <div className="text-center h-full">
        <h2 className="text-5xl">RESPONSIBILITIES</h2>
        <br />
        <h3>
          {`Researched market trends and the target audience to select merchandise items in alignment with the festival's
          brand identity.`}
        </h3>
        <br />
        <h3>Managed the budget for merchandise development, ensuring profitability and quality.</h3>
        <br />
        <h3>
          Established and maintained relationships with multiple vendors, overseeing timelines and price negotiations.
        </h3>
        <br />
        <h3>
          Created visually appealing table displays at nightly concerts, adjusting merchandise arrangements as needed.
        </h3>
        <br />
        <h3>Utilized Adobe Photoshop for festival signage and photo editing.</h3>
        <br />
        <h3>Developed Microsoft Excel systems for inventory management, sales reports, and post- festival analysis.</h3>
      </div>
      <br />
      <div className="columns-2 p-5">
        <h2 className="text-5xl">OUTCOMES</h2>
        <br />
        <h3>
          {`Exceeded sales goals by an 75% and net profit goals by a 48% through the success of a popular merchandise
          line, actively contributing to the festival's success.`}
        </h3>
        <br />
        <h3>
          Executed excellent time management within a tight 3-week timeframe for merchandise research and design,
          ordering, and quality assurance.
        </h3>
        <br />
        <h3>
          Developed an efficient Excel system for accurate cost tracking and inventory management, actively facilitating
          the smooth operation of festival activities.
        </h3>
        <br />
        <h3>
          Created templates for future interns, actively contributing to their success in managing festival merchandise
          and reporting systems.
        </h3>
        <br />
        <h3>
          Acted as a Brand Ambassador, actively engaging with festival patrons and representing the brand at an intimate
          level during events.
        </h3>
        <img src={melHome} alt="cover" />
      </div>
    </div>
  );
};
