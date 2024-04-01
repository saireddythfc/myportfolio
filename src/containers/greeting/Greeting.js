import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
// import { ReactTyped } from "react-typed";

function greetings(title) {
  const greets = title.replaceAll(/\|/g, ",").split(",");
  // const greets = "a,b,c"
  console.log(greets);
  return greets;
}

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {/* <ReactTyped
                  // strings={greetings(greeting.subTitle)}
                  strings = {["a,b,c"]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop 
                >
                </ReactTyped> */}
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              <div className="button-greeting-div">
                {/* <Button text="Contact me" href="#contact" /> */}
                <Button
                  text="See my resume"
                  theme={theme}
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
