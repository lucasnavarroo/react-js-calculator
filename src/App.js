import React, { Component } from "react";
import Display from "./components/Display.js";

export default class App extends Component {
  state = {
    expressions: "",
    operatorFlag: false,
    dotFlag: false
  };

  handleClick = n => {
    try {
      if (this.state.expressions === "invalid expression")
        this.setState({ expressions: "" });
      if (this.state.expressions === "" && n === "0") {
        return;
      }
      if (this.isNumber(n)) {
        this.setState(prev => ({
          expressions: prev.expressions + n,
          operatorFlag: false
        }));
      } else if (this.isOperator(n)) {
        if (this.state.operatorFlag) {
          const expr = this.state.expressions;
          const newExpression = expr.slice(0, expr.length - 1) + n;
          this.setState({
            expressions: newExpression
          });
        } else {
          this.setState(prev => ({
            expressions: prev.expressions + n,
            operatorFlag: true
          }));
        }
        this.setState({ dotFlag: false });
      } else if (n === "." && !this.state.dotFlag) {
        this.setState(prev => ({
          expressions: prev.expressions + n,
          operatorFlag: false,
          dotFlag: true
        }));
      } else if (n === "AC") {
        this.setState({
          expressions: "",
          operatorFlag: false,
          dotFlag: false
        });
      } else if (n === "=") {
        const res = this.state.expressions;
        const result = eval(res);
        this.setState({
          expressions: result,
          operatorFlag: false,
          dotFlag: false
        });
      }
    } catch (error) {
      this.setState({
        expressions: "invalid input",
        operatorFlag: false,
        dotFlag: false
      });
      console.log(error.message);
    }
  };

  isNumber = n =>
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(n);
  isOperator = n => ["+", "-", "*", "/"].includes(n);

  render() {
    return (
      <div>
        <Display screen={this.state.expressions} />
        <div className="grid-container2">
          <div className="grid-container3">
            <div className="button-container">
              <button
                id="seven"
                onClick={() => {
                  this.handleClick("7");
                }}
              >
                7
              </button>
              <button
                id="eight"
                onClick={() => {
                  this.handleClick("8");
                }}
              >
                8
              </button>
              <button
                id="nine"
                onClick={() => {
                  this.handleClick("9");
                }}
              >
                9
              </button>
              <button
                id="four"
                onClick={() => {
                  this.handleClick("4");
                }}
              >
                4
              </button>
              <button
                id="five"
                onClick={() => {
                  this.handleClick("5");
                }}
              >
                5
              </button>
              <button
                id="six"
                onClick={() => {
                  this.handleClick("6");
                }}
              >
                6
              </button>
              <button
                id="one"
                onClick={() => {
                  this.handleClick("1");
                }}
              >
                1
              </button>
              <button
                id="two"
                onClick={() => {
                  this.handleClick("2");
                }}
              >
                2
              </button>
              <button
                id="three"
                onClick={() => {
                  this.handleClick("3");
                }}
              >
                3
              </button>
              <button
                id="decimal"
                onClick={() => {
                  this.handleClick(".");
                }}
              >
                .
              </button>
              <button
                id="zero"
                onClick={() => {
                  this.handleClick("0");
                }}
              >
                0
              </button>
              <button
                id="equals"
                onClick={() => {
                  this.handleClick("=");
                }}
              >
                =
              </button>
            </div>
          </div>
          <div className="grid-container1">
            <div className="button-container">
              <button
                id="clear"
                onClick={() => {
                  this.handleClick("AC");
                }}
              >
                AC
              </button>
              <button
                id="divide"
                onClick={() => {
                  this.handleClick("/");
                }}
              >
                /
              </button>
              <button
                id="multiply"
                onClick={() => {
                  this.handleClick("*");
                }}
              >
                X
              </button>
              <button
                id="subtract"
                onClick={() => {
                  this.handleClick("-");
                }}
              >
                -
              </button>
              <button
                id="add"
                onClick={() => {
                  this.handleClick("+");
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
