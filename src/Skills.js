import React from "react";
import Card from "./Card";
import { Icon } from "@iconify/react";
import html from "./HTML.png";
import css from "./CSS.png";
import js from "./Js.png";
import react from "./React.png";
import boot from "./BOOT.png";
import firebase from "./firebase.png";
function Skills() {
  return (
    <>
      <strong>
        <h1 className="mb-4" style={{ textAlign: "center" }}>
          Skills
        </h1>
      </strong>
      <div className="skills-container">
        <div className="card-container">
          <Card img={html} />
        </div>
        <div className="card-container">
          <Card img={css} />
        </div>
        <div className="card-container">
          <Card img={js} />
        </div>
        <div className="card-container">
          <Card img={react} />
        </div>
        <div className="card-container">
          <Card img={boot} />
        </div>
        <div className="card-container">
          <Card img={firebase} />
        </div>
      </div>
    </>
  );
}

export default Skills;
