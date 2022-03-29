import React from "react";
import profilePic from "../images/Yashit.png";

export default function Info() {
  return (
    <div className="info">
      <h1>Yashit Thakur</h1>
      <p className="work">Associate Software Engineer</p>
      <p className="website">redmonk.com</p>
      <div className="contact-links">
        <a href="#" className="btn btn-light">
          <i className="fa fa-envelope"></i> Email
        </a>
        <a href="#" className="btn btn-dark">
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
}
