import React, { Component } from "react";
import "./style/timer.style.css";
import ButtonForOparation from "./components/buttonForOparation";
class App extends Component {
  state = {
    count: 0,
  };
  intervalId = null;
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    this.intervalId = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Time is Finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      } else {
        this.setState({ count: this.state.count });
      }
    }, 1000);
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    if (this.intervalId) {
      this.setState({ count: 0 });
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  render() {
    return (
      <div>
        <h1>This is Timer</h1>
        <div className="container">
          <ButtonForOparation
            oparationFunc={this.decrementCount}
            nameOfButton="-"
          />
          <span>{this.state.count}</span>
          <ButtonForOparation
            oparationFunc={this.incrementCount}
            nameOfButton="+"
          />
          <div className="main-func">
            <ButtonForOparation
              oparationFunc={this.startTimer}
              nameOfButton="Start"
            />
            <ButtonForOparation
              oparationFunc={this.stopTimer}
              nameOfButton="Stop"
            />
            <ButtonForOparation
              oparationFunc={this.resetTimer}
              nameOfButton="reset"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
