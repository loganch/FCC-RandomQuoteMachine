import React, { Component } from 'react';
import SpeechBox from './SpeechBox';
import Choices from './Choices';
import fetchJsonp from 'fetch-jsonp';

const style = {
    app: {
        fontFamily: 'Verdana',
        color: 'white',

    },
    box: {
        background: '#000000',
        backgroundImage: 'linear-gradient(#04009d, transparent), linear-gradient(#04009d, transparent)',
        border: 'solid 1px #424542',
        boxShadow: '2px 2px #e7dfe7, -2px -2px #e7dfe7, 2px -2px #e7dfe7, -2px 2px #e7dfe7, 0 -4px #9c9a9c, -4px 0 #7b757b, 0 4px #424542',
        padding: '5px 10px',
        borderRadius: '7px',
        marginTop: '2rem',
    },
    quoteBox: {
        fontSize: '1.75rem'
    },
    choiceBox: {
        fontSize: '1.5rem'
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
        console.log("Getting quote...");
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

    componentDidMount() {
        this.getNewQuote();
    }

    render() {
        return (
            <div className="container" style={ style.app }>
                <div className="row">
                    <h1 className="text-center">Random Quote Machine</h1>
                </div>
                <div className="row">
                    <SpeechBox speaker={ this.state.speaker } 
                        quote={ this.state.quote }
                        style={ Object.assign(style.box, style.quoteBox) } />
                </div>
                <div className="row" >
                    <Choices newQuote={ this.getNewQuote.bind(this) } 
                        quote={ this.state.quote } 
                        speaker={ this.state.speaker } 
                        style={ Object.assign(style.box, style.choiceBox) }/>
                </div>
            </div>
        );
    }
}

export default App;