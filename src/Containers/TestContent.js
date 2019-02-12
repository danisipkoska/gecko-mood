import React from "react";
import TestForm from "./../components/TestForm";
import Navigation from "./../Service/NavigationalService";
import BrainService from "./../Service/BrainService";

class TestContent extends React.Component {
  brainService = BrainService.getInstance();

  state = {
    testInput: ""
  };
  handleChangeInput = e => {
    this.setState({
      testInput: e.target.value
    });
  };
  exec(e) {
    e.preventDefault();
    let emotion = this.brainService.exec("react");
    console.log(emotion);
  }
  render() {
    return (
      <div>
        <Navigation />
        <TestForm
          testInput={this.state.testInput}
          onChange={e => this.handleChangeInput(e)}
          exec={e => this.exec(e)}
        />
      </div>
    );
  }
}
export default TestContent;
