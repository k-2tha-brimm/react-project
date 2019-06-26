import React from 'react';
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
  }


  render () {

    if(!this.state.data) {
      console.log('NO DATA');
      return null;
    } else {
      this.state.data.campaigns.forEach(camp => {
        console.log(camp);
      })
    }

    let campaigns = (
      this.state.data.campaigns.map(camp => (
        <li className="campaign-name" style={{listStyle: "none"}}>{camp.campaign_name}</li>  
      ))
    )

    return (
      <div className="App">
          <ul>
            {campaigns}
          </ul>
      </div>
    );
  }
}

export default App;
