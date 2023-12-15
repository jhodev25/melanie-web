import { InstagramEmbed } from 'react-social-media-embed';

import { influencerFour, influencerOne, influencerSeven } from 'assets/images';

export const InfluencerMarketing = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex columns-2 p-10">
        <div className="flex flex-col w-full h-full">
          <img className="w-3/4 h-3/4" src={influencerOne} alt="cover" />
          <img className="w-3/4 h-3/4" src={influencerSeven} alt="cover" />
        </div>
        <div className="flex-grow w-full h-full">
          <h1 className="text-7xl">INFLUENCER MARKETING</h1>
          <br />
          <h2 className="text-4xl">DESCRIPTION</h2>
          <br />
          <h3>
            {`Pioneered the launch of the company's first influencer partnership campaigns, orchestrating impactful
            marketing campaigns with two prominent local social media influencers.`}
          </h3>
          <br />
          <h3>
            These campaigns featured collaborative content posts on Instagram and introduced a successful giveaway
            component.
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-screen h-screen bg-black">
        <h2 className="text-5xl">RESPONSIBILITIES</h2>
        <br />
        <h3>
          Conducted thorough research to identify influencers who aligned with brand values and catered to the newly
          acquired target markets.
        </h3>
        <br />
        <h3>
          Crafted and revised proposals, ensuring a mutual understanding of deliverables, campaign terms, and financial
          compensation between influencers and the brand.
        </h3>
        <br />
        <h3>
          Created comprehensive copy and social post guidelines to ensure alignment between influencers and the brand,
          with all content coordinated and approved via a shared calendar.
        </h3>
        <br />
        <h3>
          Managed invoices, expenses, and key performance indicators, tracking metrics like impressions, average likes,
          giveaway entries, and follower growth.
        </h3>
        <br />
        <h3>
          Fostered relationships with local businesses and vendors to coordinate giveaway prizes, establishing trust and
          goodwill with valued brands.
        </h3>
        <br />
        <h3>
          Generated a detailed report summarizing the end-to-end planning and execution of the campaign, including a
          project summary, KPI report, and post-activation summary.
        </h3>
      </div>
      <div className="columns-2 w-auto h-auto p-10 bg-black">
        <div>
          <h2 className="text-5xl">OUTCOMES</h2>
          <br />
          <h3>
            {`Grew the brand's social following by 500+ during both campaigns, initiating a steady overall increase in the
            following months.`}
          </h3>
          <br />
          <h3>
            {`Increased engagement and impression rates, enhancing the brand's online presence and interaction with the
            audience.`}
          </h3>
          <br />
          <h3>
            Established long-lasting partnerships with local businesses, some of which evolved into valuable corporate
            collaborations.
          </h3>
          <br />
          <h3>
            Recognized by Porsche North America for creating the best post- activation summary and overall comprehensive
            report, underscoring the high quality and effectiveness of the campaign.
          </h3>
        </div>
        <img src={influencerFour} alt="cover" />
      </div>
      <div className="columns-2 bg-black">
        <img src={influencerSeven} alt="cover" />
        <InstagramEmbed url="https://www.instagram.com/reel/CisuqjbtiIJ/?utm_source=ig_web_copy_link" width={328} />
      </div>
    </div>
  );
};
