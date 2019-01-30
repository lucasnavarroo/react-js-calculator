import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <div>
        <div className="operationsDisplay" id="display">
          {this.props.screen === "" ? "0" : this.props.screen}
        </div>
      </div>
    );
  }
}
