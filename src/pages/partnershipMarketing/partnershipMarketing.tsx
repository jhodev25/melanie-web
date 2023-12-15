import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InstagramEmbed } from 'react-social-media-embed';

import {
  partnershipThornsOne,
  partnershipThornsTwo,
  partnershipsNerlino,
  partnershipsOne,
  partnershipsTedxTwo,
  partnershipsTwo,
} from 'assets/images';

const RoundPaper = styled(Paper)(() => ({
  width: 550,
  height: 350,
  padding: 10,
}));

export const PartnershipMarketing = () => {
  return (
    <div>
      <div className="w-screen h-screen columns-2">
        <div className="flex flex-col justify-center w-full h-full p-10">
          <h1 className="text-7xl">Partnership Marketing</h1>
          <br />
          <h2 className="text-4xl">DESCRIPTION</h2>
          <br />
          <h3>
            I excelled in establishing and nurturing positive vendor relationships, encompassing a diverse range of
            partners, whether they were well-established or newly forged. My role prominently involved leading
            communication with organizations, charities, prominent restaurants, local wineries, and engaged community
            members who closely resonated with our brand and its core values.
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 h-1/2" src={partnershipsOne} alt="winery sign" />
          <br />
          <img className="w-1/2 h-1/2" src={partnershipsTwo} alt="cheese board" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl">RESPONSIBILITIES</h2>
        <br />
        <h3>
          Spearhead end-to-end agreement processes with third-party companies, vendors, and partners to enrich our brand
          and expand value for shared audiences, with a focus on vendor relations.
        </h3>
        <br />
        <h3>
          {`Revise creative designs and messaging for local sports sponsorships, encompassing LED boards, in-stadium video
          boards, concourse signage, print materials, digital, social, and premium giveaways in collaboration with
          Portland's MLS teams.`}
        </h3>
        <br />
        <h3>
          Develop compelling corporate sponsorship marketing materials that reflect both brand and partner essence while
          adhering to brand guidelines.
        </h3>
        <br />
        <h3>
          Ensure mutual obligations are met, encompassing tasks like logo collection, landing page creation, ad and
          email scheduling, and serving as the primary point of contact for partners.
        </h3>
        <br />
        <h3>
          Maintain meticulous records of all communications, contracts, invoices, and key performance indicators to
          track partnership success.
        </h3>
        <br />
        <h3>
          Collaborate with internal stakeholders to optimize partnerships in alignment with their needs, proposing
          strategic adjustments to partnership activities.
        </h3>
        <br />
        <h3>
          Play an active role in supporting event or campaign activations, including on-location and hybrid event
          sponsorships, to ensure seamless execution.
        </h3>
        <br />
      </div>
      <div className="flex columns-2">
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 h-1/2" src={partnershipThornsOne} alt="thorns mel" />
          <br />
          <img className="w-1/2 h-1/2" src={partnershipThornsTwo} alt="thorns field" />
        </div>
        <div className="flex-grow h-full p-10">
          <h2 className="text-4xl">OUTCOMES</h2>
          <br />
          <h3>
            {`Established a robust network of 12+ partners and trusted contacts within two years, amplifying the brand's
            local community reach and impact, with a strong focus on vendor relations.`}
          </h3>
          <br />
          <h3>
            Forged a enduring partnership agreement with a boutique winery, securing discounted rates for complimentary
            tasting vouchers for clients. This initiative generated goodwill for our company and provided direct
            business and brand exposure for the winery.
          </h3>
          <br />
          <h3>
            Effectively managed annual charity campaigns, orchestrating seamless omnichannel strategies that resulted in
            increased ticket sales, holiday toy donations, and the successful implementation of company matching
            programs.
          </h3>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center h-full">
        <RoundPaper className="text-white font-body bg-olive">
          <h3>
            Melanie was consistently responsive and engaging in her communication and collaboration as we shared
            creative vision and made design adjustments back and forth. She distinguished herself by creating an
            efficient and clear line of communication between the dealership and my company throughout this process.
          </h3>
          <br />
          <h3>
            Her involvement in my collaborative relationship with Porsche Beaverton has demonstrated her ability to come
            to a detailed understanding of effective marketing practices applied to various lifestyle and cultural
            demographics, and how to best analyze and engage with different consumer subgroups successfully.
          </h3>
          <br />
          <h3>
            She was a pleasure to work with and demonstrated a good sense of what it means to work effectively as a
            team.
          </h3>
        </RoundPaper>
        <br />
        <h2 className="text-3xl text-right text-white">Michael Nerlino</h2>
        <h3>Owner, Founder, Head Designer - Nerlino Bespoke</h3>
        <br />
        <img className="w-2/3 h-2/3" src={partnershipsNerlino} alt="porsche shoe" />
      </div>
      <br />
      <div className="text-center">
        <h2 className="text-5xl text-white">LIST OF PARTNERS</h2>
        <br />
        <h3>Domaine Serene</h3>
        <h3>Domaine Divio</h3>
        <h3>Urban Restaurant Group</h3>
        <h3>Portland Timbers FC</h3>
        <h3>Portland Thorns FC</h3>
        <h3>The Dougy Center</h3>
        <h3>Children&apos;ss Cancer Association</h3>
        <h3>Asante Foundation</h3>
        <h3>Portland Cars and Coffee</h3>
        <h3>Rosewild Designs</h3>
        <h3>TEDx Portland</h3>
        <h3>Nerlino Bespoke</h3>
      </div>
      <br />
      <div className="columns-2">
        <InstagramEmbed url="https://www.instagram.com/p/CeB587qJ7mK/?utm_source=ig_web_copy_link" width={328} />
        <img src={partnershipsTedxTwo} alt="mel mota" />
      </div>
    </div>
  );
};
