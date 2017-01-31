import React from 'react'
import ReactDOM from 'react-dom'
import digestImgPath from "./lib/digestImgPath.js.erb";

const ApplicationName = (props) => (
  return (
    <div>
      <img src={digestImgPath("avatar-placeholder.jpg")} style={demoStyles} />
      <p>Demo Webpacker React</p>
    </div>
  )
);

export default ApplicationName;
