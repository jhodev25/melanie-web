import { melHome } from 'assets/images';

export const SocialMediaManagement = () => {
  return (
    <>
      <div className="bg-beige">
        <h1 className="font-title text-9xl">Social Media Management</h1>
        <div className="grid grid-cols-2">
          <div>
            <img src={melHome} alt="mel home" />
          </div>
          <div className="m-auto">
            <h2>Description</h2>
            <h3>
              I was the manager of our brands’ two social accounts @porschebeaverton and @audibeaverton, optimizing our
              Facebook and Instagram strategy, engagement, and analytics.
            </h3>
            <br />
            <h3>
              Additionally, I oversaw our Google Business page, and other online customer review platforms, such as
              DealerRater, Google Reviews, and Yelp.
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-olive h-screen">
        <br />
        <h2 className="font-title text-5xl text-white text-center">Responsibilities</h2>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Collected and posted daily photo, video, and story content that best reflected inventory, promotions, or
          events while ensuring brand integrity and alignment.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Responded and engaged with community members and customers across multiple channels, giving personalized
          responses that accurately addressed both positive and negative feedback; worked with managers of each
          department to reach conflict resolution as needed.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Curated thoughtful and personalized responses to customer reviews, collaborating with department managers to
          accurately investigate any dissatisfaction and reach amiable conclusions for all parties.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Analyzed trends, KPIs, and promotion schedule to determine best strategy for current and upcoming social
          account goals.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Utilized software tools such as Later, Linktree, Adobe Photoshop, UTM links, and other platforms to aide in
          content production and delivery.
        </h3>
      </div>
      <div className="bg-beige h-screen">
        <div className="grid grid-cols-2">
          <div className="m-auto">
            <h2 className="text-olive">Outcomes</h2>
            <h3 className="text-olive">
              Used organic growth methods to reach 25k+ followers from a consistent posting schedule and creating
              content that captivated social following, community members, and potential customers.
            </h3>
            <h3 className="text-olive">
              Created Instagram posts and reels with average of 10k impressions and over 1M+ views using curated hashtag
              strategies, account tagging, and engagement.
            </h3>
            <h3 className="text-olive">
              Develop engaging local community of enthusiasts and customers, who are keen to respond to events,
              promotions, and current inventory reveals.
            </h3>
            <h3 className="text-olive">
              Implement Call to Action in social strategy by creating streamlined process for bringing customers back to
              our website via Linktree, leading prospective customers to shop directly on website.
            </h3>
          </div>
          <div>
            <img src={melHome} alt="melHome" />
          </div>
        </div>
      </div>
    </>
  );
};
