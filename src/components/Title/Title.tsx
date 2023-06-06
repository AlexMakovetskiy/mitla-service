import '../../style/reset.scss';
import '../../style/common.scss';

interface ITitle {
    content: string,
    fontSize: number,
    fontWeight: number,
    lineHeight: number,
}

function Title ({content, fontSize, fontWeight, lineHeight}: ITitle) {
    function formatSize (defaultSize: number) {
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
        <p style={titleStyle} className="title-text">{content}</p>
    );
}

export default Title;