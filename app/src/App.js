import React from 'react';
import './App.css';
import Campaign from './Campaign.js'
import TopNav from './Topbar.js'

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
  }


  render () {

    if(!this.state.data) {
      return null;
    }

    let campaigns = (
      this.state.data.campaigns.map((camp, idx) => (
        <li className="campaign-name"
          style={{listStyle: "none"}}
          key={idx}>
            <Campaign campaign={camp} />
          </li>
      ))
    )

    return (
      <div className="App">
        <TopNav />
        <ul style={{paddingLeft: 0, width: "100%"}}>
          {campaigns}
        </ul>
      </div>
    );
  }
}

export default App;
