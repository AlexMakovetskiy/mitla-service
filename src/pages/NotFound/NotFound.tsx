import { FC } from 'react';

import Title from '../../components/title/Title';

import '../../style/reset.scss'; 
import '../../style/common.scss'; 
import './NotFound.scss';

const NotFound: FC = () => {
    return (
        <div className="notfound-page-wrap medium-container">
            <Title content="Error 404! Page not found." fontSize="42" lineHeight="46" fontWeight="600" />
        </div>
    );
};

export default NotFound;

