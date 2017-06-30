import React, { Component } from 'react';

class Choices extends Component {
    constructor(props) {
        super(props)
    }

    tweetQuote() {
        var tweet = escape(this.props.quote)
        if (this.props.speaker) {
            tweet +=  ' - ' + this.props.speaker
        }
        window.open('https://twitter.com/intent/tweet?text=' + tweet)
    }
    
    render() {
        return (
            <div className="col-xs-3 col-xs-offset-6" style={ this.props.style } id="options">
                <div><a href="#" onClick={ this.props.newQuote }>New Quote</a></div>
                <div><a href="#" onClick={ this.tweetQuote.bind(this) }>Tweet Quote</a></div>
            </div>
        )
    }
}

export default Choices;