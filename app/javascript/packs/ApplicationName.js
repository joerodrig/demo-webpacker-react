import React from 'react'
import ReactDOM from 'react-dom'
import {AVATAR_PLACEHOLDER} from "./lib/digestImgPath.js.erb";
const demoStyles = {width: "25px", height: "25px"};

const ApplicationName = (props) => (
  <span>
    <img src={AVATAR_PLACEHOLDER} style={demoStyles} />
    Demo Webpacker React
  </span>
);

export default ApplicationName;
