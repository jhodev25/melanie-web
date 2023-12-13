import { influencerFour, influencerOne, influencerSeven, influencerThree, melHome } from 'assets/images';

export const InfluencerMarketing = () => {
  return (
    <div className="w-auto h-auto">
      <div className="columns-2 bg-red-300">
        <div>
          <img src={influencerOne} alt="cover" />
          <img src={influencerSeven} alt="cover" />
        </div>
        <div>
          <h1>INFLUENCER MARKETING</h1>
          <h2>DESCRIPTION</h2>
          <h3>
            Pioneered the launch of the company's first influencer partnership campaigns, orchestrating impactful
            marketing campaigns with two prominent local social media influencers.
          </h3>
          <h3>
            These campaigns featured collaborative content posts on Instagram and introduced a successful giveaway
            component.
          </h3>
        </div>
      </div>
      <div className="text-center">
        <h2>RESPONSIBILITIES</h2>
        <h3>
          Conducted thorough research to identify influencers who aligned with brand values and catered to the newly
          acquired target markets.
        </h3>
        <h3>
          Crafted and revised proposals, ensuring a mutual understanding of deliverables, campaign terms, and financial
          compensation between influencers and the brand.
        </h3>
        <h3>
          Created comprehensive copy and social post guidelines to ensure alignment between influencers and the brand,
          with all content coordinated and approved via a shared calendar.
        </h3>
        <h3>
          Managed invoices, expenses, and key performance indicators, tracking metrics like impressions, average likes,
          giveaway entries, and follower growth.
        </h3>
        <h3>
          Fostered relationships with local businesses and vendors to coordinate giveaway prizes, establishing trust and
          goodwill with valued brands.
        </h3>
        <h3>
          Generated a detailed report summarizing the end-to-end planning and execution of the campaign, including a
          project summary, KPI report, and post-activation summary.
        </h3>
      </div>
      <br />
      <div className="columns-2">
        <div>
          <h3>
            Grew the brand's social following by 500+ during both campaigns, initiating a steady overall increase in the
            following months.
          </h3>
          <h3>
            Increased engagement and impression rates, enhancing the brand's online presence and interaction with the
            audience.
          </h3>
          <h3>
            Established long-lasting partnerships with local businesses, some of which evolved into valuable corporate
            collaborations.
          </h3>
          <h3>
            Recognized by Porsche North America for creating the best post- activation summary and overall comprehensive
            report, underscoring the high quality and effectiveness of the campaign.
          </h3>
        </div>
        <img src={influencerFour} alt="cover" />
      </div>
      <div className="columns-2">
        <img src={influencerSeven} alt="cover" />
        <img src={influencerThree} alt="cover" />
      </div>
    </div>
  );
};
