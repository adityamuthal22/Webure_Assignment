import React from "react";
let ArrowLogo = require("./Icon/Arrow1.png");
let ShopLogo = require("./Icon/shop.png");
let CardsLogo = require("./Icon/cards.png");
let FavoriteLogo = require("./Icon/favorite-chart.png");
let girlLogo = require("./Icon/EmailGirl.png");
let Right2Logo = require("./Icon/Right2.png");
let banner4Logo = require("./Icon/banner4.png");
let besnikLogo = require("./Icon/Besnik.png");
let circleLogo = require("./Icon/Circle.png");

const Services = () => {
  return (
    <div>
      <div className="flex Box4">
        <div className="w-80 pt-16 ml-24 ">
          <h1 className="text-start text-base font-normal text-orange-500">
            SERVICES
          </h1>
          <h1 className="text-start text-4xl font-bold leading-10 w-72">
            Our Capabilities
          </h1>
          <h1 className="text-xl text-gray-500 text-start h-24 mt-6">
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </h1>
          <img
            className="text-end h-36 w-24 ml-52"
            src={ArrowLogo}
            alt="ArrowLogo"
          />
        </div>
        <div className=" ServicesBox flex">
          <div className="">
            <img src={ShopLogo} alt="ShopLogo" />
            <h1 className="text-xl text-start mt-2 font-medium">Consult</h1>
            <h1 className="text-base text-start font-normal text-gray-500 mt-2 w-48">
              Leverage agile framework to provide a robust high level synopsys
              overviews
            </h1>
          </div>
          <div className="">
            <img src={CardsLogo} alt="CardsLogo" />
            <h1 className="text-xl text-start mt-2 font-medium">Create</h1>
            <h1 className="text-base text-start font-normal text-gray-500 mt-2">
              Bring to the table survival strategies to ensure proactive
              domination
            </h1>
          </div>
          <div className="">
            <img src={FavoriteLogo} alt="FavoriteLogo" />
            <h1 className="text-xl text-start mt-2 font-medium">Collaborate</h1>
            <h1 className="text-base text-start font-normal text-gray-500 mt-2 w-44">
              Grow the holistic world view of disruptive innovation workspace
            </h1>
          </div>
        </div>
      </div>

      {/* Email Section */}

      <div className="EmailSection flex">
        <div className="ImgGirl">
          <img className="h-full ml-5" src={girlLogo} alt="girlLogo" />
        </div>
        <div className=" ml-20 mt-12 ">
          <h1 className="text-orange-500 text-base font-normal text-start">
            WHY CHOOSE US
          </h1>
          <h1 className="text-start font-bold text-4xl max-w-lg h-32  mt-5 text-white">
            Take on any Challenge of the Digital World
          </h1>
          <div>
            <div className="flex">
              <img src={Right2Logo} alt="Right2Logo" />
              <h1 className="ml-5 text-xl text-blue-100 font-normal">
                Corporate Financial Advisory
              </h1>
            </div>
            <div className="flex mt-5">
              <img src={Right2Logo} alt="Right2Logo" />
              <h1 className="ml-5 text-xl text-blue-100 font-normal">
                Development of Financial Models
              </h1>
            </div>
            <div className="flex mt-5">
              <img src={Right2Logo} alt="Right2Logo" />
              <h1 className="ml-5 text-xl text-blue-100 font-normal">
                Deal Structuring
              </h1>
            </div>
          </div>

          <div className="text-start  mt-12 flex">
            <input
              className="font-bold text-xl text-red-400 bg-transparent  w-full mr-3 py-1 px-2 leading-tight focus:outline-none outline-none border-b border-white-500 max-w-xs"
              type="text"
              placeholder="Enter your eamil ID"
              aria-label="Full name"
            />
            <button href="/" className="GetButton2 ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Solution Section*/}

      <div className="SolutionBox flex">
        <div className="pt-44 text-start pl-44">
          <h1 className="text-blue-500 font-bold">OUR SOLUTIONS</h1>
          <h1 className="font-bold text-4xl w-100  mt-5 ">
            Launch and scale your marketing campaigns
          </h1>
          <h1 className="text-sm w-5/6 mt-5 text-gray-500 font-medium">
            We start with a a kick-off call with the respective project owners,
            onboard the teams on the project management platforms and, take off!
          </h1>
          <button className="LearnButton">Learn more</button>
        </div>
        <div>
          <img src={banner4Logo} alt="banner4Logo" />
        </div>
      </div>

      {/* Client Retation Section */}

      <div className="ClientSectionBox">
        <img src={besnikLogo} alt="besnikLogo" />
      </div>

      {/* Our Clients Section */}

      <div className="flex items-center ">
        <img className="CircleLogo" src={circleLogo} alt="circleLogo" />
        <h1 className="text-7xl WhatText">What We Do</h1>
      </div>

      <div className="ClientsBox2 flex mt-5">
        <h1 className="OurBox">Our Sevices</h1>
        <h1 className="OurBox2 text-start">
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature
        </h1>
      </div>
    </div>
  );
};

export default Services;
