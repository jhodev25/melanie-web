import { Button } from '@mui/material';
import { melHome } from 'assets/images';

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
        <img src={melHome} alt="cover" />
      </div>
      <div className="h-auto">
        <h2 className="text-center">RESPONSIBILITIES</h2>
        <div className="columns-2">
          <div className="m-auto">
            <img src={melHome} alt="cover" />
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
    </div>
  );
};
