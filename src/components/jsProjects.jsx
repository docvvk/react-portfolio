import React, { Component } from "react";
import Project from "./project";

class JSProjects extends Component {
  render() {
    return (
      <div className="projects-grid">

        {/* PROJECT 1 */}

        <Project
          modaltitle={"Soccer Trivia"}
          modalheader={"Technologies"}
          modaltext={"Single page React Web Game Trivia game created using JavaScript for the logic and jQuery to manipulate HTML 10 questions randomly generated with countdown timer for answer.Game gives correct answer with gif/image after user guess.After 10 questions, app will display score with the option to restart the game.Soccer theme used with soccer related gifs."}
          cardBackgroundURL={"https://uploads-ssl.webflow.com/5b6e27a9e5c31c6082c7e58e/5b7741cf4ce7f4467750181f_SoccerTrivia.png"}
          githubURL={'https://github.com/docvvk/react-mindgame'}
          demoURL={'https://thawing-shore-30878.herokuapp.com/'}
          teckList={['HTML5','CSS3','Javascript','jQuery']} />

      </div>
    );
  }
}

export default JSProjects;
