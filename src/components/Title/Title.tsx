import { FC } from 'react';

import { ITitleProps } from '../../interfaces/components/Props';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Title.scss';

const Title: FC<ITitleProps> = (props) => {
    function formatSize (defaultSize: number | string) {
        const sizeLetters = defaultSize.toString().split('');
        const lastLetter = sizeLetters.pop();
        sizeLetters.push('.'); 
        const convertedSize = sizeLetters.join('') + lastLetter + 'rem' ;
        return convertedSize;
    }

    const titleStyle = {
        fontSize: formatSize(props.fontSize),
        fontWeight: props.fontWeight,
        lineHeight: formatSize(props.lineHeight),
    };

    return (
        <p style={titleStyle} className="title-text">{props.content}</p>
    );
};

export default Title;