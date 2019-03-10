import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/2600/1*Dr33-2Wgz8lYZxZsJUFIog.jpeg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
              deserunt tempore quibusdam! Numquam nam perspiciatis id laudantium
              quos consequuntur obcaecati impedit quibusdam qui, ducimus
              dignissimos? Magni, adipisci. Blanditiis, ipsa?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/2600/1*Dr33-2Wgz8lYZxZsJUFIog.jpeg) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
              deserunt tempore quibusdam! Numquam nam perspiciatis id laudantium
              quos consequuntur obcaecati impedit quibusdam qui, ducimus
              dignissimos? Magni, adipisci. Blanditiis, ipsa?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project #3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/2600/1*Dr33-2Wgz8lYZxZsJUFIog.jpeg) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
              deserunt tempore quibusdam! Numquam nam perspiciatis id laudantium
              quos consequuntur obcaecati impedit quibusdam qui, ducimus
              dignissimos? Magni, adipisci. Blanditiis, ipsa?
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Javascript</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Javascript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
