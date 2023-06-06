import React from 'react';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Title.scss';

class Title extends React.Component {
    formatSize (defaultSize) {
        const sizeLetters = defaultSize.toString().split('');
        const lastLetter = sizeLetters.pop();
        sizeLetters.push('.'); 
        const convertedSize = sizeLetters.join('') + lastLetter + 'rem' ;
        return convertedSize;
    }

    titleStyle = {
        fontSize: this.formatSize(this.props.fontSize),
        fontWeight: this.props.fontWeight,
        lineHeight: this.formatSize(this.props.lineHeight),
    };
    render () {
        return (
            <p style={this.titleStyle} className="title-text">{this.props.content}</p>
        );
    }
}

export default Title;