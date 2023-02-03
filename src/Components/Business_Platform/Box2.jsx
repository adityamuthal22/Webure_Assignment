import React from "react";
let Vector = require("./Icon/Vector1.png");
let Right = require("./Icon/Right.png");
let VideoLogo = require("./Icon/Vector.png");
let BusinessLogo = require("./Icon/Business1.png");

const Box2 = () => {
  return (
    <div className="Box2 mt-16 flex">
      <div className="w-1/2">
        <div>
          <div className="flex">
            <img src={Vector} alt="VectorLogo" />
            <img className="RightLogo" src={Right} alt="RightLogo" />
            <h1 className="text-sm item-center ml-4 mt-1 text-orange-500 font-normal">
              Best Business PlatForm - World Record 2021
            </h1>
          </div>
          <div>
            <h1 className="GoalsHead text-start">
              Reach Your Business Goals in Record Time
            </h1>
          </div>
          <div>
            <h1 className="Text2 text-start mt-5">
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.
            </h1>
          </div>
          <div className="flex items-center mt-10">
            <button className="GetButton ">Get Started</button>
            <div className="flex mx-5">
            <img  src={VideoLogo} alt="RightLogo" />
            <h1 className="mx-2 text-sm text-zinc-900 font-medium ">Book a 30 Min Quick Meeting</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="BusinessLogo" src={BusinessLogo} alt="" />
      </div>
    </div>
  );
};

export default Box2;
