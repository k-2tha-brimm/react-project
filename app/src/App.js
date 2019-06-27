import React from 'react';
import './App.css';
import Campaign from './Campaign.js'
import TopNav from './Topbar.js'
import Graceful from './Graceful.js'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://www.plugco.in/public/take_home_samplefeed/";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      failure: false
    }
  }
  
  componentDidMount() {
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(() => {
        this.setState({ failure: true })
      });
  }


  render () {

    if(!this.state.data && this.state.failure === false) {
      return (
        <div>
          <TopNav />
          <div className="loader"></div>
        </div>
      )
    } else if(this.state.failure && !this.state.data) {
      return (
        <div className="App">
          <TopNav />
          <Graceful />
        </div>
      );
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

    if(this.state.failure === false) {
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
}

export default App;
