import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://previews.dropbox.com/p/thumb/AAXPFIPHwXkvr9-6-3VGKQ9na0cC-95lUHjh1Ns1MhCCNvcWs78zXbeehGIQ-rLTT_1m0Xq4lza8YJXf0AxoKxNCvRD-NSz7upu5eeg1-XLnlDKpAU0l8RQRrtBnj2dZDwPX_DnI3gl1Cb61KfovjNqqqyLKwliDMA5Pw735-w8y-Ivr5KJUG66qQoRoq3eLwxOc7YoebndvT6OhGlJh_Ctd21NHQvPZEmYdKRHbaPzI1XDd3QvJcfZivVvMlngX_BC9-IXtLOtXcKPpV4fQbF2rANPWeWf5A0_3nfEZe4yJVkULJqLrvW4_V4HP8mcLp7Q/p.jpeg?size_mode=5"
              alt="My Avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>FULL STACK WEB DEVELOPER</h1>

              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                Express | MongoDB{" "}
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Freecodecamp */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className=" fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
