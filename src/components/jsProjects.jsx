import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class JSProjects extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project #1 */}
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
          >
            <h4 className="project-heading">SOCCER TRIVIA</h4>
          </CardTitle>
          <CardText>
            Single page React Web Game Trivia game created using JavaScript for
            the logic and jQuery to manipulate HTML.10 questions randomly
            generated with countdown timer for answer.Game gives correct answer
            with gif/image after user guess.After 10 questions, app will display
            score with the option to restart the game.Soccer theme used with
            soccer related gifs.
          </CardText>

          <CardActions border>
            <a
              href="https://github.com/docvvk/react-mindgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>Github</Button>
            </a>
            {/* <Button colored>Code</Button> */}
            <a
              href="https://thawing-shore-30878.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project #1 */}
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
          >
            <h4 className="project-heading">SOCCER TRIVIA</h4>
          </CardTitle>
          <CardText>Single page React Web Game</CardText>
          <CardActions border>
            <a
              href="https://github.com/docvvk/react-mindgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>Github</Button>
            </a>
            {/* <Button colored>Code</Button> */}
            <a
              href="https://thawing-shore-30878.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project #1 */}
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
          >
            <h4 className="project-heading">SOCCER TRIVIA</h4>
          </CardTitle>
          <CardText>Single page React Web Game</CardText>
          <CardActions border>
            <a
              href="https://github.com/docvvk/react-mindgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>Github</Button>
            </a>
            {/* <Button colored>Code</Button> */}
            <a
              href="https://thawing-shore-30878.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project #1 */}
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
          >
            <h4 className="project-heading">SOCCER TRIVIA</h4>
          </CardTitle>
          <CardText>Single page React Web Game</CardText>
          <CardActions border>
            <a
              href="https://github.com/docvvk/react-mindgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>Github</Button>
            </a>
            {/* <Button colored>Code</Button> */}
            <a
              href="https://thawing-shore-30878.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colored>LiveDemo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default JSProjects;
