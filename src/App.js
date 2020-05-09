import React, { Component } from "react";
import Developer from "./Developer";
class App extends Component {
  state = {
    developers: [
      { name: "EazeTech", location: "Abia State", owner: "Ezekiel Nnochiri" },
      { name: "MaB Tech", location: "Enugu State", owner: "Eze Bernadine" },
      { name: "TrackHub", location: "Lagos State", owner: "Okpara Favour" },
    ],
  };
  render() {
    return (
      <div>
        <h1>List Of Developer Hubs Owned By Igbo</h1>
        <h2>
          The following are the list of developer hubs owned by young Igbos
        </h2>
        <Developer developers={this.state.developers} />
      </div>
    );
  }
}

export default App;
