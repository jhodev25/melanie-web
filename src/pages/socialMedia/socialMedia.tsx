import { socialOne, socialTwo } from 'assets/images';

export const SocialMediaManagement = () => {
  return (
    <>
      <div className="bg-black">
        <div className="grid grid-cols-2">
          <div>
            <img src={socialOne} alt="mel home" />
          </div>
          <div className="m-auto">
            <h1 className="font-title text-9xl">Social Media Management</h1>
            <h2>Description</h2>
            <h3>
              I led the management of our two flagship social media accounts, primarily focusing on building and
              enhancing our content strategy, igniting engagement, and diligently analyzing performance on Facebook and
              Instagram.
            </h3>
            <br />
            <h3>
              In tandem with my social media endeavors, I also took charge of our Google Business page and online review
              platforms, ensuring that our digital footprint remained strong and impactful. These experiences have
              fortified my foundation in digital and social media marketing while emphasizing my commitment to
              continuous growth in these dynamic and ever-evolving domains.
            </h3>
          </div>
          <br />
        </div>
      </div>
      <div className="bg-olive h-auto">
        <br />
        <h2 className="font-title text-5xl text-white text-center">Responsibilities</h2>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Developed and executed content strategies for daily posts, including photos, videos, and stories, maintaining
          brand integrity.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Engaged with the online community, providing personalized responses to both positive and negative feedback,
          working with department managers when conflicts arose.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Curated thoughtful and personalized responses to customer reviews, collaborating with department managers to
          accurately investigate any dissatisfaction and reach amiable conclusions for all parties.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Managed customer reviews, collaborating with department heads to address issues and ensure customer
          satisfaction.
        </h3>
        <br />
        <h3 className="font-title text-3xl text-white text-center">
          Analyzed trends, KPIs, and promotional schedules to optimize social media strategies. Utilized digital tools
          like Later, Linktree, Adobe Photoshop, and UTM links to streamline content production and delivery.
        </h3>
        <br />
      </div>
      <div className="bg-beige h-auto">
        <div className="grid grid-cols-2">
          <div className="m-auto">
            <h2 className="text-olive">Outcomes</h2>
            <br />
            <h3 className="text-olive">
              Utilized organic growth techniques to amass a follower base exceeding 25,000, employing consistent posting
              schedules and content that captured the interest of our social following, community members, and potential
              customers.
            </h3>
            <br />
            <h3 className="text-olive">
              Achieved remarkable engagement on Instagram, with our posts and reels consistently garnering an average of
              10,000 impressions and amassing over 1 million views. This was made possible through the skillful use of
              curated hashtags, account tagging, and active engagement.
            </h3>
            <br />
            <h3 className="text-olive">
              Cultivated a vibrant local community of enthusiasts and customers, fostering their eagerness to
              participate in events, promotions, and inventory reveals, nurturing a sense of community and loyalty.
            </h3>
            <br />
            <h3 className="text-olive">
              Successfully integrated a Call to Action in our social media strategy by creating a streamlined pathway
              through Linktree. This initiative effectively directed potential customers to our website, resulting in
              increased web traffic and facilitating a seamless shopping experience for our customers.
            </h3>
            <br />
          </div>
          <div>
            <img src={socialTwo} alt="wine glass" />
          </div>
        </div>
      </div>
    </>
  );
};
