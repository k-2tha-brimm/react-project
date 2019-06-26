import React from 'react';
import logo from './logo.svg';
import './App.css';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.plugco.in/public/take_home_sample_feed/";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }
  
  componentDidMount() {
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(() => console.log("Can't access " + url + " response. Blocked by Browser?"));

    console.log(this.state);
  }


  render () {

    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
