
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dropdown } from 'react-atlas';
var a11y = require('react-a11y');
a11y(React);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler(event) {
    console.log("event: ", event);
  }
                                                                                
  render() {
    return (
      <div>
        <Button primary onClick={this.clickHandler} >Help</Button>
        <Button secondary>Sugar</Button>
        <Button primary outline>Outline</Button>
        <Button success outline>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
        <Button link>link</Button>
        <Button disabled>disabled</Button>
        <Button large>large</Button>
        <Button small>small</Button>
        <Dropdown>
          <li>Cow</li>
          <li>Test</li>
        </Dropdown>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));