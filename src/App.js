import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

  // constructor
  constructor(props){
    super(props)

    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: "true"
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  // updateColor
updateColor(value) {
  this.setState({
    fontColor: value
  });
}
  // updateSize
updateSize(value) {
  this.setState({
    fontSize: value
  });
}

  // updateFamily
updateFamily(value) {
  this.setState({
    fontFamily: value
  });
}

  // updateEditStatus
updateEditStatus(value) {
  this.setState({
    allowEdit: value
  });
}

  render() {
    const { allowEdit, fontColor, fontFamily, fontSize } = this.state;
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger allowEdit={allowEdit} update={this.updateColor}/>
          <SizeChanger allowEdit={allowEdit} update={this.updateSize}/>
          <FamilyChanger allowEdit={allowEdit} update={this.updateFamily}/>
        </div>
        <div className="textArea">
          <TextContainer fontColor={fontColor} fontFamily={fontFamily} fontSize={fontSize}/></div>
      </div>
    );
  }
}

export default App;
