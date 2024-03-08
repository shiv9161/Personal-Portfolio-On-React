import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivdutt Chauhan </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I have worked three month as a React Developer in Anjani Creations, Jaipur.
            <br />
            I have completed BCA (Bachelor of Computer Applications) and perusing MCA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Opportunities don't happen, you create them!"{" "}
          </p>
          <footer className="blockquote-footer">Shivdutt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
