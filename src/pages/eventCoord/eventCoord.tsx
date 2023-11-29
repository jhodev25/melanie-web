import { Button } from '@mui/material';

import { eventsFifteen, eventsFive, eventsFourteen, eventsMel, eventsNine, melHome } from 'assets/images';

export const EventCoordination = () => {
  return (
    <div className="w-auto h-auto">
      <h1>Event Coordination</h1>
      <div className="columns-2">
        <h2>LEAD EVENT COORDINATOR</h2>
        <h3>
          I spearheaded event planning initiatives in my role post-COVID-19 in 2021-2022. My responsibilities
          encompassed a wide range of events, with attendees ranging from 15 to 200, spanning both large-scale and
          intimate gatherings, hosted both at our dealership and various off-site locations.
        </h3>
        <h3>
          I was entrusted with significant autonomy, empowering me to drive creative direction and make strategic
          decisions in collaboration with our Marketing Director.
        </h3>
        <img src={eventsMel} alt="mel" />
      </div>
      <div className="h-auto">
        <h2 className="text-center">RESPONSIBILITIES</h2>
        <div className="columns-2">
          <div className="m-auto">
            <img src={eventsNine} alt="event space" />
          </div>
          <div className="h-fit bg-cyan-300">
            <h3>
              Proficiently designed presentation slides to propose event concepts, outline event details, and create
              floorplans, facilitating efficient planning and visualization.
            </h3>
            <Button>View Sample Deck</Button>
            {/* todo: add action to this button */}
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
        <h3>
          Developed comprehensive shot lists for photo and video content collection, optimizing media capture during
          events for effective documentation and future promotional material.
        </h3>
        <h3>
          Provided hands-on, on-site supervision during event setup and tear-down, contributing to the seamless
          execution of events while ensuring the accordance of facility guidelines and guest safety.
        </h3>
        <img src={eventsFifteen} alt="porsche store" />
      </div>
      <div className="columns-3">
        <img src={eventsFive} alt="cover" />
        <img src={melHome} alt="cover" />
        <img src={eventsFourteen} alt="cover" />
      </div>
      <div className="content-center bg-orange-400">
        <h3>
          During her time with Porsche Beaverton, I had the pleasure of partnering with Melanie in my role as Sales &
          Hospitality Manager at Domaine Divio in Oregon’s Willamette Valley. Her professional, responsive communication
          and thoughtful approach to reaching consumers made our partnership efficient and effective.
        </h3>
        <h3>
          She has an energizing positive attitude, and was attentive and organized when planning events representing our
          brands. I’m glad to have been able to work with her. If you are looking for someone who is capable and
          marketing focused to represent your company, Melanie is your person.
        </h3>
        <h2>Matthew Melito</h2>
        <h3>Sales & Hospitality Coordinator, Domaine Divio</h3>
      </div>
      <div>
        <h1>CHRONOLOGY OF EVENTS</h1>
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
