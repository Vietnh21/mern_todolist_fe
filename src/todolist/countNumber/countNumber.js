import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withRouter } from "../hook/navigate";

class CountNumber extends Component {
  constructor(props) {
    console.log("Counter Contructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  componentDidMount() {
    console.log("Counter did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state);
    if (nextState === this.state) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("dead");
  }

  render() {
    console.log("Count render");
    return (
      <div className="counter">
        <Link to="/todo">
          <button className="btc-back">Back</button>
        </Link>
        <button onClick={() => this.decrease()}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  }
}

export default withRouter(CountNumber);
