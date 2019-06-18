import React from "react";
import Accordion from "./Accordion";

export default function AccordionFinal() {
  return (
    <React.Fragment>
      <h1 className="text-warning">MORE ABOUT VIVEK</h1>
      <Accordion>
        <div style={{ fontSize: "1.5rem" }} label="INTRODUCTION">
          <img
            src="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1986&q=80"
            alt="himalayas"
            style={{ float: "left", height: "9rem", width: "11rem" }}
          />
          <p style={{ fontSize: "1.5rem" }}>
            Vivek hails from one of the beautiful provinces in India,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Himachal_Pradesh"
              rel="noopener noreferrer"
              target="_blank"
            >
              Himachal Pradesh
            </a>
            . A place of immense beauty and charm, Himachal is endowed with
            clear and serene lakes, lofty mountains, ancient temples and
            cheerful people.
          </p>
        </div>
        <div label="PIXEL-PERFECT CODE">
          <p style={{ fontSize: "1.5rem" }}>
            Vivek is passionate about building excellent software using latest
            technologies. He specializes in creating software for clients
            ranging from individuals and small-businesses all the way to large
            enterprise corporations.
          </p>
        </div>

        <div label="PERSONALITY">
          <p style={{ fontSize: "1.5rem" }}>
            Vivek is fun guy to work with. He is friendly, professional,
            hard-working with a lots of humour. He brings to table loads of
            experience in different fields of life. Apart from that he loves
            Photography, Travelling, Meeting new people and Sports.
          </p>
        </div>
        <div label="SKILL-SET">
          <p style={{ fontSize: "1.5rem" }}>
            Dr Vivek Malhan is Dentist by profession in India.
            <br />
            Vivek is Customer Care Specialist for one of the main financial
            institutions in Toronto, CA.
            <br />
            Vivek is Full Stack Web Developer looking for an opportunity to GIVE
            what he has learnt.
          </p>
        </div>
        {/* <div label="PICTURE GALLERY">
          <p style={{ fontSize: "1.5rem" }} />
        </div> */}
      </Accordion>
    </React.Fragment>
  );
}
