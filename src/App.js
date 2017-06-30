import React, { Component } from 'react';
import SpeechBox from './SpeechBox';
import Choices from './Choices';

const style = {
    app: {
        fontFamily: 'Verdana'
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            speaker: "Speaker",
            quote: "Quote",
        };
    }

    getNewQuote() {
        this.setState({
            speaker: "New Speaker",
            quote: "New Quote"
        });
    }

    render() {
        return (
            <div className="container" style={ style.app }>
                <div className="row">
                    <h1 className="text-center">Random Quote Machine</h1>
                </div>
                <div className="row">
                    <SpeechBox speaker={ this.state.speaker } quote={ this.state.quote } />
                </div>
                <div className="row">
                    <Choices newQuote={ this.getNewQuote.bind(this) } quote={ this.state.quote } />
                </div>
            </div>
        );
    }
}

export default App;