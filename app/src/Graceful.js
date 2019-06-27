import React from 'react';
import './Graceful.css';



class Graceful extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data: null
        }
    }
    componentDidMount() {

        fetch("https://quotes.rest/qod.json")
            .then(response => response.json())
            .then(data => {
                let datum = data.contents.quotes[0];
                this.setState({data: datum});
            })
    }

    render() {
        if(!this.state.data) {
            return null;
        }
        console.log(this.state);
        return (
            <div className="error-message">
                <div className="inner-text">
                    <h1>Oops!</h1>
                    <p style={{borderBottom: "1px solid grey", paddingBottom: "20px"}}>
                        Looks like something went wrong. Please retry your request.
                    </p>
                </div>

                <div className="quote">
                    <p style={{fontStyle: "italic"}}>{this.state.data.quote}</p>
                    <p style={{fontWeight: 600, fontStyle: "italic"}}> - {this.state.data.author}</p>
                    <p style={{fontSize: 10}}>Daily quote courtsey of TheySaidSo.com</p>
                </div>
            </div>
        )
    }
}

export default Graceful;