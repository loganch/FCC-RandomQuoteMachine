import React, { Component } from 'react';

var styles = {
    
}

class SpeechBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well col-xs-8 col-xs-offset-2">
                <p style={ styles.speaker }>{ this.props.speaker }</p>
                <p>{ this.props.quote }</p>
            </div>
        )
    }
}

export default SpeechBox;