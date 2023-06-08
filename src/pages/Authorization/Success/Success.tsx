import { FC } from 'react';

import Title from '../../../ui/title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './Success.scss';

const Success: FC = () => {
    return (
        <div className="success-page-wrap medium-container">
            <Title content="Sign in process was successful!" fontSize="42" lineHeight="46" fontWeight="600" />
        </div>
    );
};

export default Success;