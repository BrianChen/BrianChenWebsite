import React from 'react';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about" className="sections">
        <h1>My journey as a Software Engineer</h1>
        <div className="about-content">
          <p>I graduated from University at Buffalo with an Electrical Engineering degree.  After graduating I got a job as a Technical Support Engineer for a enterprise start up to learn more about software all while teaching myself programming such as Ruby and JavaScript.</p>

          <p>After working for a year, I decided to purse software development full time.  I attended App Academy, an intensive coding school.</p>

          <p>I enjoy working on challenging projects that gives me a chance to use what I have learned as well as diving into new technologies. I developed application that utilizes technologies such as Ruby on Rails, React-Redux, React Native and different databases. Some of these projects are shown below.</p>
        </div>
      </div>
    );
  }
}

export default About;
