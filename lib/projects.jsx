import React from 'react';

class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="projects">
        <h1>Bringing ideas to life</h1>
        <div className="single-project">
          <img className="img-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485547205/Splash_h4xwtc.png"></img>
          <div className="single-project-info">
            <h2><a href="http://www.floorsurfing.com">Floorsurfing</a></h2>
            <h3 className="technology">JavaScript, React, Ruby on Rails</h3>
            <p>Floorsurfing is a full-stack web application that was inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.</p>
          </div>
        </div>
        <div className="single-project">
          <img className="img-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485836137/Timeline-alt_becmvc.png"></img>
          <div className="single-project-info">
            <h2><a href="https://appetize.io/app/yc4q39f93rw4748dpuhumudgk4?device=iphone6s&scale=75&orientation=portrait&osVersion=9.3">Timeline</a></h2>
            <h3 className="technology">React Native, JavaScript, Firebase</h3>
            <p>Timeline is journal/diary application that allows users to record, delete and edit existing entries. The data is securely persisted onto a cloud base database. Timeline was implemented with React Native for component rendering and Firebase as the database.</p>
          </div>
        </div>
        <div className="single-project">
          <img className="img-logo" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485836938/SpaceInvaders-logo_zxxwed.png"></img>
          <div className="single-project-info">
            <h2><a href="https://brianchen.github.io/Space-Invaders/">Space Invaders</a></h2>
            <h3 className="technology">JavaScript, jQuery, CreateJS</h3>
            <p>Space Invaders is a Japanese shooting video game released in 1978 by Taito. It became a huge success after it's release and has had many updates and remake since then. I implemented this using the same mechanics to provide that original feel to the game.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
