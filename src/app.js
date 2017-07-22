
import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Button, Checkbox, Dropdown, Input, Hint, Switch } from 'react-atlas';

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
        <p>Title prop gets truncated to 1st letterrrrr </p>
        <Avatar title="Nathan" />
        <p>Icon beats title</p>
        <Avatar title="Nathan" icon={<i className="fa fa-github"></i>} />
        <p>Image beats icon</p>
        <Avatar
          icon={<i className="fa fa-github"></i>}
          image="https://upload.wikimedia.org/wikipedia/commons/c/cf/3818_-_Riffelberg_-_Matterhorn_viewed_from_Gornergratbahn.JPG"
        />
        <p>Image beats title</p>
        <Avatar title="Javier" image="https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg" />
        <p>Child beats parameters </p>
        <Avatar title="Nathan" image="cat.jpg">
         <i className="fa fa-github"></i>
        </Avatar>
        <Avatar title="Nathan" icon={<i className="fa fa-github"></i>}>
         <img src="http://www.lettherebelightfineart.com/wp-content/uploads/2014/03/01_Minneapolis_Skyline_Photography_Stone_Arch_Bridge.jpg"/>
        </Avatar>
        <p> Image beats defaultImage </p>
        <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNZh4ycC0G2UbBGDVgJ56hYbZ0j1mU9J05xLg9O5ZazV1GJTT" defaultImage="cat.jpg" />
        <p>DefaultImage beats title </p>
        <Avatar title="Javier" defaultImage="https://timeincsecure-a.akamaihd.net/rtmp_uds/293884104/201703/2681/293884104_5360456295001_5360434467001-vs.jpg?pubId=293884104&videoId=5360434467001" />
        <p>DefaultImage will replace a image that fails to load </p>
        <Avatar image="badImage.jpg" defaultImage="http://wikitravel.org/upload/shared//thumb/e/ea/Lake_Fryxell.jpg/510px-Lake_Fryxell.jpg" />
        <p>Child string gets truncated to 1st letter </p>
        <Avatar>Nathan</Avatar>
        <p>Primary Button</p>
        <Button primary onClick={this.clickHandler} >Help</Button>
        <p>Secondary Button</p>
        <Button secondary>Sugar</Button>
        <p>Primary Outline Button</p>
        <Button primary outline>Outline</Button>
        <p>Success outline Button</p>
        <Button success outline>Success</Button>
        <p>Warning Button</p>
        <Button warning>Warning</Button>
        <p>Error Button</p>
        <Button error>Error</Button>
        <p>Link Button</p>
        <Button link>link</Button>
        <p>Disabled default Button</p>
        <Button disabled>disabled</Button>
        <p>Large default Button</p>
        <Button large>large</Button>
        <p>Small default Button</p>
        <Button small>small</Button>
        <p>Checkbox</p>
        <Checkbox
          label="Checkbox"
        />
        <p>Checked Checkbox</p>
        <Checkbox
          label="Checkbox Checked"
          checked
        />
        <p>Disabled Checkbox</p>
        <Checkbox
          label="Disabled Checkbox"
        />
        <p>Left Label Checkbox</p>
        <Checkbox
          label="Checkbox Left Label"
          labelPosition="left"
          checked
        />
        <p>No Label Checkbox</p>
        <Checkbox/>
        <p>No Label Checked Checkbox</p>
        <Checkbox checked/>
        <p>Required Checkbox</p>
        <Checkbox required/>
        <p>Dropdown</p>
        <Dropdown>
          <li>Cow</li>
          <li>Test</li>
        </Dropdown>
        <p>Default Text Input</p>
        <Input type="text"/>
        <p>Small Input</p>
        <Input type="text" small/>
        <p>Medium Input</p>
        <Input type="text" medium/>
        <p>Large Input</p>
        <Input type="text" large/>
        <p>Text Input with placeholder</p>
        <Input type="text" placeholder="Add information"/>
        <p>Text input with required validation</p>
        <Input type="text" required/>
        <p>Required text input with required text</p>
        <Input type="text" required requiredText="Custom required message"/>
        <p>Text input with maximum length validation</p>
        <Input type="text" maxLength={20}/>
        <p>Default textarea</p>
        <Input type="text" multiline/>
        <p>Default checkbox input</p>
        <Input type="checkbox"/>
        <p>Default radio input</p>
        <Input type="radio"/>
        <p>Email input</p>
        <Input type="email"/>
        <p>Password input</p>
        <Input type="password"/>
        <p>Disabled input</p>
        <Input type="text" disabled/>
        <p>Hidden input</p>
        <Input type="text" hidden/>
        <p>Default Hint</p>
        <Hint>This is a hint text</Hint>
        <p>Passing text as prop (this will override children)</p>
        <Hint text="This is a hint text" />
        <p>Hint Custom CSS</p>
        <Hint className="custom hint-new">This is a hint text</Hint>
        <p>Default Switch</p>
        <Switch/>
        <p>Small Switch</p>
        <Switch small/>
        <p>Medium Switch</p>
        <Switch medium/>
        <p>Large Switch</p>
        <Switch large/>
        <p>Multiple switches tied to same behavior (name prop)</p>
        <Switch name="customFeature"/>
        <Switch name="customFeature"/>
        <Switch name="customFeature"/>
        <p>Set other colors for on/off states (hex, rgb, css-valid color name)</p>
        <Switch onColor="#00bbaa" offColor="#000000"/>
        <Switch onColor="green" offColor="black"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));