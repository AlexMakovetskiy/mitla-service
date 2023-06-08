import { FC } from 'react';

import { ITitleProps } from '../../interfaces/components/Props';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Title.scss';

const Title: FC<ITitleProps> = ({fontSize = '2.6', fontWeight = 400, lineHeight= '2.6', content = 'text'}) => {
    function formatSize (defaultSize: number | string) {
        const sizeLetters = defaultSize.toString().split('');
        const lastLetter = sizeLetters.pop();
        sizeLetters.push('.'); 
        const convertedSize = sizeLetters.join('') + lastLetter + 'rem' ;
        return convertedSize;
    }

    const titleStyle = {
        fontSize: formatSize(fontSize),
        fontWeight: fontWeight,
        lineHeight: formatSize(lineHeight),
    };

    return (
        <p style={titleStyle} className="title-text" data-testid="title-text-all-purpose-element">{content}</p>
    );
};

export default Title;