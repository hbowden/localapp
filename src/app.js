
import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Button, Card, Checkbox, Drawer, Dialog, Form, GridCol, Header, Hint, Input, Media, Overlay, Radio, RadioGroup, Snackbar, Switch, Slider, Tab, Tabs, TabContent, Tooltip, ProgressBar, List, ListItem, ListText } from 'react-atlas';
// var a11y = require('react-a11y');
// a11y(React);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler(event, data) {
    console.log(event);
  }
                                                                                
  render() {
    return (
      <div>
        <Checkbox
          label="Checkbox 1"
          inline
        />
        <Checkbox
          inline
          label="Inline checkbox 1"
          onClick={this.clickHandler}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));