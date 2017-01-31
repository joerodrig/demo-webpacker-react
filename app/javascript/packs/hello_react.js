// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationName from "./ApplicationName";

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello&nbsp;
        <ApplicationName />
        <div>
          <h3>Importing Fonts</h3>
          <ul>
            <li>
              <p className="demo-roboto-light">This should be Roboto Light</p>
            </li>
            <li>
              <p className="demo-roboto-medium">This should be Roboto Medium</p>
            </li>
            <li>
              <p className="demo-roboto-italic">This should be Roboto Italic</p>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Hello name="React" />, document.body.appendChild(document.createElement('div')))
})
