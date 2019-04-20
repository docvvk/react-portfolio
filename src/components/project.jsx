import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import {
  Card,
  Grid,
  Cell,
  CardTitle,
  Button,
  CardMenu,
  CardActions,
  Icon,
  IconButton,
  Tooltip,
  Checkbox
} from "react-mdl";

class App extends Component {
  render() {
    let {  modaltitle, modaltext } = this.props;

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ background: "rgb(0,0,0,0.6)" }}
      >
        <Modal.Header
          style={{ backgroundColor: "#0F2027", color: "white" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {modaltitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Cell col={6}>
              <h3>Project Information</h3>
              <p>{modaltext}</p>
            </Cell>
            <Cell col={6}>
              <h3>Technologies</h3>
              <Checkbox label="HTML5" ripple defaultChecked />
              <Checkbox label="CSS3" ripple defaultChecked />
              <Checkbox label="JavaScript" ripple defaultChecked />
              <Checkbox label="jQuery" ripple defaultChecked />
            </Cell>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Project extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    const {
      modaltitle,
      modaltext,
      modalheader,
      cardBackgroundURL,
      githubURL,
      demoURL
    } = this.props;

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Card
        shadow={5}
        style={{
          width: "428px",
          height: "428px",
          background: `url(${cardBackgroundURL}) center / cover`,
          margin: "auto"
        }}
      >
        <CardTitle expand />
        <CardActions
          style={{
            height: "52px",
            padding: "16px",
            background: "rgba(0,0,0,0.2)",
            fontFamily: "Anton",
            textAlign: "center"
          }}
        >
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <Tooltip label="Review my code!" position="top" large>
              <i
                style={{
                  fontSize: "2em",
                  color: "white",
                  position: "relative",
                  bottom: ".9em",
                  right: "3em"
                }}
                className="fa fa-github"
                aria-hidden="true"
              />
            </Tooltip>
          </a>

          <Tooltip label="Click for more Info!" position="top" large>
            <h4
              style={{
                color: "#fff",
                fontSize: "24px",
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
                bottom: "1.2em",
                textTransform: "uppercase",
                fontFamily: "Anton"
              }}
              onClick={() => this.setState({ modalShow: true })}
            >
              {modaltitle}
            </h4>
          </Tooltip>

          <a href={demoURL} target="_blank" rel="noopener noreferrer">
            <Tooltip label="Live Demo!" position="top" large>
              <Icon
                name="info"
                style={{
                  fontSize: "2em",
                  color: "white",
                  position: "relative",
                  bottom: ".7em",
                  left: "3em"
                }}
              />
              {/* <i style={{fontSize:'2em', color:'white', position: "relative", top: "2.2em", right: '5.3em'}} className="fa fa-flash" aria-hidden="true" /> */}
            </Tooltip>
          </a>
        </CardActions>

        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>

        <App
          show={this.state.modalShow}
          onHide={modalClose}
          modaltitle={modaltitle}
          modaltext={modaltext}
          modalheader={modalheader}
        />
      </Card>
    );
  }
}

export default Project;
