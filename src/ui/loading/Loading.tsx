import { FC } from 'react';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Loading.scss';

const Loading: FC = () => {
    return (
        <h2 className="loading-element">Loading...</h2>
    );
};

export default Loading;
