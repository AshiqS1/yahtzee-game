import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],   // for 6-sided die.
    val: 1 // initial value for rolling die animation. 
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numberWords, val, locked, disabled, rolling } = this.props;
    return (
      <i
        className={
          `Die fa-solid fa-dice-${numberWords[val - 1]} 
            ${locked && "Die-locked"} 
            ${rolling && "Die-rolling"}`
        }
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;