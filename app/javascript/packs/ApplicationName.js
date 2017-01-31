import React from 'react'
import ReactDOM from 'react-dom'
import {AVATAR_PLACEHOLDER, IC_LOADER} from "./lib/digestImgPath.js.erb";
const demoStyles = {width: "25px", height: "25px"};

const ApplicationName = (props) => (
  <span>
    <img src={AVATAR_PLACEHOLDER} style={demoStyles} />
    Demo Webpacker React
    <img src={IC_LOADER} style={demoStyles} />
  </span>
);

export default ApplicationName;
