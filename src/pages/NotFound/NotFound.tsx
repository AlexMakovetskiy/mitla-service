import React from 'react';

import Title from '../../components/Title/Title';

import '../../style/reset.scss'; 
import '../../style/common.scss'; 
import './NotFound.scss';

class NotFound extends React.Component {
    render () {
        return (
            <div className="notfound-page-wrap medium-container">
                <Title content="Error 404! Page not found." fontSize="42" lineHeight="46" fontWeight="600" />
            </div>
        );
    }
}

export default NotFound;

