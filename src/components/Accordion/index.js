import React from "react";
import Accordion from "./Accordion";

export default function AccordionFinal() {
  return (
    <React.Fragment>
      <h1 className="text-warning accordionText">MORE ABOUT VIVEK</h1>
      <Accordion>
        <div style={{ fontSize: "2rem" }} label="INTRODUCTION">
          <img
            src="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1986&q=80"
            alt="himalayas"
            style={{ float: "left", height: "9rem", width: "11rem" }}
          />
          <p className="accordionText" style={{ fontSize: "1.6rem" }}>
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
          <p className="accordionText" style={{ fontSize: "1.6rem" }}>
            Vivek is passionate about building excellent software using latest
            technologies. He specializes in creating software for clients
            ranging from individuals and small-businesses all the way to large
            enterprise corporations.
          </p>
        </div>

        <div label="PERSONALITY">
          <p className="accordionText" style={{ fontSize: "1.5rem" }}>
            Vivek is fun guy to work with. He is friendly, professional,
            hard-working with a lots of humour. He brings to table loads of
            experience in different fields of life. Apart from that he loves
            Photography, Travelling, Trekking, Meeting new people and Sports.
          </p>
        </div>
        <div label="SKILL-SET">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/20/19/53/productivity-1995786_1280.jpg"
            alt="ai"
            style={{ float: "left", height: "11vh", width: "13vh" }}
          />
          

          <p className="accordionText" style={{ fontSize: "1.6rem" }}>
            Full Stack Web Developer looking for an opportunity.
            <br />
            Demonstrated history working in dental technologies and customer
            care.
          </p>
        </div>
        <div label="GOALS">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/15/17/22/brain-2146817_1280.png"
            alt="ai"
            style={{ float: "left", height: "9rem", width: "11rem" }}
          />
          <p className="accordionText" style={{ fontSize: "1.6rem" }}>
            Python
            <br />
            Machine Learning
            <br />
            Artificial Intelligence
            <br />
            Cloud Computing
            <br />
            Big Data
            <br />
          </p>
        </div>
      </Accordion>
    </React.Fragment>
  );
}
