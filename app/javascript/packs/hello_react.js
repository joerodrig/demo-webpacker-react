// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationName from "./ApplicationName";
const demoStyles = {width: "25px", height: "25px"};

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello&nbsp;
        <ApplicationName />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Hello name="React" />, document.body.appendChild(document.createElement('div')))
})
