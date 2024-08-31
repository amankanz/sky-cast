import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "Kampala" };
  }

  render() {
    return (
      <main className="app">
        <h1>Classy Skycast</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button>Get weather</button>
      </main>
    );
  }
}

export default App;
