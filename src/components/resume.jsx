import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from './education';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{padding: '2em'}}>Vivek Malhan</h2>
            <h4 style={{colr: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, neque. Odit illo quasi sunt omnis dolore eaque earum, quas architecto dolorum, facilis ipsam blanditiis recusandae officia, minima officiis ducimus quibusdam.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>Toronto, CA</p>
            <h5>Phone</h5>
            <p>647-327-4455</p>
            <h4>Email</h4>
            <p>vivek.malhan@yahoo.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          </Cell>
          
          <Cell className="resume-right-col" col={8}>
            <Education>
                    
            </Education> 
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
