import React, { Component } from 'react';
import SpeechBox from './SpeechBox';
import Choices from './Choices';
import fetchJsonp from 'fetch-jsonp';

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
        var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote'
        fetchJsonp(url, { jsonpCallbackFunction: 'parseQuote' })
        .then(response => {
            return response.json()
        }).then(json => {
            this.setState({
                speaker: json.quoteAuthor,
                quote: json.quoteText
            });
        })
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
                    <Choices newQuote={ this.getNewQuote.bind(this) } quote={ this.state.quote } speaker={ this.state.speaker } />
                </div>
            </div>
        );
    }
}

export default App;