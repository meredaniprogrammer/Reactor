import React, { Component } from "react";

class Developer extends Component {
  render() {
    const { developers } = this.props;
    const devList = developers.map((developer) => {
      return (
        <div>
          <h3>Name: {developer.name}</h3>
          <h4>Location: {developer.location}</h4>
          <h5>Owner: {developer.owner}</h5>
        </div>
      );
    });
    return <div>{devList}</div>;
  }
}

export default Developer;
