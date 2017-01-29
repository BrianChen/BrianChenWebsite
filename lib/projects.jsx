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
            <h3 className="position">Full Stack Software Engineer, 2017</h3>
            <h3>New York, NY</h3>
            <p>Floorsurfing is a full-stack web application that was inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
