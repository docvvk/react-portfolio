import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Vivek Malhan</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png "
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "70%", margin: "auto", paddingTop: "2em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              obcaecati, modi ipsa beatae labore nostrum iste ea cum incidunt
              atque hic officia eos nam nihil quae facilis natus. Error, autem!
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden='true' />
                    647-327-4455
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope " aria-hidden='true' />
                    vivek.malhan@yahoo.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden='true' />
                    doc.vvk
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
