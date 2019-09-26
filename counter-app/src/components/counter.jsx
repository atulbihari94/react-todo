import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };
  // handleIncreement = product => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreement(this.props.counter)}
          className="btn btn-secondry btn-sm"
        >
          Increements
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
