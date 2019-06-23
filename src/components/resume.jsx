import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import { Accordion, Button, Card } from 'react-bootstrap';
import { Hero } from "@front10/landing-page-book/dist/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/themes/default/index.css";

import AccordionFinal from "./Accordion/index";

// import Education from "./education";
// import Experience from "./experience";
// import Skills from "./skills";
// import Text from './Text';
import CardImage from "./contactPage/cardImage";

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <Hero
          opacity={1}
          overlayColor="#570e0252"
          particlesSugar="crazyStars"
          height="100%"
        >
          <div className="container">
            <Grid>
              <Cell col={3}>
                <CardImage />
              </Cell>
              <Cell col={2} />
              <Cell className="text" col={7}>
                <AccordionFinal />
              </Cell>
            </Grid>
          </div>
        </Hero>
      </div>
    );
  }
}

export default Resume;
