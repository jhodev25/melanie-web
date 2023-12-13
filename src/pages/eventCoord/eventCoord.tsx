import { Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { eventsFifteen, eventsFive, eventsFourteen, eventsMel, eventsNine, melHome } from 'assets/images';

const RoundPaper = styled(Paper)(() => ({
  width: 500,
  height: 300,
  padding: 10,
}));

export const EventCoordination = () => {
  return (
    <div className="pl-5 pr-5 text-white bg-black">
      <h1 className="pt-5 font-title text-7xl">Event Coordination</h1>
      <div className="columns-2">
        <br />
        <h2 className="text-2xl font-subheading text-olive">LEAD EVENT COORDINATOR</h2>
        <br />
        <h3 className="text-base font-body">
          I spearheaded event planning initiatives in my role post-COVID-19 in 2021-2022. My responsibilities
          encompassed a wide range of events, with attendees ranging from 15 to 200, spanning both large-scale and
          intimate gatherings, hosted both at our dealership and various off-site locations.
        </h3>
        <br />
        <h3 className="text-base font-body">
          I was entrusted with significant autonomy, empowering me to drive creative direction and make strategic
          decisions in collaboration with our Marketing Director.
        </h3>
        <img src={eventsMel} alt="mel" />
      </div>
      <div className="h-auto p-3">
        <br />
        <h2 className="text-2xl text-center font-subheading text-olive">RESPONSIBILITIES</h2>
        <br />
        <div className="h-full columns-2">
          <div className="h-max">
            <img src={eventsNine} alt="event space" />
          </div>
          <div className="h-max">
            <h3 className="body">
              Proficiently designed presentation slides to propose event concepts, outline event details, and create
              floorplans, facilitating efficient planning and visualization.
            </h3>
            <br />
            <Button
              style={{ border: '2px solid olive', color: 'olive' }}
              variant="outlined"
              onClick={() => window.open('https://drive.google.com/drive/folders/1hOG_UHsVCb49_yR1UmTJzLaV2yA59P5s')}
            >
              View Sample Deck
            </Button>
            <br />
            <br />
            <h3>
              Acted as the central point of contact for partnership activities, liaising effectively with vendors and
              third-party collaborators throughout the event lifecycle, including planning, execution, and
              post-activation, demonstrating strong vendor and stakeholder management abilities.
            </h3>
            <br />
            <h3>
              Maintained meticulous and organized records, including invoices, budgeting documents, guest lists, RSVP
              information, and key performance metrics, ensuring efficient event coordination and financial oversight.
            </h3>
            <br />
            <h3>
              Expertly managed event timelines in collaboration with stakeholders, guaranteeing punctuality for
              important milestones, such as gifts, reservations, and deadlines, showcasing strong project management.
            </h3>
          </div>
        </div>
      </div>
      <br />
      <div className="columns-2">
        <h3 className="text-right">
          Developed comprehensive shot lists for photo and video content collection, optimizing media capture during
          events for effective documentation and future promotional material.
        </h3>
        <br />
        <h3 className="text-right">
          Provided hands-on, on-site supervision during event setup and tear-down, contributing to the seamless
          execution of events while ensuring the accordance of facility guidelines and guest safety.
        </h3>
        <img src={eventsFifteen} alt="porsche store" />
      </div>
      <br />
      <br />
      <div className="columns-3">
        <img src={eventsFive} alt="cover" />
        <img src={melHome} alt="cover" />
        <img src={eventsFourteen} alt="cover" />
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center w-screen h-full">
        <RoundPaper className="text-white font-body bg-olive">
          <h3>
            During her time with Porsche Beaverton, I had the pleasure of partnering with Melanie in my role as Sales &
            Hospitality Manager at Domaine Divio in Oregon’s Willamette Valley. Her professional, responsive
            communication and thoughtful approach to reaching consumers made our partnership efficient and effective.
          </h3>
          <br />
          <br />
          <h3>
            She has an energizing positive attitude, and was attentive and organized when planning events representing
            our brands. I’m glad to have been able to work with her. If you are looking for someone who is capable and
            marketing focused to represent your company, Melanie is your person.
          </h3>
        </RoundPaper>
        <br />
        <div>
          <h2 className="text-3xl text-right text-white">Matthew Melito</h2>
          <h3 className="text-right">Sales & Hospitality Coordinator, Domaine Divio</h3>
        </div>
      </div>
      <br />
      <br />
      <div className="pb-10">
        <h1 className="text-6xl text-center">CHRONOLOGY OF EVENTS</h1>
        <br />
        <div className="columns-2">
          <div>
            <h3>Cars and Coffee (5 events per Summer)</h3>
            <h3>Porsche Cup Golf Tournament</h3>
            <h3>Porsche Taycan Launch</h3>
            <h3>Domaine Serene Summer Car Classic</h3>
            <h3>Portland Charity Toy Drive and Car Meet</h3>
            <h3>Avants Portland Magazine Women's Day</h3>
            <h3>Sunset Imports Company Party</h3>
            <h3>Porsche Cup Golf Tournament</h3>
            <h3>Porsche + Pinot Client Application</h3>
            <h3>NW Passage Club Dinner</h3>
            <h3>VIP Client Coctail Hour</h3>
            <h3>Domaine Serene Summer Car Classic</h3>
          </div>
          <div className="text-end">
            <h3> Summer 2021/22</h3>
            <h3> June 2021</h3>
            <h3> July 2021</h3>
            <h3> August 2021</h3>
            <h3> December 2021</h3>
            <h3> March 2022</h3>
            <h3> May 2022</h3>
            <h3> May 2022</h3>
            <h3> May 2022</h3>
            <h3> June 2022</h3>
            <h3> June 2022</h3>
            <h3> August 2022</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
