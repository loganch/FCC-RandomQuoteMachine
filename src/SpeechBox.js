import React, { Component } from 'react';

var styles = {
    quote: {
        textIndent: '-.5em',
        marginLeft: '.5em'
    }
}

class SpeechBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-8 col-xs-offset-2" style={ this.props.style }>
                <p>{ this.props.speaker }</p>
                <p style={ styles.quote }>&ldquo;{ this.props.quote }&rdquo;</p>
            </div>
        )
    }
}

export default SpeechBox;