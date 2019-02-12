import React from "react";
import HomeForm from "./../components/HomeForm";
import Navigation from "./../Service/NavigationalService";
import DataService from "./../Service/DataService";
import BrainService from "./../Service/BrainService";

export class HomeContent extends React.Component {
  dataService = new DataService();
  brainService = BrainService.getInstance();

  state = {
    input: "",
    select: "",
    myData: [],
    page: 1,
    pageLimit: 3
  };

  componentDidMount() {
    if (localStorage.getItem("emotionList") !== null) {
      this.setState({
        myData: JSON.parse(localStorage.getItem("emotionList"))
      });
    }
    if (localStorage.getItem("emotionList") === null) {
      this.setState({
        myData: []
      });
    }
    document.addEventListener("submit", e => {
      e.preventDefault();
    });
  }

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangeSelect = e => {
    this.setState({
      select: e.target.value
    });
  };

  handleLocalStorage() {
    let sentence = this.state.input;
    let emotion = this.state.select;
    this.dataService.set(sentence, emotion);

    this.setState(
      {
        input: "",
        select: "",
        myData: JSON.parse(localStorage.getItem("emotionList"))
      },
      () => console.log(this.state.myData)
    );
  }
  handleClick(e) {
    this.setState({
      page: Number(e.target.id)
    });
  }
  train() {
    let train = this.brainService.network.train(
      [
        {
          input: this.state.input,
          output: this.state.select
        }
      ],
      {
        iterations: 2000,
        errorThresh: 0.005
      }
    );

    console.log(train);
  }
  exec() {
    let emotion = this.brainService.exec(this.state.input);
    console.log(emotion);
  }

  render() {
    return (
      <div>
        <Navigation />
        <HomeForm
          handleChangeInput={e => this.handleChangeInput(e)}
          handleChangeSelect={e => this.handleChangeSelect(e)}
          input={this.state.input}
          select={this.state.select}
          handleLocalStorage={() => this.handleLocalStorage()}
          myData={this.state.myData}
          page={this.state.page}
          pageLimit={this.state.pageLimit}
          onClick={e => this.handleClick(e)}
          train={() => this.train()}
          exec={() => this.exec()}
        />
      </div>
    );
  }
}
