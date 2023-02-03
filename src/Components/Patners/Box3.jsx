import React from "react";
let SlackLogo = require("./Icon/slack.png");
let PrudentialLogo=require("./Icon/prudential.png");
let MicrosoftLogo=require("./Icon/microsoft.png");
let ZooverLogo=require("./Icon/zoover.png");

const Box3 = () => {
  return (
    <div className="PatnarBox flex items-center justify-around">
      <div>
        <img src={SlackLogo} alt="React Logo" />
      </div>
      <div>
        <img src={PrudentialLogo} alt="Prudential Logo" />
      </div>
      <div>
        <img src={MicrosoftLogo} alt="Microsoft Logo" />
      </div>
      <div>
        <img src={ZooverLogo} alt="Zoover Logo" />
      </div>
    </div>
  );
};

export default Box3;
