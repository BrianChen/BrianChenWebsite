import React from 'react';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';

class experience extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="experience" className="sections">
        <h1 className="section-title">Experience</h1>
        <div className="experience-content">
          <Timeline className="timeline">
            <TimelineEvent title="University at Buffalo"
              createdAt="2016-09-12 10:06 PM"
            >
              Graduated from ub.
            </TimelineEvent>
            <TimelineBlip>
              Worked here.
            </TimelineBlip>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default experience;
