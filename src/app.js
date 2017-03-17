import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Button, Card, Checkbox, Drawer, Dialog, Form, GridCol, Header, Hint, Input, Media, Overlay, Radio, RadioGroup, Snackbar, Switch, Slider, Tab, Tabs, TabContent, Tooltip, ProgressBar, List, ListItem, ListText,  } from 'react-atlas';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false, progress: 0,
    buffer: 10, leftActive: false, rightActive: false,
    oActive: false, index: 1 };
  }

  handleTabChange(index) {
    this.setState({index});
  };

  handleActive() {
    console.log("Special one activated");
  };

  handleToggleLeft() {
    this.setState({leftActive: !this.state.leftActive});
  };

  handleToggleRight() {
    this.setState({rightActive: !this.state.rightActive});
  };

  componentWillMount () {
    this.simulateProgress();
  }

  simulateProgress () {
    setTimeout(() => {
      if (this.state.progress < 100) {
        this.increaseProgress();
        if (this.state.progress > this.state.buffer) this.increaseBuffer();
      } else {
        this.setState(this.state);
      }
      this.simulateProgress();
    }, (Math.random() * 1 + 1) * 1000);
  }

  increaseProgress () {
    this.setState({
      progress: Math.random() * 30 + this.state.progress
    });
  }

  increaseBuffer () {
    this.setState({
      buffer: Math.random() * (100 - this.state.progress) + this.state.progress
    });
  }

  handleToggle() {
    this.setState({
      oActive: !this.state.oActive	
    });
  };

  handleSnackbarClick() {
    this.setState({active: false, overlayActive: false});
  };

  handleSnackbarTimeout() {
    this.setState({active: false, overlayActive: false});
  };

  handleRegularClick(){
    this.setState({active: true});
  };
  handleSnackAndOverlayClick() {
    this.setState({overlayActive: true});
  };

  render() {
  	return (
  	  <div>
    <Avatar title="Harrison"/>

    <Tabs index={this.state.index} onChange={this.handleTabChange}>
      <Tab label="Primary">
        <small>Primary content</small>
      </Tab>
      <Tab label="Secondary" onActive={this.handleActive}>
        <small>Secondary content</small>
      </Tab>
      <Tab label="Third" disabled>
        <small>Disabled content</small>
      </Tab>
      <Tab label="Fourth" hidden>
        <small>Fourth content hidden</small>
      </Tab>
      <Tab label="Fifth">
        <small>Fifth content</small>
      </Tab>
    </Tabs>

    <Card> A Card Yeah!</Card>
  	<Button>Button</Button>
    <Button secondary>Secondary</Button>
    <Button success>Success</Button>
    <Button warning>Warning</Button>
    <Button danger>Danger</Button>
    <Button href="#" link>Link</Button>
    <p>Disabled Regular Buttons</p>
    <Button disabled primary>Button</Button>
    <Button disabled secondary>Secondary</Button>
    <Button disabled success>Success</Button>
    <Button disabled warning>Warning</Button>
    <Button disabled danger>Danger</Button>
    <Button href="#" disabled link>Link</Button>
    <p>Outline Buttons</p>
    <Button outline primary>Button</Button>
    <Button outline secondary>Secondary</Button>
    <Button success outline>Success</Button>
    <Button warning outline>Warning</Button>
    <Button danger outline>Danger</Button>
    <Button href="#" link outline>Link</Button>
    <p>Disabled Outline Buttons</p>
    <Button disabled outline primary>Button</Button>
    <Button disabled secondary outline>Secondary</Button>
    <Button disabled success outline>Success</Button>
    <Button disabled warning outline>Warning</Button>
    <Button disabled danger outline>Danger</Button>
    <Button href="#" disabled link outline>Link</Button>
    <Checkbox
      defaultChecked={true}
      label="Checked"/>
    <Checkbox
    defaultChecked={false}
    label="Inline checkbox 1"
    inline
  />
  <Checkbox
    defaultChecked={false}
    label="Inline checkbox 1"
    inline
  />
   
        <Header><h1>This is a Header</h1></Header>
        <Hint>some Hint text below the input</Hint>
        <Input
          type="text"
          label="First Label"
          maxLength={12}
          placeholder="First Label placeholder"
        />
        <div style={{"width": "400px", margin: "auto"}}>
          <Media aspectRatio="wide">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </Media>
        </div>
        <Button onClick={this.handleToggle.bind(this)}>Show Overlay</Button>
        <Overlay active={this.state.oActive} onClick={this.handleToggle.bind(this)} />
        <Radio label="Checked Radio" value="checkedRadio" defaultChecked />
  <Radio label="Disabled Radio" value="disabledRadio" disabled/>
  <Radio label="Inlined 1" value="inlined1" inline />
  <Radio label="Inlined 2" value="inlined2" inline />
        <Snackbar
          action="Hide"
          active={this.state.active}
          timeout={20000}
          onTimeout={this.handleSnackbarTimeout}
          type="cancel"
        >
          Snackbar Content
          <Button onClick={this.handleSnackbarClick}>
            Hide
          </Button>
        </Snackbar>
        <Switch />

  <h5>Toggle Switch Colors</h5>

  <p>On Switch Color</p>
  <Switch onColor="black"/>

  <p>Off Switch Color</p>
  <Switch offColor="black"/>

  <p>Button Switch Color</p>
  <Switch buttonColor='black'/>

  <p>Disabled</p>
  <Switch disabled/>

  <h5>Switch sizes</h5>
  <p>Small</p>
  <Switch small/>

  <p>Medium</p>
  <Switch medium checked />

  <p>Large</p>
  <Switch large/>
  <Form>
            <Input
              type="text"
              label="First Label"
              maxLength={12}
              placeholder="Some Input placeholder"
            />
            <Checkbox label="Some Checkbox" />
            <Button type="submit">Some Submit Button</Button>
        </Form>
        <Tooltip tooltip="Floating Tooltip" >
          <Button></Button>
        </Tooltip>
        <RadioGroup name="comic">
          <Radio label="Checked Radio" value="checkedRadio" defaultChecked />
    <Radio label="Disabled Radio" value="disabledRadio" disabled/>
    <Radio label="Inlined2" value="inlined2" inline onBlur={this.handleBlur}/>
  </RadioGroup>
   <h5>Progress bars</h5>
        <p style={{margin: "10px auto"}}>Determinate</p>
        <ProgressBar mode="determinate" value={this.state.progress} buffer={this.state.buffer}/>
        <p style={{margin: "10px auto"}}>Indeterminate...</p>
        <ProgressBar mode="indeterminate"/>
        <p style={{margin: "10px auto"}}>Circular Indeterminate</p>
        <ProgressBar type="circular" mode="indeterminate"/>
        <p style={{margin: "10px auto"}}>Circular Determinate</p>
        <ProgressBar type="circular" mode="determinate" value={this.state.progress}/>
        <p style={{margin: '10px auto'}}>Range</p>
        <ProgressBar mode='determinate' value={{from: 10, to: 80}}/>
        <nav>
          <Button onClick={this.handleToggleLeft}>Drawer left</Button>
          <Button outline onClick={this.handleToggleRight}>Drawer right</Button>
        </nav>
        <List>
      <li>Inbox</li>
      <li>Outbox</li>
      <li>Trash</li>
      <li>Spam</li>
    </List>
    <List>
      <ListItem>
        <ListText>
          Some Guy
        </ListText>
      </ListItem>

      <ListItem>
        <ListText>
          Other Person
        </ListText>
      </ListItem>

      <ListItem>
        <ListText>
          Chill Girl
        </ListText>
      </ListItem>

    </List>
    <Tooltip tooltip="Floating Tooltip" >
      <Button></Button>
     </Tooltip>
     
  	</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));