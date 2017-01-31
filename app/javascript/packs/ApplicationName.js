import React from 'react'
import ReactDOM from 'react-dom'
import digestImgPath from "./lib/digestImgPath.js.erb";

const ApplicationName = (props) => (
    <span>
      <img src={digestImgPath("avatar-placeholder.jpg")} style={demoStyles} />
      Demo Webpacker React
    </span>
);

export default ApplicationName;
