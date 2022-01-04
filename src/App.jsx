import React, { Component } from "react";
import "./style/timer.style.css";
import InCreamentCount from "./components/incrementCount";
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
      this.setState({ count: this.state.count - 1 }, () => {
        if (this.state.count === 0) {
          alert("Time is Finished");
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      });
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
          <button onClick={this.decrementCount} className="btn">
            -
          </button>
          <span>{this.state.count}</span>
          <InCreamentCount incrementfunc={this.incrementCount} />
          <div className="main-func">
            <button onClick={this.startTimer} className="btn Start">
              Start
            </button>
            <button onClick={this.stopTimer} className="btn Stop">
              Stop
            </button>
            <button onClick={this.resetTimer} className="btn Reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
