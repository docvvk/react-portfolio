import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() { 
        return ( 
            <Grid>
                <Cell col={4}>
                    <h4>{this.props.startYear} - {this.props.endYear}</h4>
                </Cell>

                <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <h5>{this.props.jobDescription}</h5>
                </Cell>
            </Grid>
         );
    }
}
 
export default Experience;