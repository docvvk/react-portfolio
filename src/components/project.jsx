import React, { Component } from "react";

import { Modal, ButtonToolbar } from "react-bootstrap";

import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardMenu,
  Icon,
  IconButton,
  Tooltip
} from "react-mdl";

class App extends Component {
  render() {
    const { modaltitle, modaltext, modalheader } = this.props;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modaltitle}
          </Modal.Title>
        </Modal.Header>
        <CardText>
          <h4>{modalheader}</h4>
          <p>{modaltext}</p>
        </CardText>
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
    const { modaltitle, modaltext, modalheader } = this.props;

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              textAlign: "center",
              fontFamily: "Anton",
              // color: "#fff",
              height: "176px",
              background:
                "url('https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png') center / cover"
            }}
            onClick={() => this.setState({ modalShow: true })}
          >
            <h4 className="project-heading">{modaltitle}</h4>
            <a
              href="https://github.com/docvvk/react-mindgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip label="Review my code!" position="left" large>
                <i
                  style={{
                    fontSize: "2em",
                    color: "white",
                    position: "relative",
                    top: "2.2em",
                    left: "4.6em"
                  }}
                  className="fa fa-github"
                  aria-hidden="true"
                />
              </Tooltip>
            </a>
            <a
              href="https://thawing-shore-30878.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip label="Live Demo!" position="right" large>
                <Icon
                  name="info"
                  style={{
                    fontSize: "2em",
                    color: "white",
                    position: "relative",
                    top: "2.2em",
                    right: "5.3em"
                  }}
                />
                {/* <i style={{fontSize:'2em', color:'white', position: "relative", top: "2.2em", right: '5.3em'}} className="fa fa-flash" aria-hidden="true" /> */}

                {/* <Icon name="print" /> */}
              </Tooltip>

              {/* <i style={{fontSize:'2em', color:'white', position: "relative", top: "2.2em", right: '5.3em'}} className="fa fa-flash" aria-hidden="true" /> */}
            </a>
          </CardTitle>

          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <App
          show={this.state.modalShow}
          onHide={modalClose}
          modaltitle={modaltitle}
          modaltext={modaltext}
          modalheader={modalheader}
        />
      </ButtonToolbar>
    );
  }
}

export default Project;
