import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handelDelete = (id) => {
    console.log('delete ', id);
    const newCounters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters: newCounters});
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.state.counters.map((counters) => (
          <Counter onDelete={this.handelDelete} key={counters.id} value={counters.value} CounId={counters.id}>
            <h3>Title</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;
