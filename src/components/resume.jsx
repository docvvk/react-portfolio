import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Social } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";

// import Education from "./education";
// import Experience from "./experience";
// import Skills from "./skills";
// import Text from './Text';
import Card from "./Card";

class Resume extends Component {
  render() {
    return (
      // <div className="App">
      //         <Hero
      // opacity={1}
      // overlayColor="#373D45"
      // particlesSugar="crazyStars"
      // height="100%"

      // >
      <div className="container">
        <Grid>
          <Cell col={3}>
            <Card />
          </Cell>
          <Cell col={2} />
          <Cell className="text" col={7}>
            <h2 className="badge-dark jello-horizontal">INTRO</h2>
            <p className="text-1 fade-in">
              HI I AM VIVEK, I LOVE TO CODE AND BUILD AWESOME THINGS WITH CODE!
              <br />
              <br />
              <strong>YOU CAN SEE ME IN TORONTO</strong>
            </p>
            <Grid>
              <Cell col={3}>
            <Social type="facebook" rounded url="https://front10.com" />

              </Cell>
            </Grid>



            {/* <p className='text-1'>.</p> */}
            {/* Creative Full Stack developer with focus on front-end development.
              I specialize in JavaScript and Object Oriented Programming and
              have hands on experience working with MERN Stack (MongoDB,
              Express, React, NodeJS) for entire feature life cycle. */}
          </Cell>
        </Grid>
        {/* <Grid>
          <Cell className="ui floating message" col={12}>
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={70} />
            <Skills skill={"JavaScript"} progress={70} />
            <Skills skill={"NodeJS"} progress={70} />
            <Skills skill={"React"} progress={60} />
            
          </Cell>
        </Grid> */}
      </div>

      // </Hero>

      // </div>
    );
  }
}

export default Resume;
