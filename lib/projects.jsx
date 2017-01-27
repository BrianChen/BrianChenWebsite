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
          <div>
            <h1>Floorsurfing</h1>
            <span>Full stack engineer, 2017</span>
            <span>New York, NY</span>
            <p>Floorsurfing is a full-stack web application that was inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
