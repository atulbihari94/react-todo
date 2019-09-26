import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counter = this.state.counters.filter( c => c.id !== counterId);
    this.setState({counter:counter});
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id = {counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
