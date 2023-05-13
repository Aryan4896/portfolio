import React from "react";
import homeimg from "./service-bannerc-removebg-preview.png";
import cv from "./Resume1.pdf";
import { Icon } from "@iconify/react";
function Home() {
  return (
    <>
      <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <div className="img-container">
              <img
                src={homeimg}
                className="img-home"
                style={{ width: "410px" }}
                alt="Home"
              />
            </div>
          </div>

          <div className="col-md-6 d-flex">
            <section id="home" className="text-center">
              <h1>
                Hi, I am Aryan,
                <br />
                <strong className="brand-name" style={{ color: "#4a6694" }}>
                  I am a front-end developer
                </strong>
              </h1>
              <p>
                Feel free to explore my portfolio and projects to get a glimpse
                of my work. If you have any inquiries or would like to
                collaborate, please don't hesitate to reach out to me through
                the contact section. I look forward to connecting with you!
              </p>
              <a
                href={cv}
                download="your-cv.pdf"
                className="btn btn-secondary btn-download mb-5"
                target=" "
              >
                Download CV
                <Icon icon="material-symbols:download-rounded" width="22" />
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="home-link-git">
        <div>
          <a
            href="https://www.linkedin.com/in/aryan-singh-b89957198/"
            className="linked-in btn btn-secondary"
            target=" "
          >
            <Icon icon="mdi:linkedin" width="30" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Aryan4896"
            className="git-hub btn btn-secondary"
            target=" "
          >
            <Icon icon="mdi:github" width="30" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
