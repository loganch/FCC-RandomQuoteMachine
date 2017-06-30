import React, { Component } from 'react';

class Choices extends Component {
    constructor(props) {
        super(props)
    }

    tweetQuote() {
        alert(this.props.quote);
    }

    render() {
        
        return (
            <div className="col-xs-3 col-xs-offset-6">
                <div><a id="new" href="#" onClick={ this.props.newQuote }>New Quote</a></div>
                <div><a id="quote" href="#" onClick={ this.tweetQuote.bind(this) }>Tweet this Quote</a></div>
            </div>
        )
    }
}

export default Choices;